import './pinPage.css';
import PinItem from "@/UI/pinItem/PinItem.tsx";
import {useEffect, useState} from "react";


const PinPage = () => {
    const [pin, setPin] = useState('');

    const pinArray = getPinArray(pin);
    console.log(pinArray);

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
                <div className="title text-light-text-primary-34-Medium">Введите ПИН</div>
                <div className="note text-White-23-Regular"></div>

                <div className="pinContainer" id="pin-container">
                    {pinArray.map((item, index) => (
                        <PinItem fill={item} key={index}/>
                    ))}
                </div>
            </div>

            <div className="btn backCard white" id="button-exit">
                <span className="text-light-text-primary-23-Regular"></span>
                <img src="" alt=""/>
            </div>
            <div className="btn continue" id="button-continue">
                <span className="text-White-23-Regular"></span>
                <img src="" alt=""/>
            </div>
        </div>
    );
};

export default PinPage;