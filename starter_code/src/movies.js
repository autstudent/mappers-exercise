/* eslint no-restricted-globals: 'off' */

// Iteración 1
const orderByYear = movies =>
    movies.sort((a, b) => {
        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;
        if (a.title > b.title) return 1;
        else return -1;
    });

// Iteración 2
const howManyMovies = movies =>
    movies.filter(
        movie =>
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    ).length;

// Iteración 3
const orderAlphabetically = (movies) =>
    movies
        .sort(function (a, b) {
            if (a.title > b.title) {
            return 1;
            }
            if (a.title < b.title) {
            return -1;
            }
            // a must be equal to b
            return 0;
        })
        .map((movie, i) => movie.title)
        .filter((e, index )=> index < 20)
        

// Iteración 4
const ratesAverage = (movies)=> {

    // Si no hay películas, devuelve 0
    if(!movies.length) return 0
    // realizamos el sumatorio de las películas
    const summation = movies.reduce((acc, movie)=> {
        if(!movie || !movie.rate || movie.rate === "") return acc
        return acc + movie.rate
    }, 0)
    // Realizamos la media
   const avr = summation / movies.length

   // parseamos el resultado y lo redondeamos a 2 decimales
   return  parseFloat(avr.toFixed(2))
}

// Iteración 5
const dramaMoviesRate = (movies) => {
    // filtro de las películas que incluyen "Drama"
    const dramaMovies = movies.filter((movie)=> movie.genre.includes("Drama"))
    // Si no hay ninguna película, devuelve 0
    if(!dramaMovies.length) return 0
    // Realizamos la media de las películas obtenidas

    const summation = dramaMovies.reduce((acc, movie) => {
        if(!movie || !movie.rate || movie.rate === "") return acc
        return acc + movie.rate
    }, 0)
    const avr = summation / dramaMovies.length
    // parseamos el resultado y devolvemos solo dos decimales
    return parseFloat(avr.toFixed(2))
}

//BONUS. 
const bestYearAvg = (movies) => {

    if (!movies.length) return null

    // Recojo todos los años de las películas:
    const years = movies.map(movie => movie.year)
    // Elimino las películas repetidas del array:
    const yearsNoRepeated = [...new Set(years)]
    // Hago la media de las películas por año
    const everyAvarageMoviesByYear = yearsNoRepeated.map(year => {
        // Busco todas las películas que correspondan con un determinado año
        const movieByYear = movies.filter(movie => movie.year === year)
        // Hago la media de la puntuación de cada año
        const summation = movieByYear.reduce((acc, movie) => {
            if(!movie || !movie.rate || movie === "") return acc.rate
            return acc + movie.rate
        }, 0)  
        const avr = summation / movieByYear.length
        //Devuelvo un objeto con el año y la media correspondiente
        return { year, rate: avr}

    })
    // Ordeno el array  de películas de mayor a menos por media
    const sortedRatesByYear = everyAvarageMoviesByYear.sort((a,b)=>{
        if (a.rate < b.rate) return 1;
        if (a.rate > b.rate) return -1;
        if (a.yeat < b.year) return 1;
        else return -1;
    })

    // devuelvo el primer elemento del array con el año y la media correspondiente
    return `The best year was ${sortedRatesByYear[0].year} with an average rate of ${sortedRatesByYear[0].rate}` 
}