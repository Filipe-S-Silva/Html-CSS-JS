document.querySelector('#btn').addEventListener('click', ()=>{

    if(document.querySelector('body').className == 'light'){

        document.querySelector('body').className = 'dark'
        document.querySelector('#btn').className = 'btnDark'
        document.querySelector("#back").className = 'backDark'
        
    } else {
        
        document.querySelector('body').className = 'light'
        document.querySelector('#btn').className = 'btnLight'
        document.querySelector("#back").className = 'backLight'

        
    }

})