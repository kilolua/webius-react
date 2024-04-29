import ButtonOper from "@/3-modules/main/UI/ButtonOper/ButtonOper.tsx";
import CashoutIcon from '../assets/cashoutIcon.png';
import CashinIcon from '../assets/cashinIcon.png';
import TransferIcon from '../assets/transferIcon.png';
import PinchangeIcon from '../assets/pinChangeIcon.png';
import './menu.css';
import {observer} from "mobx-react-lite";
import {useStores} from "@/1-app/store/useStores.ts";
import BottomBar from "@/4-widgets/BottomBar/BottomBar.tsx";

const MainPage = () => {
    const {store} = useStores();
    return (
        <div className="main">
            <div id="content">
                <div className="title text-light-text-primary-34-Medium" id="label-title"></div>

                <div className="buttons">
                    <ButtonOper visible={store.AtmStore.dispenser} title={'Снятие'} image={CashoutIcon} subText={'Мелкими и крупными'}></ButtonOper>
                    <ButtonOper visible={store.AtmStore.acceptor} title={'Внести'} image={CashinIcon} subText={'Без лимитов'}></ButtonOper>
                    <ButtonOper visible={true} title={'Перевести'} image={TransferIcon} subText={'На другую карту'}></ButtonOper>
                    <ButtonOper visible={true} title={'Сменить ПИН'} image={PinchangeIcon} subText={''}></ButtonOper>
                </div>

                <BottomBar/>

                <div className="btn backCard" id="button-exit">
                    <span className="text-White-23-Regular"></span>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default observer(MainPage);