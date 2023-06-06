const pepsiBlack = document.querySelector('.pepsiBlack')
const duration = 500;
pepsiBlack.addEventListener('click', () => {
    var body = document.body;
    var img = document.querySelector('#imagem')
    var button = document.querySelector('.buttonEscrita')

    body.style.transition = `background-color ${duration}ms ease`;
    body.style.backgroundColor = 'black';
    img.src = 'img/black-pepsi.png';
    button.style.transition = '.3s ease-in-out';
    button.style.boxShadow = '0 0 0 4px #000000, 0 0 0 7px rgb(255, 255, 255)';

});




const pepsiBlue = document.querySelector('.pepsiBlue')
pepsiBlue.addEventListener('click', () => {
    var body = document.body;
    var img = document.querySelector('#imagem')
    var button = document.querySelector('.buttonEscrita')

    body.style.transition = `all ${duration}ms ease`;
    body.style.backgroundColor = '#0050a6';
    img.src = 'img/blue-pepsi.png';
    button.style.transition = '.3s ease-in-out';
    button.style.boxShadow = '0 0 0 4px #0050a6, 0 0 0 7px rgb(255, 255, 255)';
});




const img = document.querySelectorAll('img');

img.forEach((img) => {
    img.draggable = false;
})




const buttonMenuMobile = document.querySelector('.menu');
const menuMobileAberto = document.querySelector('.menuConteudo')

buttonMenuMobile.addEventListener('click', () => {
    if (menuMobileAberto.style.display === 'none') {
        menuMobileAberto.style.display = 'block';
        menuMobileAberto.style.animation = 'slide .5s linear forwards';
    } else {
        menuMobileAberto.style.animation = 'slideFechar .3s linear forwards';
        setTimeout(() => {
            menuMobileAberto.style.display = 'none';
        }, 300);
    }
});
