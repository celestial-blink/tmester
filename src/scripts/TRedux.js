const TRedux = {
    state: {},//estado de la aplicación
    inputControl: null,
    reducer: () => { }, // reducer de la applicación
    updater: () => { }, // funcion que se ejecuta cuando se realizó algo
    set createStore({ reducer, initialState }) {
        this.state = initialState;
        this.reducer = reducer;
    },
    /**
     * @param {{ type: string; payload: any; }} action
     */
    set dispatch(action) {
        this.state = this.reducer(this.state, action);
        clearTimeout(this.inputControl);
        this.updater?.();
        // this.inputControl = setTimeout(() => {
        // this.updater?.();
        // }, 100);
    },
    get getState() {
        return Object.freeze({ ...this.state });
    },
    /**
     * @param {() => void} listenner
     */
    set subscribe(listenner) {
        this.updater = listenner;
    }
}

const initialState = {
    settings: {
        bpm: 60,
        bpmLong: 5,
        bpmShort: 1,
        randomNotes: false
    },
    openMenu: false,
    currentImage: "",
    currentImagePath: [],
    currentNotes: [],
    start: false,
    countDown: false
}

const reducer = (initialState = initialState, action) => {
    const { type, payload } = action;

    const cases = {
        SET_SETTINGS_BPM: { settings: { ...initialState.settings, bpm: payload * 1 } },
        SET_SETTINGS_BPMLONG: { settings: { ...initialState.settings, bpnLong: payload * 1 } },
        SET_SETTINGS_BPMSHORT: { settings: { ...initialState.settings, bpnShort: payload * 1 } },
        SET_SETTINGS_RANDOM_NOTES: { settings: { ...initialState.settings, randomNotes: !!payload } },
        SET_OPEN_MENU: { openMenu: !!payload },
        SET_CURRENT_IMAGE: { currentImage: payload },
        SET_CURRENT_NOTES: { currentNotes: payload },
        SET_START: { start: !!payload },
        // SET_ALL_NOTES: { allNotes: payload },
        SET_CURRENT_IMAGE_PATH: { currentImagePath: payload },
        SET_COUNT_DOWN: payload,
        SET_CUSTOM: payload,
        RESET: {
            settings: {
                bpm: 60,
                bpmLong: 5,
                bpmShort: 1,
                randomNotes: false
            },
            openMenu: false,
            allNotes: [],
            currentImage: "",
            currentNotes: [],
            start: false
        }
    };

    const result = Object.assign({}, initialState, Object.prototype.hasOwnProperty.call(cases, type) && cases[type]);
    return result;
}

const TActions = {
    setBpm: payload => ({ type: "SET_SETTINGS_BPM", payload }),
    setBpmLong: payload => ({ type: "SET_SETTINGS_BPMLONG", payload }),
    setBpmShort: payload => ({ type: "SET_SETTINGS_BPMSHORT", payload }),
    setRandomNotes: payload => ({ type: "SET_SETTINGS_RANDOM_NOTES", payload }),
    setOpenMenu: payload => ({ type: "SET_OPEN_MENU", payload }),
    setCurrentImage: payload => ({ type: "SET_CURRENT_IMAGE", payload }),
    setCurrentImagePath: payload => ({ type: "SET_CURRENT_IMAGE_PATH", payload }),
    setCurrentNotes: payload => ({ type: "SET_CURRENT_NOTES", payload }),
    setStart: payload => ({ type: "SET_START", payload }),
    setCountDown: payload => ({ type: "SET_COUNT_DOWN", payload }),
    setCustom: payload => ({ type: "SET_CUSTOM", payload }),
    onReset: _ => ({ type: "RESET" })
}

TRedux.createStore = { reducer, initialState };
TRedux.subscribe = null;

export {
    TRedux,
    TActions
};
