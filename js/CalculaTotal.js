//Altera o título da tabela
var titulo = document.querySelector(".titulo");
// titulo.textContent = "Lista de Encomendas";

//Captura os dados de todos os clientes
var clientes = document.querySelectorAll(".cliente");

for (var i=0; i < clientes.length; i++){
    
    /*================================================================
        ROTINA DE CÁLCULO DO VALOR TOTAL POR ENCOMENDA
    ==================================================================*/
    
    //Captura a QUANTIDADE encomendada por cada cliente
    var qtde = clientes[i].querySelector(".info-qtde").textContent;

    //Captura o VALOR UNITÁRIO de cada encomenda
    var unitario = clientes[i].querySelector(".info-valor").textContent;

    //Verifica se a QUANTIDADE recebida é válida
    if (!validaQtde(qtde)){
        clientes[i].querySelector(".info-total").textContent="Quantidade inválida!";
        //Colore a fonte dessa linha na cor vermelha
        clientes[i].style.color = "red";
    }
    else{
        //Verifica se o VALOR UNITÁRIO é válido
        if (!validaUnitario(unitario)){
            clientes[i].querySelector(".info-total").textContent="Valor unitário é inválido!";
            //Colore o fundo dessa linha na cor light coral
            clientes[i].style.backgroundColor = "lightcoral";
        }
        else{
                //Formata o VALOR UNITÁRIO
                clientes[i].querySelector(".info-valor").textContent = formataValor(unitario);

            //Calcula o VALOR TOTAL e exibe na tabela
            clientes[i].querySelector(".info-total").textContent= calculaTotal(qtde,unitario);

        }
    }
}

//Formatação de valor
function formataValor(valor){

    var valor = parseFloat(valor);

    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

//Função para calcular o VALOR TOTAL
function calculaTotal(qtde, unitario){
    var total = 0;

    //Faz o cálculo do valor total
    total = qtde * unitario;

    return formataValor(total);
}

//Função para validar a quantidade
function validaQtde(qtde){
    if((!isNaN(qtde)) && (qtde>0)){
        return true;
    }else{
        return false;
    }    
}

//Função para validar o valor unitário
function validaUnitario(unitario){
    if((!isNaN(unitario)) && (unitario>0)){
        return true;
    }else{
        return false;
    }
}















// Captura todos os clientes que fizeram encomendas
// var clientes = document.querySelectorAll(".cliente");

// Passa por cada cliente, calculando o valor total
// clientes.forEach(function(cliente) {
    // Captura a quantidade encomendada
    // var qtde = parseInt(cliente.querySelector(".info-qtde").textContent);

    // Captura o valor unitário do produto
    // var unitario = parseFloat(cliente.querySelector(".info-valor").textContent);

    // Captura o valor total do produto
    // var total = parseFloat(cliente.querySelector(".info-total").textContent);

    // Valida a quantidade
    // if (qtde < 1 || isNaN(qtde)) {
        // Quantidade NOK, avise o usuário
    //     cliente.querySelector(".info-qtde").textContent = "QTDE INVÁLIDA!";
    //     cliente.querySelector(".info-qtde").style.color = "red";
    // } else {
        // Quantidade OK, pode prosseguir
        // Calcula o valor total da encomenda
    //     cliente.querySelector(".info-total").textContent = calculaTotal(qtde, unitario);
    // }

    // Valida a quantidade
    // if (qtde < 1 || isNaN(unitario)) {
        // Quantidade NOK, avise o usuário
    //     cliente.querySelector(".info-valor").textContent = "INVÁLIDO!";
    //     cliente.style.backgroundColor = "red";
    // } else {
        // Quantidade OK, pode prosseguir
        // Calcula o valor total da encomenda
    //     cliente.querySelector(".info-total").textContent = calculaTotal(qtde, unitario);
    // }

//     if(total < 1 || isNaN(qtde)){
//         cliente.querySelector(".info-total").textContent = "-";
//         cliente.querySelector(".info-valor").textContent = "-";
//     }

//     if(total < 1 || isNaN(unitario)){
//         cliente.querySelector(".info-total").textContent = "-";
//         cliente.querySelector(".info-qtde").textContent = "-";
//     }
// });

// Função para calcular o valor total da encomenda
// function calculaTotal(qtde, unitario) {
//     var total = 0;
//     total = qtde * unitario;
//     return formataValor(total);
// }

// function validaQtde(qtde){
//     if(!isNaN(qtde) && qtde > 0) {
//         return true
//     } else{
//         return false;
//     }
// }

// function validaUnitario(unitario){
//     if(!isNaN(unitario) && unitario > 0){
//         return true;
//     } else{
//         return false;
//     }
// }

// function formataValor(valor){
//     var valor = valor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});

//     return valor;
// }

// function valida(clientes){
//Verifica se a QUANTIDADE recebida é válida
// if (!validaQtde(qtde)){
//     clientes.querySelector(".info-total").textContent="Quantidade inválida!";
//     clientes.classList.add(".info-invalida");
    

    // return abrir(qtde);
// } 

//Verifica se o VALOR UNITÁRIO é válido
// if (!validaUnitario(unitario)){
//     clientes.querySelector(".info-total").textContent="Valor unitário é inválido!";
// }

//Formata o VALOR UNITÁRIO
// var unitFormat = formataValor(parseFloat(unitario));
// clientes.querySelector(".info-valor").textContent = unitFormat;
// }

