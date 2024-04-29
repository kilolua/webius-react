import styled from "styled-components";
import {observer} from "mobx-react-lite";
import {useStores} from "@/1-app/store/useStores.ts";

const CardInfo = () => {
    const {store} = useStores();
    return (
        <Container>
            <img style={{borderRadius: "8px"}} alt="" src={store.UserStore.bankImage}/>
            <TextContainer>
                <BankName className="bankName text-light-text-primary-23-Medium">{store.UserStore.bankName}</BankName>
                <CardNumber>{store.UserStore.pan}</CardNumber>
            </TextContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    margin-right: 24px;
    overflow: hidden;
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const TextContainer = styled.div`
    display: flex;
    gap: 4px;
    flex-direction: column;
    overflow: hidden;
`

const BankName = styled.div`
    overflow: hidden;
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const CardNumber = styled.div`
    color: rgba(34, 37, 43, 0.70);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
`

export default observer(CardInfo);