'use strict';

const box = document.getElementById('box'), 
//colect
      btns = document.getElementsByTagName('button'), /// const btns = document.getElementsByTagName('button')[1]; /// 
//console.log(btns); //console.log(btns)[1]; //
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),      
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart'); //1 element

/* box.style.backgroundColor = 'blue';
box.style.width = '450px';
 */
let num = 300;
box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';

/* for(let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'green';
} */

hearts.forEach(i => i.style.backgroundColor = 'orange');

const div = document.createElement('div');
//const text = document.createTextNode('Hi');

div.classList.add('black'); //document.querySelector('.wrapper').append(div);
wrapper.append(div);
//wrapper.prepend();

//hearts[0].before(div);
//hearts[0].after(div);

//wrapper.insertBefore(div, hearts[1]);

//circles[0].remove();
//wrapper.removeChild(herts[1]);

hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = '<h1>HI</h1>'; // текст и теги
//div.textContent = "Hello"; //только текст

div.insertAdjacentHTML("afterbegin", '<h2>sd</h2>');