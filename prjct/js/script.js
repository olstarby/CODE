"use strict";


let numberOfFilms;

function start() {
    numberOfFilms = prompt(`Сколько фильмов вы уже посмотрели?`, ``);
    while (numberOfFilms == `` || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt(`Сколько фильмов вы уже посмотрели?`, ``);

    }
}

start();

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt (`Один из последних просмотренных фильмов?`, ``),
//       b = +prompt (`Оцените его по 10-ти бальной шкале`, ``),
//       c = prompt (`Еще один из последних просмотренных фильмов?`, ``),
//       d = +prompt (`Оцените его по 10-ти бальной шкале`, ``);
//

// let i = 0;
// while (i < 2) {
//     const a = prompt (`Один из последних просмотренных фильмов?`, ``),
//           b = +prompt (`Оцените его по 10-ти бальной шкале`, ``);
//     i++;
//     if (a != null && b != null && a != `` && b != `` && a.length < 50) {
//     personalMovieDB.movies [a] = b;
//     console.log(`done!`);
// } else {
//     console.log(`error`);
//     i--;
// }
// }

// let i = 0;
// do {
//     const a = prompt (`Один из последних просмотренных фильмов?`, ``),
//           b = +prompt (`Оцените его по 10-ти бальной шкале`, ``);
//     i++;
//     if (a != null && b != null && a != `` && b != `` && a.length < 50) {
//     personalMovieDB.movies [a] = b;
//     console.log(`done!`);
// } else {
//     console.log(`error`);
//     i--;
// }
// } while (i < 2);

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt (`Один из последних просмотренных фильмов?`, ``),
              b = +prompt (`Оцените его по 10-ти бальной шкале`, ``);

        if (a != null && b != null && a != `` && b != `` && a.length < 50) {
            personalMovieDB.movies [a] = b;
            console.log(`done!`);
        } else {
            console.log(`error`);
            i--;
        }
    }
}

rememberMyFilms();

function detectPErsonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log(`Просмотрено довольно мало фильмов`);
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log(`Вы классический зритель`);
    }else if (personalMovieDB.count >= 30) {
        console.log(`Вы киноман!`);
    }else{
        console.log(`Ошибка`);
    }
}

detectPErsonalLevel();

let writeGenres;

function writeYourGenres() {
    for (var i = 1; i <= 3; i++) {
        do {
            writeGenres = prompt(`Ваш любимый жанр под номером ${i}`);
        } while (writeGenres == `` || writeGenres == null);
        personalMovieDB.genres [i - 1] = writeGenres;
    }

}
writeYourGenres();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }else {
        alert(`Приватно`);
    }
}

showMyDB();
// Начали создавать первую программу
