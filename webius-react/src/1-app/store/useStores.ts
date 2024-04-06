import { useContext } from "react";
import {StoreContext} from "@/1-app/store/provider.tsx";


export const useStores = () => {
    return useContext(StoreContext);
};