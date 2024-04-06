import {makeAutoObservable} from 'mobx';
import {redirect} from "react-router-dom";

class RootStore {
    currentScreen = 'wait';

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentScreen(value: string){
        redirect('/'+value);
        console.log(value);
        this.currentScreen = value;
    }

}

export default RootStore;