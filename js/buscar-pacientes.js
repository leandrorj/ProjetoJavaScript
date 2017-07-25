var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){



  //criando a requisicao http tipo get
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // abrindo conexao

  xhr.addEventListener("load", function(){
    erroAjax.classList.remove("invisivel");
    if(xhr.status == 200){
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente){
        adicionaPacienteNaTabela(paciente);

      });
    } else{
        console.log(xhr.status);
        console.log(xhr.responseText);
        var erroAjax = document.querySelector("#erro-ajax");

    }

  });

  xhr.send();

});
