//ts-ignore

class WebIUSFramework {
    static getFrameworkVersion() {
        return "[webIUSFramework.js][version][1.0.1.1]";
    };

    static getNDCScreen(screenName) {
        return (async () => {
            await CefSharp.BindObjectAsync("exchange");
            return exchange.getNDCScreen(screenName);
        })();
    };

    static GetRegistryValue(screenName, p2, p3) {
        return (async () => {
            await CefSharp.BindObjectAsync("exchange");
            return exchange.getRegistryValue(screenName, p2, p3);
        })();
    };

    static getNDCBufferValue(bufferId) {
        return (
            async () => {
                await CefSharp.BindObjectAsync("exchange");
                return exchange.getNDCBufferValue(bufferId);
            }
        )();
    };

    static setNDCBufferValue(bufferId, byfferValue) {
        (async () => {
            await CefSharp.BindObjectAsync("exchange");
            exchange.setNDCBufferValue(bufferId, byfferValue);
        })();
    };

    static setNDCButton(buttonId, buttonValue) {
        (async () => {
            await CefSharp.BindObjectAsync("exchange");
            exchange.setNDCButton(buttonId, buttonValue);
        })();
    };

    static getNDCAmount() {
        return (async () => {
            await CefSharp.BindObjectAsync("exchange");
            return exchange.getNDCAmount();
        })();
    };

    static getMemory(name) {
        return (async () => {
            await CefSharp.BindObjectAsync("exchange");
            return exchange.getMemory(name);
        })();
    };

    static setMemory(name, value) {
        (async () => {
            await CefSharp.BindObjectAsync("exchange");
            exchange.setMemory(name, value);
        })();
    };

    static clearMemory() {
        (async () => {
            await CefSharp.BindObjectAsync("exchange");
            exchange.clearMemory();
        })();
    };

    static loadPage(formId, formUrl) {
        (async () => {
            await CefSharp.BindObjectAsync("exchange");
            exchange.loadPage(formId, formUrl);
        })();
    };

    static WriteToFile(p1, p2, p3) {
        (async () => {
            await CefSharp.BindObjectAsync("exchange");
            exchange.WriteToFile(p1, p2, p3);
        })();
    };

    static SetNDCScreenText(screenName, text) {
        (async () => {
            await CefSharp.BindObjectAsync("exchange");
            exchange.SetNDCScreenText(screenName, text);
        })();
    };

    static stopNDCInput() {
        (async () => {
            await CefSharp.BindObjectAsync("exchange");
            exchange.stopNDCInput();
        })();
    };

    static receiveCardHolderOperationsInfo(clientPAN) {
        return (async () => {
            await CefSharp.BindObjectAsync("wbCustom");
            return await wbCustom.receiveCardHolderOperationsInfo(clientPAN);
        })();
    };

    static getValueFromRegistry(regPath, regParam) {
        return (async () => {
            await CefSharp.BindObjectAsync("wbCassetes");
            return await wbCassetes.getValueFromRegistry(regPath, regParam);
        })();
    };

    static GetModuleVariable(regPath, regParam) {
        return (async () => {
            await CefSharp.BindObjectAsync("exchange");
            return await exchange.GetModuleVariable(regPath, regParam);
        })();
    };

    static isAmountExist(p1, p2, p3) {
        return (async () => {
            await CefSharp.BindObjectAsync("wbCassetes");
            return await exchange.isAmountExist(p1, p2, p3);
        })();
    };

    static requestHostByUrl(requestURL, requestBody, requestName) {
        (async () => {
            await CefSharp.BindObjectAsync("wbRequest");
            await wbRequest.requestHostByUrl(requestURL, requestBody, requestName);
        })();
    };

    static printReceipt(receiptText) {
        (async () => {
            await CefSharp.BindObjectAsync("exchange");
            exchange.printReceipt(receiptText);
        })();
    };

    static getCashDispenserStateSm() {
        return (async () => {
            await CefSharp.BindObjectAsync("wbCassetes");
            let help = await wbCassetes.getCashDispenserStateSm();
            return help == 'OK' || help == "WARNING";
        })();
    };

    static getBanknoteAcceptorStateSm() {
        return (async () => {
            await CefSharp.BindObjectAsync("wbCassetes");
            let help = wbCassetes.getBanknoteAcceptorStateSm();
            return help == 'OK' || help == "WARNING";
        })();
    };

    static getPaperState() {
        return (async () => {
            await CefSharp.BindObjectAsync("wbCassetes");
            return wbCassetes.getPaperState();
        })();
    };

    static getReceiptPrinterState() {
        return (async () => {
            await CefSharp.BindObjectAsync("wbCassetes");
            return wbCassetes.getReceiptPrinterState();
        })();
    };

    static getMaxNotesCount() {
        return (async () => {
            await CefSharp.BindObjectAsync("wbCassetes");
            return wbCassetes.getMaxNotesCount();
        })();
    };

    static getMoneyList(id) {
        return (async () => {
            await CefSharp.BindObjectAsync("wbCassetes");
            if (id)
                return wbCassetes.getMoneyList(id);
            else
                return wbCassetes.getMoneyList();
        })();
    };

    static getFilesInDirectory(fileName, pattern) {
        return (async () => {
            await CefSharp.BindObjectAsync("wbCassetes");
            return wbCassetes.getFilesInDirectory(fileName, pattern);
        })();
    };

    static readFile(filePath) {
        return (async () => {
            await CefSharp.BindObjectAsync("exchange");
            return exchange.readFile(filePath);
        })();
    };

    static getAllAcceptedNotes(currency) {
        return (async () => {
            await CefSharp.BindObjectAsync("exchange");
            return exchange.getAllAcceptedNotes(currency);
        })();
    };
}

export const WF = new Proxy(WebIUSFramework, {
    get(target, prop){
        if (import.meta.env.DEV) {
            console.log('Обращение к методу: ', target[prop].name);
            return()=>undefined;
        }
        return target[prop];
    }
})