// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль 
// при клике на button.change - color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.
const btnEl = document.querySelector('[type="button"]')

const spanEl = document.querySelector('span')

const bodyEl = document.querySelector('body')


btnEl.addEventListener('click', changeColor)


function changeColor(event) { 
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor()
}

function getRandomHexColor(event) {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
}
