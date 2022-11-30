// строгий режим
"use strict"

//====семантика=====
// задаємо значення одразу
let study = `Я вивчаю JS`;
console.log(study);
// чи згодом
let study2;
study2 = 'I am study JS';
console.log(study2);
// змінюємо значення
study2 = `I am study JS just 2 days`;
console.log(study2);

//====змінні/константи====
// #1
let userEye = "grey";
console.log(userEye);
// #2
let user;
let userName = 'Вася';
user = userName;
console.log(user);

// ========типи даних=====
// #1
let userAge = 36;
let userInfo3 = "Anna ${userAge}";
console.log(userInfo3);
// #2
let userHeight = 145 / 0;
console.log(userHeight);
// #3
let userName3;
console.log(typeof userName3);

let userSize = "45" / "8";
console.log(typeof userSize)


// let getNan = `Фрілансер` / 10;
// console.log(getNan);
// console.log(typeof getNan);

// ==================
// let user2 = 'Вася';
// let age = 36;
// let userInfo = `Name: ${user2}` + `, Age: ${age}.`;
// console.log(userInfo);
// =====================
// let userInfo2 = {
//    name: `Ірина`,
//    age: 36
// }
// console.log(userInfo2);
// console.log(typeof userInfo2);