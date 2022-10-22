import '@styles/main.css';
import '@styles/index.pcss';
import { TActions, TRedux } from '@scripts/TRedux';
import layout from './view/index.html?raw';
import defaultValues from '@assets/defaultValues';
import pathImages from '@assets/pathImages';
import setElement from '@helpers/setElement';

const mount = event => {
    document.getElementById("app").innerHTML = layout;
    setElement("#logo", { src: pathImages.DARK_LOGO });
    prepareDefaultData()
};

const prepareDefaultData = _ => {
    // TActions.setAllNotes(defaultValues.defaultNotes);
    TRedux.dispatch = TActions.setCurrentNotes(defaultValues.defaultNotes);
    TRedux.dispatch = TActions.setAllNotes(defaultValues.defaultNotes);
};

const prepareEvents = _ => {

};

TRedux.subscribe = () => {
    console.log(TRedux.getState);
}

document.addEventListener('DOMContentLoaded', mount);
