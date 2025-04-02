function somar(){
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    let resultado = numero1 + numero2;
    document.getElementById ('resultado').innerText = resultado;

}

function dividir(){
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    if(numero2 === 0){
    document.getElementById ('resultado').innerText = "Divisão por zero";
    }else{
    let resultado = numero1 / numero2;
    document.getElementById ('resultado').innerText = resultado;
    }
}

function expressao (parametro) {
    console.log(parametro);

    document.getElementById('tela').value += parametro;
}

function resultado (){
    //eval()
try{
    let expressao = document.getElementById('tela'). value;
    let resultado = eval (expressao);
    document.getElementById ('tela').value = resultado;
}

}