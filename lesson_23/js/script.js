// строгий режим
"use strict"

//====оператори=====
// варіант 1
console.log('35' + -"22");
// варіант 2
console.log('35' * "22");
// варіант 3
// console.log('558' > 22++);
// варіант 4
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);
// варіант 5
console.log(!false && 11 || 18 && !'');
// варіант 6
let nameR = 0;
console.log(nameR ?? "Без імені");

//====If Else=====
// варіант 1
if (1 === "1"){
   console.log('Істина!');
} else {
   console.log('Брехня!');
}
// варіант 2
if (5 == "5"){
   console.log('Істина!');
} else {
   console.log('Брехня!');
}
// варіант 3
let message = (92 > '11' && 58 < 100) ? 'Істина!' : 'Брехня!';
console.log(message);
// варіант 4
if (0) {
   console.log('Брехня!');
} else if (" ") {
   console.log('Істина!');
}

//====цикли=====
// задача 1 - вивести в консоль цифри від 1 - 5
// цикл while
let num1 = 1;
while (num1 < 6) {
   console.log(num1);
   num1++;
}
// цикл for
for (let num2 = 1; num2 < 6; num2++) {
   console.log(num2);
}
// від 5 - 1
// let num2 = 5;
// while (num2) {
//    console.log(num2);
//    num2--;
// }

// задача 2 - останній результат 0?
let num3 = 8;
while (num3) {
   console.log(num3);
   num3--;
}

// задача 3 - переписати на While
// for (let num = 0; num < 3; num++) {
//    console.log('Число: ${num}');
// }
let num4 = 0;
while (num4 < 3) {
console.log(num4);
num4++;
}

// задача 4 - зупинити роботу циклу 1 коли size рівна 1
// цикл №1
for (let num = 0; num < 2; num++) {
   // цикл №2
   for (let size = 0; size < 3; size++) {
      if (size == 1) break;
      console.log(size);
   }
}

//====тип даних number=====
// задача 1 виведе 1, що не правильно
//  + Number.EPSILON - маленьке число, в результаті отримуємо 1.01
let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne);
// задача 2 получити число 35,58
// + parseFloat
let valueOne = parseFloat("135.58px");
console.log(valueOne);
// задача 3 побудувати правильну умову вітвлення
// + isNaN
let valueTwo = 58 + "Фрілансер";
if (isNaN) {
   console.log('Результат вираження NaN');
}
// задача 4 знайти мах число з 10,58,39,-150,0
console.log(Math.max(10, 58, 39, -150, 0));
// задача 5 округлити число 58,858 до 58
let numFive = Math.floor(58.858);
console.log(numFive);

//====тип даних string=====
// задача 1 Чи вірний запис? очікуємо отримати Привіт! Я фрілансер
let fls = "Фрілансер";
let text = `Привіт! Я ${fls}`;
console.log(text);
// задача 2 отримати символ "н" рядка
let text1 = 'фрілансер';
let nSymbol = text1[5];
console.log(nSymbol);
// задача 3 очікуємо 579, вірно?
// let text2 = 123 + "456";
// console.log(text2);
// задача 4 отримати рядок у верхньому регістрі
let text3 = 'фрілансер';
console.log(text3.toUpperCase());
// задача 5 отримати підрядок "лан" з:
let text4 = 'фрілансер';
console.log(text4.slice(3, 6));
// задача 6 true or false
// false
let text5 = 'фрілансер';
console.log(text5.includes('лан', 4));
// true 
let text6 = 'фрілансер';
console.log(text6.includes('лан', 3));