document.querySelector("#btn").addEventListener('click', () => {

    if (document.querySelector('#valorReal_').value == '') {
        document.querySelector('#results').textContent = 'Nenhum valor inserido'
    } else {
        dolar = document.querySelector('#valorReal_').value / 4.97

        document.querySelector('#results').textContent = `US$: ${dolar.toFixed(2)}`
    }
    
})