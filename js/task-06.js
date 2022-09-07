// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.



const inputEl = document.querySelector('input[data-length="6"]')
console.log(`сравниваем с ${inputEl.dataset.length}`)


inputEl.addEventListener('blur', onInputBlur)

function onInputBlur(event) { 
    console.log(event.currentTarget.value)
    if (event.currentTarget.value.length == inputEl.dataset.length &&
        inputEl.classList.contains('invalid') === false) {
        inputEl.classList.add('valid');
    }
    if (event.currentTarget.value.length == inputEl.dataset.length &&
        inputEl.classList.contains('invalid') === true) {
        inputEl.classList.replace('invalid', 'valid')
    }
    if (event.currentTarget.value.length != inputEl.dataset.length &&
        inputEl.classList.contains('invalid') === false) {
        inputEl.classList.add('invalid');
    }
}


