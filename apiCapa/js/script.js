const key = 'fe01372a';

function api() {
    name_ = document.getElementById('nameMovie').value

    if (name_ == '') {
        alert('Preencher campo');
        return;
    }

    fetch(`https://www.omdbapi.com/?s=${name_}&apikey=${key}`)
        .then(result => result.json())
        .then(json => {
            const lista = document.querySelector('.results')
            lista.innerHTML = "";

            if (json.Response == 'False') {
                alert('Nenhum filme encontrado');
                return;
            }

            json.Search.forEach(element => {

                item = document.createElement('div')
                item.classList.add('movies')

                item.innerHTML = `<img src="${element.Poster}"> <h2>${element.Title}</h2>`

                lista.appendChild(item)
            })

            document.querySelector('body').style = "height: 100%";
        })

}

document.querySelector("#btn").addEventListener('click', () => {
    api()
})

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        api()
    }
})