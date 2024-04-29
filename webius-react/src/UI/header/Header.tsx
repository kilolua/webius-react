import './header.css';
import {useStores} from "@/1-app/store/useStores.ts";
import {observer} from "mobx-react-lite";
import phoneIcon from './assets/phoneItem.svg';
import paySysIcon from './assets/paySys.png';

const Header = () => {
    const {store} = useStores();
    console.log(store.atmId)
    return (
        <div className="header">
            <div className="phone">
                <img src={phoneIcon} alt=""/>
                <div className="text-Grey-19-Regular">Телефон поддержки</div>
            </div>
            <div className="time text-White-19-Medium"></div>
            <div className="paySys"><img alt="" src={paySysIcon}/></div>
            <div className="atm">
                <div className="text-Grey-19-Regular">Банкомат</div>
                <div className="atmNumber text-White-19-Medium">{store.atmId}</div>
            </div>
        </div>
    );
};

export default observer(Header);