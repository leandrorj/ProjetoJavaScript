var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

  //esmaece na hora da remocao - limpa os dados
  event. target.parentNode.classList.add("fadeOut");


  //define o tempo de remocao da linha da tabela
  setTimeout(function(){
    event.target.parentNode.remove();
  }, 500);

});
