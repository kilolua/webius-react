import './pinPage.css';
import PinItem from "@/7-shared/UI/pinItem/PinItem.tsx";

const PinPage = () => {
    return (
        <div>
            <div className="content">
                <div className="title text-light-text-primary-34-Medium" id="label-title">Введите ПИН</div>
                <div className="note text-White-23-Regular" id="label-note"></div>

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