import ScreensControl from "@/hemul/componets/screensControl/ScreensControl.tsx";
import DeviceControl from "@/hemul/componets/diviceControl/DeviceControl.tsx";
import {observer} from "mobx-react-lite";
import styled from "styled-components";

const Hemul = () => {

    return (
        <Container>
            <ScreensControl/>
            <DeviceControl/>
        </Container>
    );
};

const Container = styled.div`
    position: absolute;

    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
    gap: 10px;

    border-radius: 10px;

    background: rgba(100%, 100%, 100%, 0.8);
`

export default observer(Hemul);