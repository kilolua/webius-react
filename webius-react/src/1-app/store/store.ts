import {makeAutoObservable} from 'mobx';

class RootStore {
    currentScreen = 'wait';
    atmId =  '198123';

    screens = []

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentScreen(value: string) {
        console.log(value);
        this.currentScreen = value;
    }

}

export default RootStore;