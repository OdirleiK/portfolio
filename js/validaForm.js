const subBtn = document.querySelector('#submitBtn')
const nameForm = document.querySelector('#name');
const emailForm = document.querySelector('#email');
const msgForm = document.querySelector('#txtarea');

const message = document.querySelector('.msg-js')

subBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    const nameValue = nameForm.valie
    const emailValue = emailForm.value;
    const msgValue = msgForm.value;

    if(nameValue === '') {
        message.textContent = "Por gentileza, preencha todos os campos"
    }
})