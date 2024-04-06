import {useEffect} from "react";
import {useStores} from "@/1-app/store/useStores.ts";
import {observer} from "mobx-react-lite";

const Init = ()=>{
    const {store} = useStores();
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
            store.setCurrentScreen(event.data);
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

export default observer(Init);