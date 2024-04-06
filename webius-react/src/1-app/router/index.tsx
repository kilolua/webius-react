import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {Idle} from "@/3-pages/idlePage";
import {Pin} from "@/3-pages/pinPage";

export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path={'/idle'} element={<Idle/>}></Route>
        <Route path={'/pin'} element={<Pin/>}></Route>
    </>
))