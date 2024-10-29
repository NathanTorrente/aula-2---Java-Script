var idade = 18;


if (idade < 18){
    console.log('Você é menor de idade');
}

else if (idade >= 18 && idade <= 60){
    console.log('Rapaz, o homi ta adutu');
}
else if (idade > 60 && idade < 70){
    console.log('terceira idade, não aposentado é claro, continue trabaiando');
}
else if( idade >= 70){
console.log('terceira idade, aposentado')
}

function areaQuadrado(lado){
    area = lado * lado;
    return area;

}



var r = areaQuadrado(10);
console.log(r);



function CalculoIMC(altura, peso){
    imc = peso / (altura * altura);
    return imc;
}
var imc = CalculoIMC(1.69, 55)
console.log('O valor do imc é:' + imc);


for(var i = 0; i < 10; i++){

    console.log(i);
}

var n = 0;
while(n>10){
    console.log(n);
    n++;
}

var pesso = {

    nome: 'Elias'

}