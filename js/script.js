/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdv = document.querySelectorAll('.promo__adv img'),
      promoCont = document.querySelector('.promo__content'),
      poster = document.querySelector('.promo__bg'),
      genre = document.querySelector('.promo__genre'),
      filmeList = document.querySelectorAll('.promo__interactive-list li'),
      movieList = document.querySelector('.promo__interactive-list');

promoAdv.forEach(i => i.remove());
genre.textContent = "драма";

poster.style.backgroundImage = 'url("img/bg.jpg")';


movieDB.movies.sort()

/* movieList.innerHTML = "";
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `<li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
    </li>`;
}); */

filmeList.forEach((i, count) => {
    i.textContent = `${count + 1}. ${movieDB.movies[count]}`;
    count++;
});


