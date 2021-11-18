import { doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
const db = getFirestore();

export const addSolvedQuestion = (uid, qid, note) => {

    const userRef = doc(db, "users", uid,);
    return setDoc(userRef, {
        completed: {
            [qid]: {
                note,
                completedOn: serverTimestamp()
            }
        }
    },
        { merge: true }
    );
}