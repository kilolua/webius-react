import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import {Idle} from "@/3-pages/idlePage";
import {Pin} from "@/3-pages/pinPage";
import {useEffect} from "react";

const Main = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Init/>}></Route>
                    <Route path={'/idle'} element={<Idle/>}></Route>
                    <Route path={'/pin'} element={<Pin/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

const Init = ()=>{
    const navigate = useNavigate();
    function websocet(){
        const socket = new WebSocket(`ws://localhost:8080/`);
        socket.onopen = async (event) => {
            console.log(event);

        };
        socket.onclose = function (event) {
            console.log("Соединение закрыто ." + event);
        };
        socket.onmessage = (event: MessageEvent<string>) => {
            console.log(event.data);
            navigate('/'+event.data);
            // store.setCurrentScreen(event.data);
        };
        socket.onerror = function (error) {
            console.log("Ошибка " + error);
        };
    }

    useEffect(() => {
        websocet();
    }, []);

    return <></>
}

export default Main;