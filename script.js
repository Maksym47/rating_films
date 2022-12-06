/* Задание на урок 4:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// Код возьмите из предыдущего домашнего задания

'use strict';

let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == 0 || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = +prompt('На сколько оцените его?', '');
        if (a && b || b == 0 && a.length <= 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

function showMyDB() {
    if (personalMovieDB.privat === false) {
    console.log(personalMovieDB);
    }
}
// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let ans = prompt(`Ваш любимый жанр под номером ${i}`, '');
        if (ans === null || ans.length < 1) {
            i--;
            continue;
        }
        personalMovieDB.genres.push(ans);
    }

    personalMovieDB.genres.forEach((item) => {
        console.log(item);
    });
}

function toggleVisibleMyDB() {
    if (personalMovieDB.privat === true) {
        personalMovieDB.privat = false;
    } else if (personalMovieDB.privat === false) {
        personalMovieDB.privat = true;
    } 
}

personalMovieDB.toggleVisibleMyDB = toggleVisibleMyDB;
personalMovieDB.start = start;
personalMovieDB.rememberMyFilms = rememberMyFilms;
personalMovieDB.detectPersonalLevel = detectPersonalLevel;
personalMovieDB.showMyDB = showMyDB;
personalMovieDB.writeYourGenres = writeYourGenres;

personalMovieDB.writeYourGenres();
