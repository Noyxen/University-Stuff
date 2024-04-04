function adicionarLinha()   {
    var form = document.getElementById('formDados');
    var nome = form.nome.value;
    var peso = parseFloat(form.peso.value);
    var altura = parseFloat(form.altura.value);
    var gordura = parseFloat(form.gordura.value);

    var imc = peso / (altura * altura);
    imc = imc.toFixed(2);

    var tabela = document.getElementById('corpoTabela');
    var novaLinha = tabela.insertRow();
    var celulaNome = novaLinha.insertCell(0);
    var celulaPeso = novaLinha.insertCell(1);
    var celulaAltura = novaLinha.insertCell(2);
    var celulaGordura = novaLinha.insertCell(3);
    var celulaIMC = novaLinha.insertCell(4);

    celulaNome.innerHTML = nome;
    celulaPeso.innerHTML = peso;
    celulaAltura.innerHTML = altura;
    celulaGordura.innerHTML = gordura + "%";
    celulaIMC.innerHTML = imc;
}
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
      }
    };
    xhttp.open("GET", "pacientes.xml", true);
    xhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Nome|</th><th>Peso|</th><tr><th>Altura|</th><tr><th>% de Gordura|</th><th>IMC|</th>";
    var x = xmlDoc.getElementsByTagName("Ficha");
    for (i = 0; i <x.length; i++) {
      table += "<tr><td>" +     
      x[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue +
      "</td></tr>";
      table += "<tr><td>" + 
      x[i].getElementsByTagName("peso")[0].childNodes[0].nodeValue +
      "</td></tr>";
      table += "<tr><td>" + 
      x[i].getElementsByTagName("altura")[0].childNodes[0].nodeValue +
      "</td></tr>";
      table += "<tr><td>" + 
      x[i].getElementsByTagName("gordura")[0].childNodes[0].nodeValue +
      "</td></tr>";
      table += "<tr><td>" + 
      x[i].getElementsByTagName("imc")[0].childNodes[0].nodeValue +
      "</td></tr>";

    }
    document.getElementById("tabela").innerHTML = table;
  }