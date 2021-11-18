import { doc, updateDoc, deleteField } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";


const db = getFirestore();

export const removeSolvedQuestion = (uid, qid) => {
    const solutionSetRef = doc(db, "users", uid);

    return updateDoc(solutionSetRef, {
        [`completed.${qid}`]: deleteField()
    })
    // .then((res) => {
    //     console.log('QUESTION REMOVED FROM COMPLETED LIST', res)
    // })
    // .catch((err) => {
    //     console.log('ERROR REMOVING FROM COMPLETED LIST', err)
    // })
}