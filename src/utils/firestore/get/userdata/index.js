import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

import { addUserToDb } from "../../create/user";

const db = getFirestore();

export const GetUserData = (uid) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function getData_() {
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setData(docSnap.data());
                setLoading(false);
                console.log("Document data:", docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                const initializingData = {
                    completed: {},
                    flashSeen: {}
                }
                addUserToDb(uid, initializingData)
                    .then((res) => {
                        setData(initializingData);
                        setLoading(false);
                        console.log("No such document! Created one for the specified user", res);
                    })
                    .catch((err) => {
                        setError(err);
                        setLoading(false);
                        console.log("No such document! Unable to initialize db for the specified user", err);
                    })
            }
        }
        getData_();
    }, [uid])
    return [data, loading, error];
}