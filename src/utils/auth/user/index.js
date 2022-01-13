import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth();

export const GetUser = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(user);
        setLoading(false);
      }
    });
  }, []);

  return [user, loading];
};
