import {useStores} from "@/1-app/store/useStores.ts";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import Idle from "@/3-pages/idlePage/Idle.tsx";
import WaitPage from "@/3-pages/waitPage/WaitPage.tsx";
import PinPage from "@/3-pages/pinPage/PinPage.tsx";

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