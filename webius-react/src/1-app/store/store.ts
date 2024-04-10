import {makeAutoObservable} from 'mobx';

class RootStore {
    currentScreen = 'pin';
    atmId =  '198123';

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentScreen(value: string) {
        console.log(value);
        this.currentScreen = value;
    }

}

export default RootStore;