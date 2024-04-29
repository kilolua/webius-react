import Loader from "@/UI/loader/Loader.tsx";
import {FC} from "react";
import styled from "styled-components";

interface Props {
    text: string,
}

const Button:FC<Props> = ({text}) => {
    return (
        <Container className="btn">
            <span className="text-brand-23-Regular">{text}</span>
            <Loader/>
        </Container>
    );
};

const Container = styled.div`
    align-items: center;
    justify-content: center;
    gap: 16px;

    min-width: 167px;
    min-height: 60px;

    padding-left: 24px;
    padding-right: 24px;

    border-radius: 8px;
    border: 2px solid var(--light-button-outlined-brand-border-normal);
    transition: opacity 0.3s ease;
`

export default Button;