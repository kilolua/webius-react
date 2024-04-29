import CardInfo from "@/4-widgets/BottomBar/cardInfo/CardInfo.tsx";
import styled from "styled-components";
import Button from "@/4-widgets/BottomBar/UI/button/Button.tsx";

const BottomBar = () => {
    return (
        <ClientInfo>
            <CardInfo/>
            <ButtonsContainer>
                <Button text={'Баланс'}/>
                <Button text={'Выписка'}/>
            </ButtonsContainer>
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

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

export default BottomBar;