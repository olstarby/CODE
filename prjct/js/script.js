const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	private: false,
	start: function () {
		personalMovieDB.count = prompt(`Сколько фильмов вы уже посмотрели?`, ``);
		while (
			personalMovieDB.count === ``
			|| personalMovieDB.count == null
			|| isNaN(personalMovieDB.count)
		) {
			personalMovieDB.count = prompt(`Сколько фильмов вы уже посмотрели?`, ``);
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt(`Один из последних просмотренных фильмов?`, ``);
			const b = +prompt(`Оцените его по 10-ти бальной шкале`, ``);

			if (a != null && b != null && a !== `` && b !== `` && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log(`done!`);
			} else {
				console.log(`error`);
				i--;
			}
		}
	},
	detectPErsonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log(`Просмотрено довольно мало фильмов`);
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log(`Вы классический зритель`);
		} else if (personalMovieDB.count >= 30) {
			console.log(`Вы киноман!`);
		} else {
			console.log(`Ошибка`);
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {
			let genre = prompt(`Ваш любимый жанр под номером ${i}`);

			if (genre === `` || genre == null) {
				console.log(`Некорректное значение`);
			} else {
				personalMovieDB.genres[i - 1] = genre;
			}
		}
		personalMovieDB.genres.forEach((item, i) => { console.log(`Любимый жанр ${i + 1} - это ${item}`); });
	},
		showMyDB: function () {
			if (personalMovieDB.private === false) {
				console.log(personalMovieDB);
			} else {
				alert(`Приватно`);
			}
		},
		toggleVisibleMyDB: function () {
			if (personalMovieDB.private === true) {
				personalMovieDB.private = false;
			} else personalMovieDB.private = true;
		},
	};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPErsonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();