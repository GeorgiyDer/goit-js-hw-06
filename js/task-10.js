// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов
// очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.
const inputEl = document.querySelector('[type="number"]')
console.log(inputEl)
const btnCreateEl = document.querySelector('[data-create]')
console.log(btnCreateEl)
const btnDestroyEl = document.querySelector('[data-destroy]')
console.log(btnDestroyEl)
const divForCreateEl = document.querySelector('[id="boxes"]')
console.log(divForCreateEl)


btnCreateEl.addEventListener('click', puchBoxes)
btnDestroyEl.addEventListener('click', onDestroyBtm)



function createBoxes(amount) {
  let height = 20
  let width = 20
  // console.log(height)
  const mass = []
  for (let i = 0; i < amount; i += 1) {
    let div = document.createElement("div");
    height += 10
    width += 10
    div.style.width = `${height}px`
    div.style.height = `${width}px`
    div.style.backgroundColor = getRandomHexColor()
    div.style.marginTop = "5px"
    mass.push(div)
    
    // divForCreateEl.append(div)
  }
  
  return mass
}

function puchBoxes() { 
  const numberOfDiv = createBoxes(inputEl.value);
  divForCreateEl.append(...numberOfDiv) 
}


function onDestroyBtm(event) { 
  divForCreateEl.innerHTML = '';
  inputEl.value = '';
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
