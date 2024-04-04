function adicionarLinha() {
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

    form.reset();
}