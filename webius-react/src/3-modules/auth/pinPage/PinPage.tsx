import './pinPage.css';
import PinItem from "@/UI/pinItem/PinItem.tsx";
import {useEffect, useState} from "react";
import Button from "@/UI/button/Button.tsx";
import styled from "styled-components";


const PinPage = () => {
    const [pin, setPin] = useState('');
    const pinArray = getPinArray(pin);

    function getPinArray(str: string | string[]){
        let res = [];
        for (let i = 0; i < 4; i++){
            if (str[i] === '*'){
                res.push(true);
            }
            else{
                res.push(false);
            }
        }
        return res;
    }

    const keyDown = (event: { code: string; }) => {
        if (event.code === 'Backspace') {
            setPin('');
        }
        else{
            setPin(prev => prev + '*');
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyDown)
        return () => {
            document.removeEventListener('keydown', keyDown);
        }
    }, []);

    return (
        <div>
            <div className="content">
                <div style={{color: '#FFFFFF'}} className="text-light-text-primary-34-Medium">Введите ПИН</div>
                <div className="pinContainer" id="pin-container">
                    {pinArray.map((item, index) => (
                        <PinItem fill={item} key={index}/>
                    ))}
                </div>
                <div className="text-White-23-Regular"></div>
            </div>
            <ExitButtonContainer>
            <Button text={'Завершить'} icon={''}/>
            </ExitButtonContainer>
            <ContinueButtonContainer>
                <Button text={'Продолжить'} icon={''}/>
            </ContinueButtonContainer>
        </div>
    );
};

const ExitButtonContainer = styled.div`
    position: absolute;
    top: 668px;
    left: 24px;
    right: unset;
`

const ContinueButtonContainer = styled.div`
    position: absolute;
    top: 668px;
    right: 24px;
`

export default PinPage;