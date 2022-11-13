const defaultValues = {
    min: 0,
    max: 10
};

const getRandomNumber = (payload = defaultValues) => {
    const min = Math.ceil(payload.min);
    const max = Math.floor(payload.max);
    return Math.floor(Math.random() * (max - min) + min);
}

export default getRandomNumber;
