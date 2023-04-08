const numeroSoma = document.querySelector('#digitos')
const resultadoSoma = document.querySelector('.resultado')
const historicoSoma = document.querySelector('#historicos')
const limpaHistorico = document.querySelector('#clean')
let recalculo = document.querySelector('.recalculo')
let novoCalculo = false

function insert(digitoSoma){
    if(novoCalculo) { 
        numeroSoma.innerHTML = " ";
        resultadoSoma.innerHTML = " ";
        novoCalculo = false
    }   
    numeroSoma.innerHTML = numeroSoma.innerHTML + digitoSoma;

}
function clean(){
    numeroSoma.innerHTML = " ";
}
function cleanSoma(){
    resultadoSoma.innerHTML = " ";
}
function back(){
    numeroSoma.innerHTML = numeroSoma.innerHTML.substring(0, numeroSoma.innerHTML.length -1);
}
limpaHistorico.addEventListener('click', () => {
    historicoSoma.innerHTML = "";
    
})
function calcular(){
    resultadoSoma.innerHTML = eval(numeroSoma.innerHTML);
    historicoSoma.innerHTML = `<div class="recalculo">${numeroSoma.innerHTML} = <br>  <strong>${resultadoSoma.innerHTML}</strong></div> ${historicoSoma.innerHTML}`;    
    novoCalculo = true
}

historicoSoma.addEventListener('click', (e) => {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(e.target.innerHTML, 'text/html').body.textContent.replace(/\s+/g, '').split('=');
    numeroSoma.innerHTML = parsedHtml[0];
    resultadoSoma.innerHTML = parsedHtml[1];
} )

