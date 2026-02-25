//callback é uma função que é execulta após a obtenção de algum resultado, no exemplo abaixo foi execultada após tempo de 2 segundos 

function alerta(){
    console.log('Opa, tudo bem?');
}

let nome = 'Willian';
setTimeout(alerta, 2000);
let sobrenome = 'Santos Silva';
console.log(`Nome completo = ${nome} ${sobrenome}`);