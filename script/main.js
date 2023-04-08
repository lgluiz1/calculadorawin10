const btnCalculadoraAbrir = document.querySelector('.calculadora_incon_trabalho');
const btnCalculadoraMaximinizar = document.querySelector('.calculadora_incon_barra');
const btnCalculadoraFechar = document.getElementById('header__menu__x');
const calculadora = document.querySelector('.calculadora');
const miniCalculadora = document.querySelector('.minimiza__calculadora__inter')

btnCalculadoraAbrir.addEventListener('click', () => {
    calculadora.style.transform = 'scale(1)';
});

btnCalculadoraMaximinizar.addEventListener('click', () => {
    calculadora.style.transform = 'scale(1)';
});

btnCalculadoraFechar.addEventListener('click', () => {
    calculadora.style.transform = 'scale(0)';
});
miniCalculadora.addEventListener('click', () => {
   calculadora.style.width = ''
})