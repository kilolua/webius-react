import {createPortal} from "react-dom";
import Hemul from "@/hemul/Hemul.tsx";
import {useState} from "react";

const HemulContainer = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button style={{opacity:"0.5"}} onClick={()=>{setShow(!show)}}>Настройки</button>
            {show && createPortal(<Hemul/>, document.getElementById('root')!)}
        </div>
    );
};

export default HemulContainer;