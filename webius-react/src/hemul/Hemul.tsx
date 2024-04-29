import styles from './style.module.css';
import ScreensControl from "@/hemul/componets/screensControl/ScreensControl.tsx";
import DeviceControl from "@/hemul/componets/diviceControl/DeviceControl.tsx";
import {observer} from "mobx-react-lite";

const Hemul = () => {

    return (
        <div className={styles.container}>
            <ScreensControl/>
            <DeviceControl/>
        </div>
    );
};

export default observer(Hemul);