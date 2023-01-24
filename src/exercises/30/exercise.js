// Create a timer
// - Timer should tick for every 1sec
// - Stop the timer at exactly 1min
// - Display it on a HTML page
// - What is the function that you have used?

let timer = () => {
    counter = 60;
    let time = setInterval(() => {
        document.getElementById('timer').textContent = counter;
        if(--counter<0) {
            clearInterval(time)
        }
    }, 1000)
}

window.onload(timer())