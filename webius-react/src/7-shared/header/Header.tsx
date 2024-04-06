import './header.css';
import LOGO from './assets/LOGO.png';
import {useStores} from "@/1-app/store/useStores.ts";
import {observer} from "mobx-react-lite";

const Header = () => {
    const {store} = useStores();
    return (
        <div className='headerqwe20'>
            <div className="Group_qwe23"><img alt="" src={LOGO}/></div>
            <div className="splitter">{store.currentScreen}</div>
            <img className="paymentsImg" id="image-type1" alt="" src=""/>
            <img className="paymentsImg1" id="image-type2" alt="" src=""/>
            <span className='___qwe24' id="13">8 800 100 4888</span>
            <div className="phone-fill_qwe25"></div>
            <span className='qwe26' id="dataTime"></span>
            <span className='№__qwe27' id="ATMNum"></span>
        </div>
    );
};

export default observer(Header);