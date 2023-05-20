let mouseFollow = false;

document.getElementById('funButton').addEventListener('click', function(event) {
    createDot(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
});

document.getElementById('mouseButton').addEventListener('click', function(event) {
    mouseFollow = !mouseFollow;
});

document.addEventListener('mousemove', function(event) {
    if (mouseFollow) {
        createDot(event.clientX, event.clientY);
    }
});

function createDot(x, y) {
    const dot = document.createElement('div');
    dot.classList.add('dot');

    const size = Math.random() * 50;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;

    dot.style.top = `${y - size/2}px`;
    dot.style.left = `${x - size/2}px`;

    dot.style.backgroundColor = randomColor();

    document.body.appendChild(dot);

    // Make the dot move in a random direction
    setInterval(() => {
        dot.style.top = `${dot.offsetTop + (Math.random() * 200 - 100)}px`;
        dot.style.left = `${dot.offsetLeft + (Math.random() * 200 - 100)}px`;
        dot.style.backgroundColor = randomColor();
    }, 1000);
}

function randomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}
