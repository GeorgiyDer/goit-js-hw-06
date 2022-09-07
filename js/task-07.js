// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const controlEl = document.querySelector('input')
const spanEl = document.querySelector('span')
console.log(controlEl)
console.log(spanEl)

controlEl.addEventListener('input', OncontrolChanges)

function OncontrolChanges(event) { 
    const value = controlEl.valueAsNumber
    const res = value + "px"
    spanEl.style.fontSize = res;
    
}