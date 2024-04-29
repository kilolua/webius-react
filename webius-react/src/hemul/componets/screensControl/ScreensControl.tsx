import {screens} from "@/constants/screens.ts";
import {useStores} from "@/1-app/store/useStores.ts";
import {observer} from "mobx-react-lite";
import styled from "styled-components";

const ScreensControl = () => {
    const {store} = useStores();

    const setCurrentScreen = (screen: string) => {
        store.setCurrentScreen(screen)
    }

    return (
        <>
            <div>
                Сигналы теллми
            </div>
            <Container>
                {screens.map((item) => (
                    <button onClick={() => setCurrentScreen(item)}>{item}</button>
                ))}
            </Container>
        </>
    );
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default observer(ScreensControl);