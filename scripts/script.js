'use strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastMovie = prompt("Один из последних просмотреных фильмов?");
let mark = +prompt("На сколько вы его оцените");


personalMovieDB.movies[lastMovie] = mark;

console.log(personalMovieDB);