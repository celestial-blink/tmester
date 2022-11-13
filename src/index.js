import '@styles/main.pcss';
import '@styles/index.pcss';
import { TActions, TRedux } from '@scripts/TRedux';
import layout from './view/index.html?raw';
import defaultValues from '@assets/defaultValues';
import {
    toggleMenu,
    eventsPersonalized,
    handleStartTheme,
    handleTheme,
    increaseLongBPM,
    increaseShortBPM,
    decreaseLongBPM,
    decreaseShortBPM,
    handleStartApp,
    handleCheck
} from '@scripts/Events';
import { 
    renderMenu,
    renderBPM,
    renderStart,
    handlePrepareNotes
} from '@scripts/RenderDom';

const prepareDefaultData = _ => {
    TRedux.dispatch = TActions.setCurrentNotes(defaultValues.defaultNotes);
    TRedux.dispatch = TActions.setAllNotes(defaultValues.defaultNotes);
};

const prepareEvents = _ => {
    document.getElementById("btn-menu").addEventListener('click', toggleMenu);
    document.getElementById("elm-menu").addEventListener('customClickMenu', eventsPersonalized, true);
    document.getElementById("darkmode").addEventListener('click', handleTheme);
    document.getElementById("increaseLong").addEventListener('click', increaseLongBPM);
    document.getElementById("increaseShort").addEventListener('click', increaseShortBPM);
    document.getElementById("decreaseShort").addEventListener('click', decreaseShortBPM);
    document.getElementById("decreaseLong").addEventListener('click', decreaseLongBPM);
    document.getElementById("play").addEventListener('click', handleStartApp);
    document.getElementById("form-notes").addEventListener('input', handleCheck);
    document.getElementById("elm-menu").addEventListener('click', event => {
        event.target.dispatchEvent(new CustomEvent("customClickMenu", {
            detail: {
                evref: "toggleMenu",
                callback: () => {
                    TRedux.dispatch = TActions.setOpenMenu(!TRedux.getState.openMenu);
                }
            }
        }));
    });
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("app").innerHTML = layout;
    prepareDefaultData();
    prepareEvents();
    TRedux.subscribe = () => {
        console.log(TRedux.getState);
        renderMenu();
        renderBPM();
        renderStart();
    }

    handleStartTheme();
    handlePrepareNotes();
});
