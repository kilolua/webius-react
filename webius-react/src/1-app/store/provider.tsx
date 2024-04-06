import { createContext, ReactNode } from "react";
import RootStore from "@/1-app/store/store.ts";

const store = new RootStore();
export const StoreContext = createContext({store});

export const StoreWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <StoreContext.Provider value={{store}}>{children}</StoreContext.Provider>
    );
};