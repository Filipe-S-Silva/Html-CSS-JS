document.getElementById('btn').addEventListener('click', function () {

    login = document.getElementById('login').value
    senha = document.getElementById('senha').value

    if (login == "Filipe" && senha == "123") {
        window.location.href = "../home.html";
    } else {
        document.getElementById('login').value = "";
        document.getElementById('senha').value = "";
        alert("ACESSO NEGADO\nTENTE NOVAMENTE");
    }
})