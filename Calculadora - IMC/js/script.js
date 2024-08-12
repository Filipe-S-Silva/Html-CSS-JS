document.querySelector('#btn').addEventListener('click', () => {

    if (document.querySelector('#kg').value == '' || document.querySelector('#m').value == '') {
        alert('Não foi possivel calcular, algum dos campos não preenchido')   
    } else {

        imc = Number(document.querySelector('#kg').value) / (Number(document.querySelector('#m').value) ** 2)
    
        if (imc < 18.5) {
            document.querySelector('#results').textContent = 'Você está magro'
        } else if (imc < 25) {
            document.querySelector('#results').textContent = 'Você está no peso ideal'
        } else if (imc < 30) {
            document.querySelector('#results').textContent = 'Você está acima do peso'
        } else {
            document.querySelector('#results').textContent = 'Você está obeso'
        }
    
        document.querySelector('#imc').textContent = `${imc.toFixed(2)}`
        
    }
})