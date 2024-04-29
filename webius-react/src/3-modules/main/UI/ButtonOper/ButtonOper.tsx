import {FC} from "react";
import styled from "styled-components";


interface Props {
    title: string,
    subText: string,
    image:string,
    visible:boolean,
}

const ButtonOper: FC<Props> = ({title, subText, image, visible}) => {
    return (
        <ButtonContainer visible={visible} className="btn">
            <TextContainer>
                <span className="text-light-text-primary-23-Medium">{title}</span>
                <span className="text-light-text-secondary-16-Regular">{subText}</span>
            </TextContainer>
            <div className="btnImgSmall1">
                <img alt="" src={image}/>
            </div>
        </ButtonContainer>
    );
};


const ButtonContainer = styled.button<{visible?:boolean}>`
    display: ${props=>props.visible ? 'flex' : 'none'};
    border-radius: 16px;
    border: 1px solid var(--light-brand-24);
    background: var(--white-btn);
    min-width: 232px;
    height: 258px;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    flex: 1 1 0;
`

const TextContainer = styled.div`
    display: flex;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    flex: 1 0 0;
    align-self: stretch;
`


export default ButtonOper;