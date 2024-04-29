import {useStores} from "@/1-app/store/useStores.ts";
import {screens} from "@/constants/screens.ts";
import styles from './style.module.css';

const Hemul = () => {
    const {store} = useStores();

    const setCurrentScreen = (screen: string)=>{
        store.setCurrentScreen(screen)
    }

    return (
        <div className={styles.container}>
            {screens.map((item)=>(
                <button onClick={()=>setCurrentScreen(item)}>{item}</button>
            ))}
        </div>
    );
};

export default Hemul;