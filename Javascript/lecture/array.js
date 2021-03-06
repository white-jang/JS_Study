'use strict';

// Arrayπ

// 1. Declaration λ°°μ΄μ μ μΈ λ°©λ² 2κ°μ§
const arr1 = new Array();
const arr2 = [1, 2];


// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.clear();


// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach (value, index, arrayμ μ²΄λ₯Ό νλ‘νΌν°λ‘ λ°μ μ μμ)
fruits.forEach((fruit) => console.log(fruit)); // arrow functionμ ν μ€μΌ λ block μλ΅ κ°λ₯ 


// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('π', 'π');
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('π', 'π');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// pop, pushλ λ§¨ λ, μ¦ κ³ μ λ μμΉμ μ½μ/μ­μ νλ―λ‘ λ€λ₯Έ κ°λ€μ μ΄λμ΄ μμ
// shift, unshiftλ λ§¨ μμ κ°μ μ½μ/μ­μ νκΈ° μν΄ λ€λ₯Έ κ°λ€μ μ΄λμν΄
// splice: remove an item by index position
fruits.push('π', 'π', 'π');
console.log(fruits);
fruits.splice(1, 1); // μμνλ μμΉ, μ§μ°λ κ°μ
// μ§μ°λ κ°μλ optionalμΈλ°, μμΉλ§ λ£μΌλ©΄ κ·Έ μμΉ λΉΌκ³  λͺ¨λ  κ°μ μ§μ
console.log(fruits);
fruits.splice(1, 1, 'π', 'π'); // μλ‘μ΄ κ°μ λ£λ κ²λ κ°λ₯
console.log(fruits);

// combine two arrays
const fruits2 = ['π', 'π₯₯'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// indexOf: find the index 
// κ°μ₯ μ²« λ²μ§Έλ‘ λ§λ κ°
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π₯₯')); // ν΄λΉ κ°μ΄ μμΌλ©΄ -1

// includes
console.log(fruits.includes('π'));
console.log(fruits.includes('π₯₯'));

// lastIndexOf
// κ°μ₯ λ§μ§λ§μΌλ‘ λ§λ κ°
console.clear();
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.lastIndexOf('π₯₯'));