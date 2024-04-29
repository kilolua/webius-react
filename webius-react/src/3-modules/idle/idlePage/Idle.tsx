import {FC, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import './idle.css'
import InsertCardAnim from './assets/insertCard_idle.webm';
import {useStores} from "@/1-app/store/useStores.ts";

const Idle: FC = () => {

    const {store} = useStores();

    useEffect(() => {
        store.AtmStore.refreshAtmStatus();
    }, []);

    return (
        <>
            <div className='idle' id="idle">
                <div className="anim_and_title">
                    <div className="setCard">
                        <video playsInline autoPlay muted loop>
                            <source src={InsertCardAnim} type="video/webm"/>
                        </video>
                    </div>
                    <div className="title text-light-text-constant-23-Medium">Приложите или вставьте карту</div>
                </div>
                <div className="idleCard clickActive">
                    <div className="idleCardText1">Стать клиентом ВТБ</div>
                </div>
            </div>
        </>
    );
};

export default observer(Idle);