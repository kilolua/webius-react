import Hemul from "@/hemul/Hemul.tsx";
import {useState} from "react";
import {observer} from "mobx-react-lite";
import styled from "styled-components";

const HemulContainer = () => {
    const [show, setShow] = useState(false);
    return (
        <Container>
            <button style={{opacity:"0.5"}} onClick={()=>{setShow(!show)}}>Настройки</button>
            {show && <Hemul/>}
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
    left: 0;
    top: 0;
`

export default observer(HemulContainer);