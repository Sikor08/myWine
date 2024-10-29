import "./style/style.scss";
const hamIcon = document.querySelector('.ham');
const hamMenu = document.querySelector('.hamMenu');
const body = document.getElementById('body');
hamIcon.addEventListener('click', () => {
    hamMenu.classList.toggle('visible');
    body.classList.toggle('hamActive');
    hamIcon.classList.toggle('active')
})

