import { TActions, TRedux } from './TRedux';

export const togglePlay = selector => {
    const focusElement = document.querySelector(selector);
    if (focusElement) focusElement.addEventListener('click', _ => {
        TActions.setStart(!TRedux.getState.start);
    })
}

export const toggleMenu = selector => {
    const focusElement = document.querySelector(selector);
    if (focusElement) focusElement.addEventListener('click', _ => {
        TActions.setOpenMenu(!TRedux.getState.openMenu);
    })
}

export const toggleDarkMode = selector => {
    const focusElement = document.querySelector(selector);
    if (focusElement) focusElement.addEventListener('click', _ => {
        TActions.setDarkMode(!TRedux.getState.settings.darkMode);
    })
}

export const increaseShortBPM = selector => {
    const focusElement = document.querySelector(selector);
    if (focusElement) focusElement.addEventListener('click', _ => {
        TActions.setBpm(TRedux.settings.bpm + TRedux.settings.bpmShort);
    })
}

export const increaseLongBPM = selector => {
    const focusElement = document.querySelector(selector);
    if (focusElement) focusElement.addEventListener('click', _ => {
        TActions.setBpm(TRedux.settings.bpm + TRedux.settings.bpmLong);
    })
}

export const decreaseShortBPM = selector => {
    const focusElement = document.querySelector(selector);
    if (focusElement) focusElement.addEventListener('click', _ => {
        TActions.setBpm(TRedux.settings.bpm - TRedux.settings.bpmShort);
    })
}

export const decreaseLongBPM = selector => {
    const focusElement = document.querySelector(selector);
    if (focusElement) focusElement.addEventListener('click', _ => {
        TActions.setBpm(TRedux.settings.bpm - TRedux.settings.bpmLong);
    })
}

export const toggleAmericanCipher = selector => {
    const focusElement = document.querySelector(selector);
    if (focusElement) focusElement.addEventListener('click', _ => {
        TActions.setAmericanCipher(!TRedux.settings.americanCipher);
    })
}

export const toggleRandomNotes = selector => {
    const focusElement = document.querySelector(selector);
    if (focusElement) focusElement.addEventListener('click', _ => {
        TActions.setRandomNotes(!TRedux.getState.randomNotes);
    })
}
