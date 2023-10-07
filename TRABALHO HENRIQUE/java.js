function fazerRequisicao() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4 && xhr.status === 200) {  
            var data = JSON.parse(xhr.responseText);
            exibirResultado(data);
        }
    };

    xhr.open("GET", "http://reserva.laboratorio.app.br:10100/produtos", true);
    xhr.send();
}

function exibirResultado(data) {
    var tabela = document.getElementById("resultadoTabela");
    tabela.innerHTML = "";

    data.forEach(function (item) {
        var row = tabela.insertRow();
        var cell1 = row.insertCell(0);  
        cell1.innerHTML = item.propertyName;

    });
}

function cadastroProduto() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {  
        if (xhr.readyState === 4 && xhr.status === 200) {  
            document.getElementById("resposta").value = xhr.responseText;
            fazerRequisicao();
        }
    };
    
}

