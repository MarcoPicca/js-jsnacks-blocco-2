// Cliccando su un pulsante, viene avviato un cronometro. 
// Per fermare il cronometro, bisogna cliccare su un secondo pulsante


const startTimer = document.querySelector('start-timer');

startTimer.addEventListener('click', function () {
    let timer = setInterval(startTimer, 1000);
});