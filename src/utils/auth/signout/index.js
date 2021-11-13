import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

export const SignOut = () => {
    signOut(auth);
}