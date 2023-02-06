"use strict";

// Место для первой задачи
function firstTask() {
    for (let i = 5; i < 11; i++) {
        console.log(i);
    }
}

// Место для второй задачи
function secondTask() {
    for (let i = 20; i > 9; i--) {
        if (i === 13) break;
        console.log(i);
    }


}

// Место для третьей задачи
function thirdTask() {
    for (let i = 2; i < 11; i++) {
        if (i % 2 == 0)
            console.log(i);
    }


}

// Место для четвертой задачи

// Цикл, который нужно переписать:

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}



function fourthTask() {
    let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }


}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);


    // Не трогаем
    return arrayOfNumbers;
}

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)