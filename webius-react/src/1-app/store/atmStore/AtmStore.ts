import {makeAutoObservable} from 'mobx';
import {WF} from "@/utils/webiusFramework.ts";

class AtmStore {
    dispenser: boolean | undefined;
    acceptor: boolean | undefined;

    constructor() {
        makeAutoObservable(this);
    }

    async refreshAtmStatus(){
        this.dispenser = await WF.getCashDispenserStateSm();
        this.acceptor = await WF.getBanknoteAcceptorStateSm();
    }

    setDispenser(value:boolean){
        this.dispenser = value;
    }

    setAcceptor(value:boolean){
        this.acceptor = value;
    }
}

export default AtmStore;