import ButtonOper from "@/3-modules/main/UI/ButtonOper/ButtonOper.tsx";
import CashoutIcon from '../assets/cashoutIcon.png';
import CashinIcon from '../assets/cashinIcon.png';
import TransferIcon from '../assets/transferIcon.png';
import PinchangeIcon from '../assets/pinChangeIcon.png';
import './menu.css';
import {observer} from "mobx-react-lite";
import {useStores} from "@/1-app/store/useStores.ts";
import BottomBar from "@/4-widgets/BottomBar/BottomBar.tsx";
import styled from "styled-components";
import Button from "@/UI/button/Button.tsx";

const MainPage = () => {
    const {store} = useStores();

    return (
        <div className="main">
            <div id="content">
                <Title className="text-light-text-primary-34-Medium">title</Title>

                <div className="buttons">
                    <ButtonOper visible={store.AtmStore.dispenser} title={'Снятие'} image={CashoutIcon} subText={'Мелкими и крупными'}></ButtonOper>
                    <ButtonOper visible={store.AtmStore.acceptor} title={'Внести'} image={CashinIcon} subText={'Без лимитов'}></ButtonOper>
                    <ButtonOper visible={true} title={'Перевести'} image={TransferIcon} subText={'На другую карту'}></ButtonOper>
                    <ButtonOper visible={true} title={'Сменить ПИН'} image={PinchangeIcon} subText={''}></ButtonOper>
                </div>

                <BottomBar/>

                <ExitButtonContainer>
                    <Button icon={''} text={'Завершить'}/>
                </ExitButtonContainer>
            </div>
        </div>
    );
};

const ExitButtonContainer = styled.div`
    position: absolute;
    right: 24px;
    bottom: 24px;
`


const Title = styled.div`
    position: absolute;
    left: 0;
    top: 94px;
    width: 100%;
    text-align: center;
`

export default observer(MainPage);