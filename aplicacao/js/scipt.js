function login() {
    validacaoTec = (document.getElementById('login').value == 'TECNICO' && document.getElementById('senha').value == '123TEC');
    validacaoUSER = (document.getElementById('login').value == 'USER' && document.getElementById('senha').value == '123USER');

    if (validacaoTec || validacaoUSER) {
        if (validacaoTec == true) {
            return window.location.href = 'tec/tecnico.html'
        } else {
            return window.location.href = 'user/user.html'
        }
    } else {
        document.getElementById('login').value = ''
        document.getElementById('senha').value = ''
        document.getElementById('alert').textContent = 'LOGIN OU SENHA INVÁLIDOS, TENTE NOVAMENTE!!!'
    }
}


document.querySelector('#olho').addEventListener('click', () => {

    if (document.getElementById('senha').type == 'password') {


        document.getElementById('olho').src = 'img/olhoAberto.png'
        document.getElementById('senha').type = 'text'


    } else {


        document.getElementById('olho').src = 'img/olhoFechado.png'
        document.getElementById('senha').type = 'password'
    }
})

document.getElementById('btn').addEventListener('click', () => {
    login()
})

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        login()
    }
})
