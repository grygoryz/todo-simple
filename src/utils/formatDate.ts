const formatDate = (date: Date) => {
    const checkForZero = (n: number) => n < 10 ? `0${n}` : n;

    const day = checkForZero(date.getDate());
    const month = checkForZero(date.getMonth() + 1);

    return `${day}.${month}.${date.getFullYear()}`;
};

export default formatDate;