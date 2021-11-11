import { createContext } from 'react';
import { getAuth } from 'firebase/auth';

const auth = getAuth();
export const userContext = createContext({
    user: auth.currentUser,
});
