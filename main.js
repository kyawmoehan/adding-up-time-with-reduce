const timeNodes = Array.from( document.querySelectorAll('[data-time]'));
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins,secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((total, secs) => total + secs);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`${hours}hr :${minutes}min :${secondsLeft}sec`);


