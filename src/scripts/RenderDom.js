import { TRedux } from '@scripts/TRedux';
import getRandomNumber from '@helpers/getRandomNumber';
import pathImages from '@assets/pathImages';
import Storage from '@helpers/Storage';
// import defaultValues from '@assets/defaultValues';

const storage = Storage();

/* ------------------ abre y cierra el menú en vista movil ------------------ */
let menuElement = null;

export const renderMenu = _ => {
    menuElement = menuElement || document.getElementById("elm-menu");
    if (TRedux.getState.openMenu) {
        menuElement.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
    } else {
        menuElement.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
    }
}

/* -------------------------------------------------------------------------- */


/* ---------------------------- actualiza el BPM ---------------------------- */

let bpmElement = null;

export const renderBPM = _ => {
    bpmElement = bpmElement || document.getElementById("bpm");
    bpmElement.textContent = TRedux.getState.settings.bpm;
}

/* -------------------------------------------------------------------------- */


/* ------------------------ actualiza el botón start ------------------------ */

let startButton = null;
let buttonsBPM = null;

export const renderStart = _ => {
    
    if (startButton === null) { startButton = document.getElementById("play") }
    if (buttonsBPM === null) buttonsBPM = document.getElementById("buttons-bpm");

    const state = TRedux.getState;

    if (state.start) {
        startButton.textContent = "STOP";
        handleAutoRandom(state.settings.bpm);
        buttonsBPM.disable = true;
    } else {
        startButton.textContent = "PLAY";
        clearInterval(intervalAuto);
        buttonsBPM.disable = false;
    }

}

/* ---------------------------- notas aleatorias ---------------------------- */

const randomNotes = _ => {
    let random = null;
    const getRandom = max => {
        const numRand = getRandomNumber({ min: 0, max });
        if (random !== numRand) {
            random = numRand;
            return numRand;
        } else {
            return getRandom(max);
        }
    }
    return getRandom;
}


let intervalAuto = null;
const newRandomNotes = randomNotes();
const newRandomNotes2 = randomNotes();

const audio1 = new Audio("metronome_1.mp3");
const audio2 = new Audio("metronome_2.mp3");

const dataAudio = [ audio1, audio2 ];
let indexAudio = 0;

const handleAutoRandom = bpm => {
    
    clearInterval(intervalAuto);
    intervalAuto = setInterval(_ => {
        const isLast = handleFocusNote();
        if (isLast) {
            indexAudio = 0;
            changePositionNotes();
        }
        dataAudio[indexAudio].currentTime = 0;
        dataAudio[indexAudio].play();
        if ( indexAudio === 0 ) indexAudio = 1;

    }, 60000 / bpm, indexAudio, dataAudio);
}

/* -------------------------------------------------------------------------- */

/* --------------------- nombre de las notas aleatorias --------------------- */

const handleFocusNote = _ => {
    let focusNote = selectedNotesElement.querySelector("div.tmester--focus");
    let isLast = false;
    if (focusNote) {
        focusNote.classList.remove('tmester--focus');
        if (focusNote.nextElementSibling) {
            focusNote.nextElementSibling.classList.add('tmester--focus');
            isLast = false;
        } else {
            selectedNotes[0].classList.add('tmester--focus');
            isLast = true;
        }
    } else {
        isLast = false;
        selectedNotes[0].classList.add('tmester--focus');
    }
    return isLast;
}

/* -------------------------------------------------------------------------- */

let selectedNotesElement = null;
let selectedNotes = null;
let nextNotes = null;

export const handlePrepareNotes = _ => {

    if (selectedNotesElement === null) selectedNotesElement = document.getElementById("selected-notes");
    if (selectedNotes === null) selectedNotes = selectedNotesElement.querySelectorAll("div");
    if (nextNotes === null) nextNotes = document.getElementById("next-notes").querySelectorAll("div");

    const notesSelected = storage.getValue("notesSelected");
    const selectImages = Object.keys(pathImages).filter(item => notesSelected.includes(item.split("__")[0]) && item.endsWith('BLACK'));
    const dataNextNotes = [...nextNotes];
    const state = TRedux.getState;

    [...selectedNotes].forEach((item, index) => {
        const numRand = newRandomNotes(selectImages?.length);
        const numRand2 = newRandomNotes2(state?.currentNotes?.length);
        item.firstElementChild.src = pathImages[selectImages[numRand]];
        item.lastElementChild.textContent = state?.currentNotes[numRand2];
        item.lastElementChild.dataset.index = numRand2;
        dataNextNotes[index].firstElementChild.src = pathImages[selectImages[numRand]];
        dataNextNotes[index].lastElementChild.textContent = state?.currentNotes[numRand2];
        dataNextNotes[index].lastElementChild.dataset.index = numRand2;

    });
    prepareNewNotes({ element: dataNextNotes, images: selectImages, notes: state?.currentNotes });

}

const changePositionNotes = _ => {

    const dataNextNotes = [...nextNotes];
    const dataSelectedNotes = [...selectedNotes];
    dataNextNotes.forEach((item, index) => {
        const note = dataSelectedNotes[index];
        note.firstElementChild.src = item.firstElementChild.src;
        note.lastElementChild.textContent = item.lastElementChild.textContent;
    });

    const notesSelected = storage.getValue("notesSelected");

    const selectImages = Object.keys(pathImages).filter(item => notesSelected.includes(item.split("__")[0]) && item.endsWith('BLACK'));

    prepareNewNotes({ element: dataNextNotes, images: selectImages, notes: TRedux.getState.currentNotes });

}

const prepareNewNotes = ({ element, images, notes }) => {
    element.forEach(item => {
        item.classList.remove("tmester--focus");
    });
    const numRand = getRandomNumber({ min: 0, max: 3 });
    const numRand2 = newRandomNotes(images?.length);
    const numRand3 = newRandomNotes2(notes?.length);

    element[numRand].firstElementChild.src = pathImages[images[numRand2]];
    element[numRand].lastElementChild.textContent = notes[numRand3];
    element[numRand].lastElementChild.dataset.index = numRand3;
    element[numRand].classList.add("tmester--focus");
}


export const handleSetCipher = _ => {
    if (selectedNotesElement === null) selectedNotesElement = document.getElementById("selected-notes");
    if (selectedNotes === null) selectedNotes = selectedNotesElement.querySelectorAll("div");
    if (nextNotes === null) nextNotes = document.getElementById("next-notes").querySelectorAll("div");
    const dataNextNotes = [...nextNotes];

    [...selectedNotes].forEach((item, index) => {
        const elementP = item.lastElementChild;
        elementP.textContent = TRedux.getState.currentNotes[elementP.dataset.index];
        const elementPnext = dataNextNotes[index].lastElementChild;
        dataNextNotes[index].lastElementChild.textContent = TRedux.getState.currentNotes[elementPnext.dataset.index];
    });

}
