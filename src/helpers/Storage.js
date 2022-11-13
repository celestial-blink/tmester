const Storage = _=> {

    const defaultParams = {
        key: "",
        value: {}
    }
    
    const setValue = (param = defaultParams) => {
        const { key, value } = param;
        if (key && value) {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    }
    
    const getValue = (key) => {
        return JSON.parse(window.localStorage.getItem(key));
    }

    return {
        setValue,
        getValue
    };

}

export default Storage;
