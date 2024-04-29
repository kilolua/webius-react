import {useStores} from "@/1-app/store/useStores.ts";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import Idle from "@/3-modules/idle/idlePage/Idle.tsx";
import WaitPage from "@/UI/waitPage/WaitPage.tsx";
import PinPage from "@/3-modules/auth/pinPage/PinPage.tsx";
import MainPage from "@/3-modules/main/mainPage/MainPage.tsx";

const Main = () => {
    const {store} = useStores();
    useEffect(() => {
        console.log('store refresh')
    }, [store.currentScreen]);

    function renderScreen(){
        switch (store.currentScreen) {
            case 'idle':
                return <Idle/>
            case 'wait':
                return <WaitPage/>
            case 'pin':
                return <PinPage/>
            case 'menu':
                return <MainPage/>
            case 'balance_ok':
                console.log('balance_res_ok');
                return <></>
            default:
                console.log('zadvinul mimo');
        }
    }

    return (
        <>
            {!!store.currentScreen && renderScreen()}
        </>
    );
};

export default observer(Main);