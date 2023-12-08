

function calcularImc (peso,altura){
    return peso / Math.pow(altura,2);
}
function classImc(imc){
    if (imc < 18.5){
        return "abaixo do peso";
    } else if (imc>= 18.5 && imc < 25){
        return "Peso Normal";
    } else if (imc>= 25 && imc < 30){
        return "Acima do peso";   
    } else if (imc>= 30 && imc < 40){
        return "Obeso";  
    } else {
        return "Obsedidade Grave";
    }
}

function main (){
    let peso = prompt("Digite seu Peso:");
    let altura = prompt("Digite sua Altura:");

    let imc = calcularImc(peso, altura);
    console.logg(classImc(imc));
    calcularjuros();
}
main();