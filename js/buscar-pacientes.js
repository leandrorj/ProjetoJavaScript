var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){



  //criando a requisicao http tipo get
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // abrindo conexao

  xhr.addEventListener("load", function(){
    var resposta = xhr.responseText;
    var pacientes = JSON.parse(resposta);

    pacientes.forEach(function(paciente){
      adicionaPacienteNaTabela(paciente);
    });

  });

  xhr.send();

});
