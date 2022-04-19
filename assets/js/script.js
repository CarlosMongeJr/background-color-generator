const background = document.querySelector('section');
const button = document.querySelector('button');
const code = document.querySelector('h2');

button.addEventListener('click', () => {
    let color='#';
    color += Math.random().toString(16).slice(2,8);
    background.style.backgroundColor = color;
    code.innerText = color;
    console.log(color);
})
