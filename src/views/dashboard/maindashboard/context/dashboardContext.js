import { createContext } from "react";

export const dashBoardContext = createContext({
    currentTab: 0,
    setCurrentTab: () => { }
})