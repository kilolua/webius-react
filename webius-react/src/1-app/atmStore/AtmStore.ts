import {makeAutoObservable} from 'mobx';

class AtmStore {
    dispenser: boolean | undefined;
    acceptor: boolean | undefined;

    screens = []

    constructor() {
        makeAutoObservable(this);
    }

    setDispenser(value:boolean){
        this.dispenser = value;
    }

    setAcceptor(value:boolean){
        this.acceptor = value;
    }
}

export default AtmStore;