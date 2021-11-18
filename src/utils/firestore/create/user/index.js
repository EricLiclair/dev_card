import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const db = getFirestore();

export const addUserToDb = (uid, initializingData) => {
    const userDocRef = doc(db, "users", uid);
    return setDoc(userDocRef, initializingData);
}