import './pinPage.css';
import PinItem from "@/UI/pinItem/PinItem.tsx";
import useKeyDown from "@/hooks/useKeyDown.tsx";


const PinPage = () => {
    useKeyDown();

    return (
        <div>
            <div className="content">
                <div className="title text-light-text-primary-34-Medium">Введите ПИН</div>
                <div className="note text-White-23-Regular"></div>

                <div className="pinContainer" id="pin-container">
                    <PinItem/>
                    <PinItem/>
                    <PinItem/>
                    <PinItem/>
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