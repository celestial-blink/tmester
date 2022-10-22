const TRedux = {
    state: {},//estado de la aplicación
    inputControl: null,
    reducer: () => { }, // reducer de la applicación
    updater: () => { }, // funcion que se ejecuta cuando se realizó algo
    set createStore({ reducer, initialState }) {
        this.state = initialState;
        this.reducer = reducer;
    },
    set dispatch(action) {
        this.state = this.reducer(this.state, action);
        clearTimeout(this.inputControl);
        this.inputControl = setTimeout(() => {
            console.log("owo");
            this.updater?.();
        }, 100);
    },
    get getState() {
        return { ...this.state };
    },
    set subscribe(listener) {
        this.updater = listener;
    }
}

const initialState = {
    settings: {
        darkMode: false,
        bpm: 60,
        bpmLong: 5,
        bpmShort: 1,
        americanCipher: false,
        randomNotes: false
    },
    openMenu: false,
    allNotes: [],
    currentImage: "",
    currentNotes: [],
    start: false
}

const reducer = (initialState = initialState, action) => {
    const { type, payload } = action;

    const cases = {
        SET_SETTINGS_DARKMODE: { settings: { darkMode: !!payload } },
        SET_SETTINGS_BPM: { settings: { bpm: payload * 1 } },
        SET_SETTINGS_BPMLONG: { settings: { bpnLong: payload * 1 } },
        SET_SETTINGS_BPMSHORT: { settings: { bpnShort: payload * 1 } },
        SET_SETTINGS_AMERICAN_CIPHER: { settings: { americanCipher: !!payload } },
        SET_SETTINGS_RANDOM_NOTES: { settings: { randomNotes: !!payload } },
        SET_OPEN_MENU: { openMenu: !!payload },
        SET_CURRENT_IMAGE: { currentImage: payload },
        SET_CURRENT_NOTES: { currentNotes: payload },
        SET_START: { start: !!payload },
        SET_ALL_NOTES: { allNotes: payload },
        SET_CUSTOM: payload,
        RESET: {
            settings: {
                darkMode: false,
                bpm: 60,
                bpmLong: 5,
                bpmShort: 1,
                americanCipher: false,
                randomNotes: false
            },
            openMenu: false,
            allNotes: [],
            currentImage: "",
            currentNotes: [],
            start: false
        }
    };

    const result = Object.assign(initialState, cases.hasOwnProperty(type) && cases[type]);
    return result;
}

const TActions = {
    setDarkMode: payload => ({ type: "SET_SETTINGS_DARKMODE", payload }),
    setBpm: payload => ({ type: "SET_SETTINGS_BPM", payload }),
    setBpmLong: payload => ({ type: "SET_SETTINGS_BPMLONG", payload }),
    setBpmShort: payload => ({ type: "SET_SETTINGS_BPMSHORT", payload }),
    setAmericanCipher: payload => ({ type: "SET_SETTINGS_AMERICAN_CIPHER", payload }),
    setRandomNotes: payload => ({ type: "SET_SETTINGS_RANDOM_NOTES", payload }),
    setBpmShort: payload => ({ type: "SET_SETTINGS_BPMSHORT", payload }),
    setOpenMenu: payload => ({ type: "SET_OPEN_MENU", payload }),
    setCurrentImage: payload => ({ type: "SET_CURRENT_IMAGE", payload }),
    setCurrentNotes: payload => ({ type: "SET_CURRENT_NOTES", payload }),
    setStart: payload => ({ type: "SET_START", payload }),
    setAllNotes: payload => ({ type: "SET_ALL_NOTES", payload }),
    setCustom: payload => ({ type: "SET_CUSTOM", payload }),
    onReset: _ => ({ type: "RESET" })
}

TRedux.createStore = { reducer, initialState };
TRedux.subscribe = null;

export {
    TRedux,
    TActions
};
