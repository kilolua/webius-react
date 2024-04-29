import {useEffect} from "react";

const UseKeyDown = () => {
    const keyDown = (event: { code: any; })=>{
        console.log(event.code);
    }

    useEffect(() => {
        document.addEventListener('keydown', keyDown)
        return ()=>{
            document.removeEventListener('keydown', keyDown);
        }
    }, []);
};

export default UseKeyDown;