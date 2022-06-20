"use strict";
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = prompt(`Сколько фильмов вы уже посмотрели?`, ``);

console.log(numberOfFilms);

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


// for (let i = 0; i < 2; i++) {
//     const a = prompt (`Один из последних просмотренных фильмов?`, ``),
//           b = +prompt (`Оцените его по 10-ти бальной шкале`, ``);
//
//     if (a != null && b != null && a != `` && b != `` && a.length < 50) {
//         personalMovieDB.movies [a] = b;
//         console.log(`done!`);
//     } else {
//         console.log(`error`);
//         i--;
//     }
// }

if (personalMovieDB.count < `10`) {
    console.log(`Просмотрено довольно мало фильмов`);
}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log(`Вы классический зритель`);
}else if (personalMovieDB.count >= 30) {
    console.log(`Вы киноман!`);
}else{
    console.log(`Ошибка`);
}

console.log(personalMovieDB);
// Начали создавать первую программу
