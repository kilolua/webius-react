import './pinItem.css';
import {FC} from "react";

interface Props{
    fill:boolean
}

const PinItem:FC<Props> = ({fill}) => {
    return (
        <div className="pinItem">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle
                    className="pin"
                    id="pin1"
                    cx="16"
                    cy="16"
                    r="14.5"
                    stroke="white"
                    strokeWidth="3"
                    fill={fill ? 'url(#paint0_radial_1102_1886)' : ''}/>
                <defs>
                    <radialGradient id="paint0_radial_1102_1886" cx="0" cy="0" r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(9.5 7) rotate(53.4986) scale(31.1006)">
                        <stop stop-color="white"/>
                        <stop offset="0.666667" stop-color="#0050C7"/>
                        <stop offset="0.984375" stop-color="#00AAFF"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial_1121_1827" cx="0" cy="0" r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(9.5 7) rotate(53.4986) scale(31.1006)">
                        <stop stop-color="white"/>
                        <stop offset="0.666667" stop-color="#D60056"/>
                        <stop offset="0.984375" stop-color="#B30047"/>
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
};

export default PinItem;