// promise é um resultado temporário que se recebe - uma promessa
function pegarTemperatura(){
    return new Promise(function(resolve, reject) {
        console.log("pegando temperatura...");

        setTimeout(function(){
            resolve('40 na sombra');
        }, 2000);
    });
}

// usando a promise
console.log('Codigo antes!');

let temp = pegarTemperatura();

console.log('Codigo durante!');

temp.then(function(resultado){
    console.log(`Temperatura: ${resultado}`);
});
temp.catch(function(error){
    console.log('Eita, dei erro!');
});
console.log('Codigo depois!');
