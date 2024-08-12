// document.querySelector('.inputCidade')
// document.querySelector('.btnBusca')
// document.querySelector('.cidade')
// document.querySelector('.temp')
// document.querySelector('.textPreview')
const key = '01c917471ea8815aa45e7f35e499ffe3'

document.querySelector('.btnBusca').addEventListener('click',  async ()=>{


    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector('.inputCidade').value}&appid=${key}&lang=pt_br&units=metric`)
    .then(resposta => resposta.json())

    document.querySelector('.cidade').textContent = `Tempo em ${dados.name}`
    document.querySelector('.temp').textContent = `Esta com ${dados.main.temp.toFixed(0)}°C`
    document.querySelector('.textPreview').textContent = `${dados.weather[0].description}`
    document.querySelector('.image').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.image').style.display = 'block'


    console.log(dados)
})