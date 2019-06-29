const name = "Usagi";
const age = 70;
let isHappy = true;
console.log(`Nazywam się ${name} i mam ${age} lat.`);


const emptyContent = document.querySelector('.content__text__js');
console.log(emptyContent);

emptyContent.innerHTML = '<em style="color:yellow;">Księżycowy Królik</em>';

if (age > 14) {
    console.log(`Masz więcej niż 14 lat.`);
} else {
    console.log(`Masz 14 lat lub mniej.`);
}

switch (age) {
    case 20:
        console.log('Masz równo 20 lat.');
        break;
    case 30:
        console.log('Masz  równo 30 lat.');
        break;
    default:
        console.log(`Masz ${age} lat.`)
        break;
}

const amIOld = (age >= 70) ? 'old' : 'not old';
console.log(amIOld);

function calculate(x) {
    x = x + 3;
    console.log(x);
    return x * 7;
}
 console.log(calculate(2));

 const fatCalculation = (y) => {
     return y + y;
 }

 const short = z => (z * 100);
 console.log(short(6));