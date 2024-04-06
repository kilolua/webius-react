import {Idle} from "@/3-pages/idlePage";
import {Pin} from "@/3-pages/pinPage";
import {useStores} from "@/1-app/store/useStores.ts";
import MainMenuPage from "@/3-pages/MainMenuPage.tsx";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";

const Main = () => {
    const {store} = useStores();
    useEffect(() => {
        console.log('store refresh')
    }, [store.currentScreen]);

    function renderScreen(){
        switch (store.currentScreen) {
            case 'idle':
                return <Idle/>
            case 'pin':
                return <Pin/>
            case 'main_menu':
                return <MainMenuPage/>
            case 'balance_ok':
                console.log('balance_res_ok');
        }
    }

    return (
        !!store.currentScreen && renderScreen()
    );
};

export default observer(Main);