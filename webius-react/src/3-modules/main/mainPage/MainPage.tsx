import ButtonOper from "@/3-modules/main/UI/ButtonOper/ButtonOper.tsx";
import CashoutIcon from '../assets/cashoutIcon.png';
import CashinIcon from '../assets/cashinIcon.png';
import TransferIcon from '../assets/transferIcon.png';
import PinchangeIcon from '../assets/pinChangeIcon.png';
import './menu.css';
import {observer} from "mobx-react-lite";
import {useStores} from "@/1-app/store/useStores.ts";

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

                {/*<div className="clientInfo">*/}
                {/*    <div className="cardInfo">*/}
                {/*        <img style="border-radius: 8px" id="image-card" alt="" src=""/>*/}
                {/*        <div className="cardInfoText">*/}
                {/*            <div className="bankName text-light-text-primary-23-Medium" id="label-cardText"></div>*/}
                {/*            <div className="textNumberCard" id="label-cardNumberText"></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="comInf text-light-text-secondary-19-Regular" id="comInf">Возможна комиссия,*/}
                {/*        продолжить?*/}
                {/*    </div>*/}
                {/*    <div className="botButtons">*/}
                {/*        <div className="btn botBtn" id="button-changePinS">*/}
                {/*            <span className="text-brand-23-Regular"></span>*/}
                {/*        </div>*/}
                {/*        <div className="yesBtn text-brand-23-Regular clickActive" id="yes"*/}
                {/*             onClick="closeDialog();setResult('balance');">Да*/}
                {/*        </div>*/}
                {/*        <div className="noBtn text-White-23-Regular clickActive" id="no" onClick="closeDialog()">Нет*/}
                {/*        </div>*/}
                {/*        <div className="btn botBtn" id="button-balance">*/}
                {/*            <span className="text-brand-23-Regular"></span>*/}
                {/*            <img src="" alt=""/>*/}
                {/*            <div className='loader loader3'>*/}
                {/*                <div>*/}
                {/*                    <div>*/}
                {/*                        <div>*/}
                {/*                            <div>*/}
                {/*                                <div>*/}
                {/*                                    <div></div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="btn botBtn" id="button-statement">*/}
                {/*            <span className="text-brand-23-Regular"></span>*/}
                {/*            <img src="" alt=""/>*/}
                {/*            <div className='loader loader3'>*/}
                {/*                <div>*/}
                {/*                    <div>*/}
                {/*                        <div>*/}
                {/*                            <div>*/}
                {/*                                <div>*/}
                {/*                                    <div></div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="btn backCard" id="button-exit">*/}
                {/*    <span className="text-White-23-Regular"></span>*/}
                {/*    <img src="" alt=""/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default observer(MainPage);