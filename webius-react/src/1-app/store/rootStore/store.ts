import {makeAutoObservable} from 'mobx';
import AtmStore from "@/1-app/store/atmStore/AtmStore.ts";
import UserStore from "@/1-app/store/userStore/userStore.ts";

class RootStore {
    currentScreen = 'wait';
    atmId =  '198123';

    AtmStore: AtmStore;
    UserStore: UserStore;

    constructor() {
        this.AtmStore = new AtmStore();
        this.UserStore = new UserStore();
        makeAutoObservable(this);
    }

    setCurrentScreen(value: string) {
        console.log(value);
        this.currentScreen = value;
    }

}

export default RootStore;