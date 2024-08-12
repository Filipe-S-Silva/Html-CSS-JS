document.querySelector('.btn').addEventListener('click', function () {

    password = document.getElementById('password').value
    passwordCheckUser = document.getElementById('passwordConfirm').value


    do {

        if (password_ != passwordCheckUser) {
            alert("Senhas diferentes");
            password = '';
            passwordCheckUser = '';
        } else {
            // link para banco para mandar os dados (colocar)

            //imitação de banco
            const user = {
                nome: document.getElementById('name').value,
                telephone: document.getElementById('telephone').value,
                email: document.getElementById('email').value,
                login: document.getElementById('login').value,
                password: password,
            }
            // comando push para banco
        }

    } while (password_ != passwordCheckUser);


})