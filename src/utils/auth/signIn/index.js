import { getAuth, onAuthStateChanged, signInWithCredential, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";

const auth = getAuth();


function isUserEqual(googleUser, firebaseUser) {
    console.log(googleUser)
    if (firebaseUser) {
        const providerData = firebaseUser.providerData;
        for (let i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === GoogleAuthProvider.PROVIDER_ID && providerData[i].uid === googleUser.id) {
                // We don't need to reauth the Firebase connection.
                return true;
            }
        }
    }
    return false;
}

function onSignIn(googleUser) {

    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        unsubscribe();

        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {

            // Build Firebase credential with the Google ID token.
            const credential = GoogleAuthProvider.credential(GoogleAuthProvider.credentialFromResult(googleUser).idToken);

            // Sign in with credential from the Google user.
            signInWithCredential(auth, credential)
                .then((res) => console.log("sign in successfull", res))
                .catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.email;
                    // The credential that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                    console.log(errorCode, errorMessage, email, credential, "ERROR")
                });
        } else {
            console.log('User already signed-in Firebase.');
        }
    });
}

export function signInWithGoogle() {
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    auth.languageCode = auth.useDeviceLanguage();
    signInWithRedirect(auth, GoogleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            console.log(result, user, token);
            onSignIn(result);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential);
        });

}