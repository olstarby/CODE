"use strict";

const numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели?`, ``);
console.log(numberOfFilms);

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const a = prompt (`Один из последних просмотренных фильмов?`, ``),
      b = +prompt (`Оцените его по 10-ти бальной шкале`, ``),
      c = prompt (`Еще один из последних просмотренных фильмов?`, ``),
      d = +prompt (`Оцените его по 10-ти бальной шкале`, ``);
      
personalMovieDB.movies [a] = b;
personalMovieDB.movies [c] = d;

console.log(personalMovieDB);
