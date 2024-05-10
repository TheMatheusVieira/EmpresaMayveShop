var botaoAdicionar = document.querySelector("#adicionar-encomenda");

botaoAdicionar.addEventListener("click", function(event){

    event.preventDefault();

    //Captura o formulário da página
    var form = document.querySelector("#form-adiciona");

    //Captura os dados da nova encomenda
    var encomenda = obtemEncomenda(form);

    //Valida se a encomenda pode ser inserida
    if(validaEncomenda(encomenda).length > 0) {
        console.log(validaEncomenda(encomenda));
    } else {
        //Insere a nova encomenda na tabela
        addEncomenda(encomenda);

        //Limpa o formulário
        form.reset();
    }
  
});

//Função para capturar os dados da nova encomenda
function obtemEncomenda(dadosForm){

    var encomenda = {
        nome: dadosForm.nome.value,
        qtde: dadosForm.qtde.value,
        produto: dadosForm.produto.value,
        unitario: dadosForm.unitario.value,
    }

    return encomenda;
}

//Função para adicionar a nova encomenda na tabela
function addEncomenda(novaEncomenda){

    var tabela = document.querySelector("#tabela-clientes");

    tabela.appendChild(montaTR(novaEncomenda));
}

//Monta uma coluna nova
function montaTD(dado) {

    var td = document.createElement("td");
    td.textContent = dado;

    return td;
}

//Monta uma nova TR
function montaTR(novaEncomenda){

    var tr = document.createElement("tr");

    tr.appendChild(montaTD(novaEncomenda.nome));
    tr.appendChild(montaTD(novaEncomenda.produto));
    tr.appendChild(montaTD(novaEncomenda.qtde));
    tr.appendChild(montaTD(formataValor(parseFloat(novaEncomenda.unitario))));
    tr.appendChild(montaTD(calculaTotal(novaEncomenda.qtde, novaEncomenda.unitario)));

    return tr;
}

//Função para validação da quantidade e do unitário
function validaEncomenda(encomenda){

    var erros =[];

    //Verifica se o nome foi informado
    if(encomenda.nome=="") {
        erros.push("O nome não pode ser vazio!");
    }

    //Verifica se a quantidade é maior que zero e um número
    if(encomenda.qtde <= 0 || isNaN(encomenda.qtde)){
        erros.push("A quantidade deve ser numérica e maior que 0.");
    }

    //Verifica se o valor unitário é maior que zero e um número
    if(encomenda.unitario <=0 || isNaN(encomenda.unitario)){
        erros.push("O valor unitário deve ser numérico e maior que 0.");
    }

    return erros;
}

//Função para exibir os erros de preenchimento do formulário
function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    
    //Limpa a UL para exibir os erros
    ul.innerHTML = "";
    
    erros.forEach(function(msg){
    var li = document.createElement("li");
    li.textContent = msg;
    ul.appendChild(li);
    })
}










// //Valida os dados na nova encomenda
// var validacao = validaEncomenda(encomenda);

// //Valida se a encomenda pode ser inserida
// if(validacao.length > 0){
// //Erro nos dados da encomenda, informa o usuário
// exibeMensagensErro(validacao);
// return;
// } else {
// //Insere a nova encomenda na tabela
// addEncomenda(encomenda);

//   //Limpa o formulário
// form.reset();

//   //Limpa a UL de erros
// document.querySelector("#mensagens-erro").innerHTML="";  
// }

// var errquant = document.querySelector(!isNaN(qtde));
// var errpreco = document.querySelector(!isNaN(valorUnit));

// function exibeErro(){
// erro.addEventListener("click", function(event){
// event.preventDefault();
// console.log("Deu ruim!");
// });
// }

// 

// if (qtde < 1 || isNaN(qtde)) {
//   // Quantidade NOK, avise o usuário
//    errquant.querySelector("qtde").textContent = "QTDE INVÁLIDA!";
// }


//elemento.addEventListener("botaoaddprod", ações-a-efetuar);

// var botaoAdicionar = document.querySelector(".botaoaddprod");

// botaoAdicionar.addEventListener("click", function(event){
//     event.preventDefault();
//     console.log("O botão foi clicado!");
// });


