function conversor(valor) {
    //converte a string em array ex: 1,1,0,1
    var arrayValor = String(valor).split('');

    //inverte as posições do array ex: 1,0,1,1
    var arrayValorReverse = arrayValor.reverse();

    //varre o array em cada posição é feito:
    // 1: exponenciação ex: pos 0 - 2⁰ = 1 | pos 1 - 2¹ = 2 | pos 2 - 2² = 4 etc... 
    // 2: multiplicação dos valores do binario ex: 1*1 = 1  | 2x0 = 0 | 4x1= 4 etc... 
    var resultado = arrayValorReverse.map((val, pos) => {
        return val * Math.pow(2, pos);
    });

    return soma(resultado);
}
function soma(valor) {
    var soma = valor.reduce(function (acumulador, valorAtual, index, array) {
        return acumulador + valorAtual;
    });

    return soma;
}
function validacao(valor){
    //verificar se a entrada é diferente de 0 e 1
    var arrayValor = String(valor).split('');
    var result = arrayValor.map((a)=>{
        if(a != 1 && a != 0){
            return false
        }else{
            return true
        }
    });

    return result;
}
function index(){
    document.querySelector(".result p").innerHTML = "";

    var valorConvertido;
    var valorBinario = document.getElementById("valor").value;
    var vali = validacao(valorBinario).indexOf(false);

    if(vali >= 0){
        document.querySelector(".result p").append("insira um valor valido - binario");
    }else{
        valorConvertido = conversor(String(valorBinario));
        document.querySelector(".result p").append(valorConvertido);
    }
}