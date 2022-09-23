const nameh1 = document.querySelector('.h1-main');
const pname = document.querySelector('.p-main');

function typeWriter(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 100 * i)
    }); 
}
typeWriter(nameh1);
typeWriter(pname);