import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth();
const GoogleProvider = new GoogleAuthProvider();

export function signInWithGoogle() {
  auth.languageCode = auth.useDeviceLanguage();
  console.log("signing innnn");
  signInWithPopup(auth, GoogleProvider)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    });
}