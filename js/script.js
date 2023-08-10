"use strict";

// alert("Hi"); модальное окно с информ

/* let result = confirm("Are you here?");
console.log(result); */

/* const answer = +prompt("Вам есть 18?","");
console.log(typeof(answer)); */

let answers = [];

for (let i = 0; i < 5; i++)
{
    answers[i] = prompt("Какой фильм смотрели?", "");
}

document.write(answers);
