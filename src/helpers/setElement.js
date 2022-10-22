const setElement = (selector, attributes = {}) => {
    const focusElement = document.querySelector(selector);
    if (focusElement) Object.assign(focusElement, attributes);
}

export default setElement;
