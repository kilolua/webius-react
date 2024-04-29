import CardInfo from "@/4-widgets/BottomBar/cardInfo/CardInfo.tsx";
import styled from "styled-components";

const BottomBar = () => {
    return (
        <ClientInfo>
            <CardInfo/>
            {/*<div className="comInf text-light-text-secondary-19-Regular" id="comInf">Возможна комиссия,*/}
            {/*    продолжить?*/}
            {/*</div>*/}
            {/*<div className="botButtons">*/}
            {/*    <div className="btn botBtn" id="button-changePinS">*/}
            {/*        <span className="text-brand-23-Regular"></span>*/}
            {/*    </div>*/}
            {/*    <div className="yesBtn text-brand-23-Regular clickActive" id="yes"*/}
            {/*         onClick="closeDialog();setResult('balance');">Да*/}
            {/*    </div>*/}
            {/*    <div className="noBtn text-White-23-Regular clickActive" id="no" onClick="closeDialog()">Нет*/}
            {/*    </div>*/}
            {/*    <div className="btn botBtn" id="button-balance">*/}
            {/*        <span className="text-brand-23-Regular"></span>*/}
            {/*        <img src="" alt=""/>*/}
            {/*        <div className='loader loader3'>*/}
            {/*            <div>*/}
            {/*                <div>*/}
            {/*                    <div>*/}
            {/*                        <div>*/}
            {/*                            <div>*/}
            {/*                                <div></div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="btn botBtn" id="button-statement">*/}
            {/*        <span className="text-brand-23-Regular"></span>*/}
            {/*        <img src="" alt=""/>*/}
            {/*        <div className='loader loader3'>*/}
            {/*            <div>*/}
            {/*                <div>*/}
            {/*                    <div>*/}
            {/*                        <div>*/}
            {/*                            <div>*/}
            {/*                                <div></div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </ClientInfo>
    );
};

const ClientInfo = styled.div`
    position: absolute;
    left: 24px;
    top: 424px;

    border-radius: 16px;
    border: 1px solid var(--light-brand-24);
    background: var(--white-btn);

    display: flex;
    padding: 16px 16px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    width: 976px;
    height: 92px;
`

export default BottomBar;