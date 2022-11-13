import { TActions, TRedux } from './TRedux';
import setElement from '@helpers/setElement';
import pathImages from '@assets/pathImages';
import Storage from '@helpers/Storage';
import { handlePrepareNotes } from './RenderDom';

/* ---------------------------- events for TRedux --------------------------- */

export const togglePlay = event => {
    TRedux.dispatch = TActions.setStart(!TRedux.getState.start);
}

export const toggleMenu = event => {
    TRedux.dispatch = TActions.setOpenMenu(!TRedux.getState.openMenu);
}

export const increaseShortBPM = event => {
    TRedux.dispatch = TActions.setBpm(TRedux.getState.settings.bpm + TRedux.getState.settings.bpmShort);
}

export const increaseLongBPM = event => {
    TRedux.dispatch = TActions.setBpm(TRedux.getState.settings.bpm + TRedux.getState.settings.bpmLong);
}

export const decreaseShortBPM = event => {
    TRedux.dispatch = TActions.setBpm(TRedux.getState.settings.bpm - TRedux.getState.settings.bpmShort);
}

export const decreaseLongBPM = event => {
    TRedux.dispatch = TActions.setBpm(TRedux.getState.settings.bpm - TRedux.getState.settings.bpmLong);
}

export const toggleAmericanCipher = event => {
    TRedux.dispatch = TActions.setAmericanCipher(!TRedux.getState.settings.americanCipher);
}

export const toggleRandomNotes = event => {
    TRedux.dispatch = TActions.setRandomNotes(!TRedux.getState.randomNotes);
}

export const toggleCountDown = event => {
    TRedux.dispatch = TActions.setCountDown(!TRedux.getState.countDown);
}

/* -------------------------------------------------------------------------- */

/* ---------------------------- events personalized ---------------------------- */

// export const eventsPersonalized = (selector = "", evref = "", callback = _ => { }) => {
export const eventsPersonalized = event => {
    if (event.target.dataset.evref === event.detail.evref) event.detail?.callback?.();
}

/* -------------------------------------------------------------------------- */


/* ------------------------------ events themes ----------------------------- */

export const handleTheme = event => {
    const { currentTarget } = event;
    if (currentTarget.checked) {
        document.body.classList.add("dark");
        window.localStorage.setItem("isDarkMode", 1);
        setElement("#logo", { src: pathImages.LIGHT__LOGO });
        handleSelectNotes(true);

    } else {
        document.body.classList.remove("dark");
        window.localStorage.setItem("isDarkMode", 0);
        setElement("#logo", { src: pathImages.DARK__LOGO });
        handleSelectNotes(false);

    }
}

export const handleStartTheme = event => {
    const elementCheckboxTheme = document.getElementById("darkmode");
    const getDarkMode = window.localStorage.getItem("isDarkMode");

    let prepareDarkMode = false;
    if (getDarkMode === null) {
        const mediaQueryObj = window.matchMedia('(prefers-color-scheme: dark)');
        const isDarkMode = mediaQueryObj.matches;
        prepareDarkMode = !!isDarkMode;
    } else {
        prepareDarkMode = !!(getDarkMode * 1);
    }

    if (prepareDarkMode) {
        document.body.classList.add("dark");
        elementCheckboxTheme.checked = true;
        setElement("#logo", { src: pathImages.LIGHT__LOGO });
        handleSelectNotes(true);
    } else {
        document.body.classList.remove("dark");
        setElement("#logo", { src: pathImages.DARK__LOGO });
        handleSelectNotes(false);
    }

}

/* -------------------------------------------------------------------------- */


/* ------------------------------- Event start ------------------------------ */

export const handleStartApp = event => {
    togglePlay();
}

/* -------------------------------------------------------------------------- */


/* --------------------- select notes according to theme -------------------- */

const storage = Storage();
let formNotes = null;

const handleSelectNotes = darkmode => {
    if (formNotes === null) formNotes = document.getElementById("form-notes").querySelectorAll("input[type=checkbox]");

    const notesSelected = storage.getValue('notesSelected');
    const endsWith = darkmode ? "WHITE" : "BLACK";
    let selectImages = null;
    if (notesSelected) {
        formNotes.forEach(item => {
            item.checked = notesSelected.includes(item.value);
        });
        selectImages = Object.keys(pathImages).filter(item => notesSelected.includes(item.split("__")[0].toLowerCase()) && item.endsWith(endsWith));

    } else {
        formNotes.forEach(item => {
            item.checked = true;
        });
        selectImages = Object.keys(pathImages).filter(item => item.endsWith(endsWith));
        const prepareStorage = selectImages.map(item => {
            return item.split('__')[0] || null
        });
        storage.setValue({
            key: "notesSelected",
            value: prepareStorage
        })
    }
    TRedux.dispatch = TActions.setCurrentImagePath(selectImages);
};

/* -------------------------------------------------------------------------- */

let timeCheck = null;

export const handleCheck = event => {
    
    const { currentTarget } = event;
    const notesSelected = currentTarget.querySelectorAll("input[type=checkbox]:checked");
    const prepareNotes = [...notesSelected].map(item => {
        return item.value;
    });
    storage.setValue({
        key: "notesSelected",
        value: prepareNotes
    });
    
    clearTimeout(timeCheck);
    timeCheck = setTimeout(_ => {
        handlePrepareNotes();
    }, 1000)

}
