//HTML DOMs
let resultadoSoma = document.getElementById('resultadoSoma');

let resultadoSubtracaoAb = document.getElementById('resultadoSubtracaoAb');
let resultadoSubtracaoBa = document.getElementById('resultadoSubtracaoBa');

let resultadoMultiplicacao = document.getElementById('resultadoMultiplicacao');

let resultadoDivisaoAb = document.getElementById('resultadoDivisaoAb');
let resultadoDivisaoBa = document.getElementById('resultadoDivisaoBa');

let resultadoPotenciaAb = document.getElementById('resultadoPotenciaAb');
let resultadoPotenciaBa = document.getElementById('resultadoPotenciaBa');

let resultadoRaizA = document.getElementById('resultadoRaizA');
let resultadoRaizB = document.getElementById('resultadoRaizB');

let resultadoFatorialA = document.getElementById('resultadoFatorialA');
let resultadoFatorialB = document.getElementById('resultadoFatorialB');

let resultadoPorcentagemAb = document.getElementById('resultadoPorcentagemAb');
let resultadoPorcentagemBa = document.getElementById('resultadoPorcentagemBa');

let resultadoMedia = document.getElementById('resultadoMedia');

resultadoSoma.innerHTML = 0;

resultadoSubtracaoAb.innerHTML = 0;
resultadoSubtracaoBa.innerHTML = 0;

resultadoMultiplicacao.innerHTML = 0;

resultadoDivisaoAb.innerHTML = 0;
resultadoDivisaoBa.innerHTML = 0;

resultadoPotenciaAb.innerHTML = 0;
resultadoPotenciaBa.innerHTML = 0;

resultadoRaizA.innerHTML = 0;
resultadoRaizB.innerHTML = 0;

resultadoFatorialA.innerHTML = 0;
resultadoFatorialB.innerHTML = 0;

resultadoPorcentagemAb.innerHTML = 0;
resultadoPorcentagemBa.innerHTML = 0;

resultadoMedia.innerHTML = 0;


//calcs
// function calcularSoma(a, b) {
//     return a + b;
// }

const calcularSoma = (a, b) => a + b;

const calcularSubtracaoAb = (a, b) => a - b;
const calcularSubtracaoBa = (a, b) => b - a;

const calcularMultiplicacao = (a, b) => a * b;

const calcularDivisaoAb = (a, b) => a / b;
const calcularDivisaoBa = (a, b) => b / a;

const calcularPotenciaAb = (a, b) => Math.pow(a, b);
const calcularPotenciaBa = (a, b) => Math.pow(b, a);

const calcularRaizA = (a) => Math.sqrt(a).toFixed(2);
const calcularRaizB = (b) => Math.sqrt(b).toFixed(2);

const calcularFatorialA = (a) => {
    let num = a;

    if (a === 0 || a === 1)
        return 1;

    while (a > 1) {
        a--;
        num = num * a;
    }
    return num;
}

const calcularFatorialB = (b) => {
    let num = b;

    if (b === 0 || b === 1)
        return 1;

    while (b > 1) {
        b--;
        num = num * b;
    }
    return num;
}

// function fatorial(a) {
//     let result = a;

//     if (a === 0 || a === 1)
//         return 1;

//     while (a > 1) {
//         a--;
//         result = result * a;
//     }

//     return result;
// }

const calcularPorcentagemAb = (a,b) => ((a * 100)/b).toFixed(2) + '%';
const calcularPorcentagemBa = (a,b) => ((b * 100)/a).toFixed(2) + '%';

const calcularMedia = (a, b) => (a + b) / 2;

//func pra executar calc
function calcular() {
    let inputA = document.getElementById('primeiroNumero').value;
    let inputB = document.getElementById('segundoNumero').value;

    let a = parseFloat(inputA);
    let b = parseFloat(inputB);

    resultadoSoma.innerHTML = calcularSoma(a, b);

    resultadoSubtracaoAb.innerHTML = calcularSubtracaoAb(a, b);
    resultadoSubtracaoBa.innerHTML = calcularSubtracaoBa(a, b);

    resultadoMultiplicacao.innerHTML = calcularMultiplicacao(a, b);

    resultadoDivisaoAb.innerHTML = calcularDivisaoAb(a, b);
    resultadoDivisaoBa.innerHTML = calcularDivisaoBa(a, b);

    resultadoPotenciaAb.innerHTML = calcularPotenciaAb(a, b);
    resultadoPotenciaBa.innerHTML = calcularPotenciaBa(a, b);
    
    resultadoRaizA.innerHTML = calcularRaizA(a);
    resultadoRaizB.innerHTML = calcularRaizB(b);

    resultadoFatorialA.innerHTML = calcularFatorialA(a);
    resultadoFatorialB.innerHTML = calcularFatorialB(b);

    resultadoPorcentagemAb.innerHTML = calcularPorcentagemAb(a, b);
    resultadoPorcentagemBa.innerHTML = calcularPorcentagemBa(a, b);

    resultadoMedia.innerHTML = calcularMedia(a, b);
}