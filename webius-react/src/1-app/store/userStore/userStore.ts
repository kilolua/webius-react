import {makeAutoObservable} from 'mobx';

class RootStore {
    pan: string = '4405';
    bankName: string = 'VTB';
    bankImage: string;


    constructor() {
        makeAutoObservable(this);
    }
}

export default RootStore;