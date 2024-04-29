import {useStores} from "@/1-app/store/useStores.ts";
import {useId} from "react";
import {observer} from "mobx-react-lite";
import styled from "styled-components";

const DeviceControl = () => {
    const {store} = useStores();
    const dispenserId = useId();
    const acceptorId = useId();

    return (
        <Container>
            <div>
                <label htmlFor={dispenserId}>Диспенсер</label>
                <input
                    checked={store.AtmStore.dispenser}
                    onChange={(event) => {
                        store.AtmStore.setDispenser(event.target.checked)
                    }}
                    type='checkbox' id={dispenserId}>
                </input>
            </div>
            <div>
                <label htmlFor={acceptorId}>Приемник</label>
                <input
                    checked={store.AtmStore.acceptor}
                    onChange={(event) => {
                        store.AtmStore.setAcceptor(event.target.checked)
                    }}
                    type='checkbox' id={acceptorId}>
                </input>
            </div>
        </Container>
    );
};


const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export default observer(DeviceControl);