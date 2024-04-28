var body = document.getElementById('gradient');
var color1 = document.querySelector('.color1')
var color2 = document.querySelector('.color2')
var color_code = document.querySelector('h3')

function setGradient(){
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' +  color2.value + ')';
    color_code.textContent = body.style.background + ';';

}
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);


// let body = document.getElementById('.gradient');
// let color1 = document.querySelector('.color1');
// let color2 = document.querySelector('.color1');
// let p = document.querySelector('.color2')

// const setGradient = () => {
//     body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
//     p.textContent = body.style.background
// }


// color1.addEventListener('input', setGradient);
// color1.addEventListener('input', setGradient);