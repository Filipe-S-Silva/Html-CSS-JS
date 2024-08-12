setInterval(()=>{
    hr = new Date().getHours()
    min = new Date().getMinutes()
    s = new Date().getSeconds()

    if(hr < 10){
        hr = '0' + hr
    }

    if(min < 10){
        min = '0' + min
    }

    if(s < 10){
        s = '0' + s
    }

    document.querySelector('#hours').textContent = hr;
    document.querySelector('#minutes').textContent = min;
    document.querySelector('#seconds').textContent = s;
})