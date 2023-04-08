const dataAtual = document.querySelector(".data")
const horaAtual = document.querySelector(".hora")

function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    dataAtual.innerHTML = `${day}/${month}/${year}`;
}

function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    horaAtual.innerHTML = `${hours}:${minutes}`
}

function displayCurrentDateAndTime() {
    getCurrentDate();
    getCurrentTime();
    
}
displayCurrentDateAndTime()

// Chama a função displayCurrentDateAndTime a cada minuto (60000 milissegundos)
const intervalID = setInterval(displayCurrentDateAndTime, 60000);