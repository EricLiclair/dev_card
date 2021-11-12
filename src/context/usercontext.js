import { createContext } from 'react';
import { getAuth } from 'firebase/auth';

export const userContext = createContext({
    user: null,
    loading: false
});
