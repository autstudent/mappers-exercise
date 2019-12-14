/* eslint no-restricted-globals: 'off' */

// Iteración 1
const orderByYear = array =>
    array.sort((after, before) => {
        if (after.year > before.year) return 1;
        if (after.year < before.year) return -1;
        if (after.year == before.year) {
            if (after.title > before.title) return 1;
            if (after.title < before.title) return -1;
        }
    });

// Iteración 2
const howManyMovies = array =>
    array.filter(
        element =>
            element.genre.includes("Drama") &&
            element.director === "Steven Spielberg"
    ).length;

// Iteración 3
const orderAlphabetically = array => {
    const moviesSelected = array.sort((after, before) => {
        if (after.title > before.title) return 1;
        if (after.title < before.title) return -1;
        else return 0;
    });
    const moviesTitle = moviesSelected.slice(0, 20).map(element => {
        return element.title;
    });
    console.log(moviesTitle);
    return moviesTitle;
};

// Iteración 4
const ratesAverage = array => {
    if (array.length == 0) return 0;
    const moviesTotalScore = array.reduce((total, element) => {
        if (!element.rate) return total;
        return total + element.rate;
    }, 0);
    return parseFloat((moviesTotalScore / array.length).toFixed(2));
};

// Iteración 5
const dramaMoviesRate = array => {
    const dramaMovies = array.filter(element =>
        element.genre.includes("Drama")
    );
    if (dramaMovies.length == 0) return 0;
    const moviesTotalScore = dramaMovies.reduce((total, element) => {
        if (!element.rate) return total;
        return total + element.rate;
    }, 0);
    return parseFloat((moviesTotalScore / dramaMovies.length).toFixed(2));
};

//BONUS.

const bestYearAvg = array => {
    if (array.length == 0) return null;
    const moviesOrderedByRate = array.sort((after, before) => {
        if (after.rate > before.rate) return 1;
        if (after.rate < before.rate) return -1;
        else return 0;
    });
    const moviesTotalScore = moviesOrderedByRate.reduce((total, element) => {
        if (!element.rate) return total;
        return total + element.rate;
    }, 0);
    const average = parseFloat(
        (moviesTotalScore / moviesOrderedByRate.length).toFixed(1)
    );
    return `The best year was ${moviesOrderedByRate[0].year} with an average rate of ${average}`;
};
