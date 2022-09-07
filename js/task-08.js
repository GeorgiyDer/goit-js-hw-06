// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
// что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
// где имя поля будет именем свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
// alert(сообщение)
const formEl = document.querySelector('form')

formEl.addEventListener('submit', onFormSubmit)


function onFormSubmit(event) { 
    event.preventDefault();
    
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const form = {
        email,
        password,
    }

    if (email === '' || password === '') {
        alert('все поля должны быть заполены ')
    } else {alert(`name: ${form.email}    password: ${form.password}`)}

    formEl.reset()
}

