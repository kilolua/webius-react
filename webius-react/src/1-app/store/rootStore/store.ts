import {makeAutoObservable} from 'mobx';
import AtmStore from "@/1-app/atmStore/AtmStore.ts";

class RootStore {
    currentScreen = 'wait';
    atmId =  '198123';

    AtmStore: AtmStore;

    constructor() {
        this.AtmStore = new AtmStore();
        makeAutoObservable(this);
    }

    setCurrentScreen(value: string) {
        console.log(value);
        this.currentScreen = value;
    }

}

export default RootStore;