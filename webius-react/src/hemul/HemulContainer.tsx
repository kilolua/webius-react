import Hemul from "@/hemul/Hemul.tsx";
import {useState} from "react";
import {observer} from "mobx-react-lite";

const HemulContainer = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button style={{opacity:"0.5"}} onClick={()=>{setShow(!show)}}>Настройки</button>
            {show && <Hemul/>}
        </div>
    );
};

export default observer(HemulContainer);