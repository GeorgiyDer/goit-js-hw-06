// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const itemEl = document.querySelectorAll('.item')
console.log(`Number of categories: ${itemEl.length}`)   // Number of categories: 3

const titleEl = document.querySelectorAll('.item h2')

const ulEl = document.querySelectorAll('.item ul')
const firstUlEl = ulEl[0].querySelectorAll('li')
const secondtUlEl = ulEl[1].querySelectorAll('li')
const thirdtUlEl = ulEl[2].querySelectorAll('li')

console.log(`Category: ${titleEl[0].textContent}`)   // Category: Animals
console.log(`Elements: ${firstUlEl.length}`)       // Elements: 4

console.log(`Category: ${titleEl[1].textContent}`)   // Category: Products
console.log(`Elements: ${secondtUlEl.length}`)       // Elements: 3

console.log(`Category: ${titleEl[2].textContent}`)   // Category: Technologies
console.log(`Elements: ${thirdtUlEl.length}`)        // Elements: 5