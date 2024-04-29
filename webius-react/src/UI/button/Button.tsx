import {FC} from "react";
import styled from "styled-components";

interface Props {
    text: string,
    icon: string
}

const Button:FC<Props> = ({text, icon}) => {
    return (
        <Container className="btn">
            <span className="text-White-23-Regular">{text}</span>
            <img src={icon} alt=""/>
        </Container>
    );
};

const Container = styled.div`
    padding: 24px 24px 24px 32px;
    align-items: center;
    gap: 16px;

    border-radius: 100px;
    background: var(--light-button-outlined-brand-text);
`

export default Button;