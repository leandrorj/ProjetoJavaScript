var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){//addEventListener escuta evento do browser

    event.preventDefault(); //previne um comportamento padrao e deixa que decida qual medida tomar


    var form = document.querySelector("#form-adiciona");

    // EXTRAINDO INFORMACOES DO PACIENTE DO FORM
    var paciente = obtemPacienteDoFormulario(form);

    //CRIA A 'TR' E 'TD' DO PACIENTE
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);

        return;
    }

    //ADICIONANDO  O PACIENTE NA TABELA
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr); //adiciona elementos na página e dentro de outros elementos da funcao.

    form.reset(); //reset - limpa os campos

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemPacienteDoFormulario(form){

  // utiliza as '{}' para criar objetos
  var paciente = {
    nome: form.nome.value, //.value - pega valor do input por meio da propriedade
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value , form.altura.value)
  }
  return paciente;

}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");//createElement - funcao que cria elementos
    pacienteTr.classList.add("paciente")//classList.add - adiciona uma classe de acordo com o nome

    //ADICIONANDO PACIENTE NA TABELA
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));//coloca como filho na estrutura
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;
  return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}


function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";


  erros.forEach(function(erro){
    var li= document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}











//funcao anonima
// titulo.addEventListener("click", function(){
//     console.log("Olha só posso chamar um funcao anonima.");
// });


//funcao normal
// function mostraMensagem(){
//   console.log("Olá fui clicado!");
// }
