document.querySelector('.btn').addEventListener('click', function formula() {

    const a = document.getElementById('valorA').value;
    const b = document.getElementById('valorB').value;
    const c = document.getElementById('valorC').value;
    let comentario = "";

    
    
    const delta = ((b ** 2) - (4 * a * c));
    let x1 = (- b + (Math.sqrt(delta))) / (2 * a);
    let x2 = (- b - (Math.sqrt(delta))) / (2 * a);
    
    if (delta == 0) {
        comentario = "Com o delta igual a zero, os resultados serão iguais"
    } else if (delta < 0) {
        comentario = "A equação não possui valores reais, pois o delta é menor que zero"
        x1 = ""
        x2 = ""
    } else {
        comentario = "A equação padrão"
    }
    
    if (a == "" || b == "" || c == "") {
        alert("Valores para calculo incompletos");
    } else {
        document.getElementById('delta').innerHTML = delta
        document.getElementById('X1').innerHTML = x1
        document.getElementById('X2').innerHTML = x2
        document.getElementById('comentario').innerHTML = comentario
    }
    
})