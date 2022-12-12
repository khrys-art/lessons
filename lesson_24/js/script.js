// строгий режим
"use strict"

//====функції=====
// задача 1 Хто першим поподе в консоль?
function showName() {
   console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!');
// задача 2 Чи правильно визвана функція
showMassage();
function showMassage() {
   console.log('Повідомлення1!');
}
// задача 3  Чи правильно визвана функція
// не вірно
// showMessage();
// let showMessage = function () {
//    console.log('Повідомлення2!');
// }
// вірно
let showMessage2 = function () {
   console.log('Повідомлення2!');
};
showMessage2();
// задача 4 Як вирішити проблему
'use strict'
let showMessage3;
if (2 > 1) {
  showMessage3 =  function () {
      console.log('Повідомлення3!');
   };
}
showMessage3(); 
// в строгому режимі якщо функція оголошена всередині якогось блоку (іф) то за його межами визвати функцію не вийде
// error (showMassage is not defined)

// ==========Масив====================================
// задача 1 Яке число/довжину отримаємо?
let arr1 = ['Ваня', 'Іштван', 'Оля'];
let newArr = arr1;
newArr.push('Петя');
console.log(arr1.length);
// задача 2: 1. створити масив users з ел. Ваня, Іштван
let users = [
   'Ваня',
   'Іштван', 
];
console.log(users);
// 2. + Оля
// users.push("Оля");
// або 
users.splice(2, 1, "Оля");
// 3. Замінити Іштван на Петя
users.splice(1, 1, "Петя");
// 4. Видалити перший елемент (Ваня) з масиву
users.splice(0, 1);
// or
// users.shift();
// 5.Вставити на початок масиву Маша і Паша
users.splice(0, 0, "Маша", "Паша");
// or
// users.unshift("Маша", "Паша");

// задача 3 видалити елемент Іштван і повернути його в змінну
let arr3 = ['Ваня', 'Іштван', 'Оля'];
console.log(arr3);
let removed = arr3.splice(1, 1);
console.log(removed);
// задача 4 зробити з рядка масив
let str = 'Ваня, Іштван, Оля';
let str1 = str.split(',');
console.log(str1);
// задача 5 Чому дорівнює  на початку роботи метод?
// let arr4 = [9, 2, 8,];
// let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
//    console.log(previousValue);
// })

// ==========DOM====================================
// задача 1 
// 1.отримати в змінну елемент з атрибутом data-say-hi
// 2.прочитати значенян цього атрибуту
const elData = document.querySelector("[data-say-hi]");
console.log(elData);
console.log(elData.getAttribute("data-say-hi"));
// задача 2 отримати в змінну ел з текстом Йончі
let yonchi = document.querySelector('ul li.yonchi');
console.log(yonchi);
// задача 3 отримати в змінну колекцію ел з класом like
const like = document.querySelectorAll(".like");
console.log(like);
// задача 4 куди додасться <li>text</li>
// const list = document.querySelectorAll('ul');
// list.insertAdjacentHTML(
//    "beforeend",
//    '<li>text</li>'
// );

// ===============розміри, прокрутка, координати===============================
// задача 1 Дізнатися ширину полоси прокрутки
const mainElementWidth = document.documentElement.clientWidth;
console.log(mainElementWidth);

const windowWidth = window.innerWidth;
console.log(windowWidth);

const scroll = windowWidth - mainElementWidth;
console.log(scroll);

// задача 2 Заставити браузер прокрутитися на 100рх 
// через секунду після того як відкрилась сторінка
function setScrollTo() {
	window.scrollTo({
		top: 1000,
		left: 0,
		behavior: "smooth",
	})
}
setTimeout(setScrollTo, 1000);

// задача 3 Отримати координати будь-яких трьох елементів на сторінці
// перший ел
// отримали об'єкт
const elOne = document.querySelector('.page');
// координати відносно вікна браузера
const elOneTop = elOne.getBoundingClientRect().top;
console.log(elOneTop);
const elOneLeft = elOne.getBoundingClientRect().left;
console.log(elOneLeft);
// координати відносно документа
const elOneDocumentTop = elOneTop + window.pageYOffset;
const elOneDocumentLeft  = elOneLeft + window.pageXOffset;
const elOneDocumentPosition = {
	"top": elOneDocumentTop,
	"left": elOneDocumentLeft
};
console.log(elOneDocumentPosition);

// другий ел
const elTwo = document.querySelector('.page-text1');

const elTwoTop = elTwo.getBoundingClientRect().top;
console.log(elTwoTop);
const elTwoRight = elTwo.getBoundingClientRect().right;
console.log(elTwoRight);

const elTwoDocumentTop = elTwoTop + window.pageYOffset;
const elTwoDocumentRight  = elTwoRight + window.pageXOffset;

const elTwoDocumentPosition = {
	"top": elTwoDocumentTop,
	"right": elTwoDocumentRight
};
console.log(elTwoDocumentPosition);

// третій ел
const elThree = document.querySelector('.korchi');

const elThreeBottom = elThree.getBoundingClientRect().bottom;
console.log(elThreeBottom);
const elThreeRight = elThree.getBoundingClientRect().right;
console.log(elThreeRight);

const elThreeDocumentBottom = elThreeBottom + window.pageYOffset;
const elThreeDocumentRight  = elThreeRight + window.pageXOffset;

const elThreeDocumentPosition = {
	"bottom": elThreeDocumentBottom,
	"right": elThreeDocumentRight
};
console.log(elThreeDocumentPosition);