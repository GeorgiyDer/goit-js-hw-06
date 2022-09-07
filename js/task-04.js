// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const spanEl = document.querySelector('#value')
const btnEl = document.querySelectorAll('button')
const decBtnEl = btnEl[0]
const incBtnEl = btnEl[1]

console.log(decBtnEl)
console.log(incBtnEl)

let counterValue = 0;

decBtnEl.addEventListener('click', onDecrementButtonClick)

function onDecrementButtonClick(event) {
    console.log('клик -')

    if (counterValue === 0) { 
        spanEl.textContent = 0
    } else {counterValue -= 1;
    spanEl.textContent = counterValue}
    
}



incBtnEl.addEventListener('click', onIncrementButtonClick)

function onIncrementButtonClick(event) { 
    console.log('клик +')
    counterValue += 1;
    spanEl.textContent = counterValue
}

