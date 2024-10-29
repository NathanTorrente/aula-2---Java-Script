

function VelocidadePermitida(){
    var n1 = parseFloat(document.getElementById('d').value); // distancia
    var n2 = parseFloat(document.getElementById('u').value); // coeficientes de atrito
    var velocidade = 15.946 * Math.sqrt(n1,n2);
    var res = document.getElementById('resultado')
    
    var velocidadePermitida = parseFloat(document.getElementById('velocidadePermitida').value);
    var res2 = document.getElementById('resultado2')

    if(velocidade <= velocidadePermitida){
        res2.innerHTML = "Velocidade é Permitida"
    }
    else if (velocidade > velocidadePermitida)
    {
        res2.innerHTML = "Velocidade superior ao normal"
    }
    res.innerHTML = 'resultado' + velocidade;
    return velocidade;

}