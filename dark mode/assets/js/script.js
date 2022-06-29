function changeMode(){
    changeClasses();
}

function changeClasses(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    h2.classList.toggle('dark-mode');
    h3.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    changeText();
}

function changeText(){
    if(button.classList.contains('dark-mode')){
        button.innerHTML = "Light Mode";
        h3.innerHTML = "Dark mode: ON";
    } else {
        button.innerHTML = "Dark Mode";
        h3.innerHTML = "Dark mode: OFF";
    }
}

const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const h2 = document.getElementsByTagName('h2')[0];
const h3 = document.getElementsByTagName('h3')[0];
const container = document.getElementsByClassName('container')[0];
const body = document.getElementsByTagName('body')[0];

button.addEventListener('click', changeMode)