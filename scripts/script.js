'use strict';

let numberOfFilms;

function start() {
    while (
        isNaN(numberOfFilms) || numberOfFilms == ''  || 
        numberOfFilms == null){
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 0; i<2; i++) {
//     let lastMovie = prompt("Один из последних просмотреных фильмов?");
    
//     let mark = +prompt("На сколько вы его оцените");

//     if ( (lastMovie.length === 0 || lastMovie.length > 50) || (mark.length === 0 || mark.length > 50)) {
//         i--;
//     }
//     else {
//         personalMovieDB.movies[lastMovie] = mark;
//     }
// }

let i = 0;
// while(i < 2) {
//     let lastMovie = prompt("Один из последних просмотреных фильмов?");
    
//     let mark = +prompt("На сколько вы его оцените");

//     if ( (lastMovie.length === 0 || lastMovie.length > 50) || (mark.length === 0 || mark.length > 50)) {
//         i--;
//     }
//     else {
//         personalMovieDB.movies[lastMovie] = mark;
//     }
//     i++;
// }




function rememberMyFilms() {
    do {
        let lastMovie = prompt("Один из последних просмотреных фильмов?"); 
        let mark = +prompt("На сколько вы его оцените");
        if ( (lastMovie.length === 0 || lastMovie.length > 50) || (mark.length === 0 || mark.length > 50)) {
                    i--;
        }
        else {
            personalMovieDB.movies[lastMovie] = mark;
        }
        i++;
    }
    while(i<2);
}

rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <=30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}


function showMyDB() {
    if(personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
    else {
        console.log("База приватная");
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = (prompt(`Ваш любимый жанр под номером ${i+1}`));
    }
}

writeYourGenres();
detectPersonalLevel();
showMyDB();
