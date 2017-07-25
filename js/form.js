var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){//addEventListener escuta evento do browser

    event.preventDefault(); //previne um comportamento padrao e deixa que decida qual medida tomar

    var form = document.querySelector("#form-adiciona");

    // EXTRAINDO INFORMACOES DO PACIENTE DO FORM
    var paciente = obtemPacienteDoFormulario(form);

    //CRIA A 'TR' E 'TD' DO PACIENTE
    var pacienteTr = montaTr(paciente);

    //ADICIONANDO  O PACIENTE NA TABELA
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr); //adiciona elementos na página e dentro de outros elementos da funcao.

    form.reset(); //reset - limpa os campos

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
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}



//funcao anonima
// titulo.addEventListener("click", function(){
//     console.log("Olha só posso chamar um funcao anonima.");
// });


//funcao normal
// function mostraMensagem(){
//   console.log("Olá fui clicado!");
// }
