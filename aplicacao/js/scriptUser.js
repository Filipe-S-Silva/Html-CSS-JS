//buttons

const btnUser = document.getElementById('userBtn')
const btnStatus = document.getElementById('statusBtn')
const btnCursos = document.getElementById('cursosBtn')
const btnSettings = document.getElementById('settingsBtn')
const btnQuestion = document.getElementById('questionBtn')
const btnLogo = document.getElementById('logoBtn')

const btns = [btnUser, btnStatus, btnCursos, btnSettings, btnQuestion, btnLogo]

//btns imgs

const userImg = document.getElementById('imgUser')
const statusImg = document.getElementById('imgStatus')
const cursosImg = document.getElementById('imgCursos')
const settingsImg = document.getElementById('imgSettings')
const questionImg = document.getElementById('imgQuestion')

const imgs = [userImg, statusImg, cursosImg, settingsImg, questionImg]

//sections 

const userSection = document.getElementById('user')
const statusSection = document.getElementById('status')
const cursosSection = document.getElementById('cursos')

const sections = [userSection, statusSection, cursosSection]

//validations names

const names = ['user', 'status', 'cursos', 'settings', 'question']

//actions
btnUser.addEventListener('click', () => {

    for (const i of btns) {
        if (i == btnUser) {
            i.className = 'on'
        } else {
            i.className = 'off'
        }
    }

    for (const i of sections) {
        if (i == userSection) {
            i.style = 'display: flex'
        } else {
            i.style = 'display: none'
        }
    }

    // for (const i of imgs) {

    //     if (!i == userImg) {

    //         for (const j of names) {
    //             if (!j == 'user') {

    //                 i.src = `../img/navagation/${j}Off.png`

    //             }
    //         }           

    //     } else {
    //         i.src = '../img/navagation/userOn.png'
    //     }

    // }

    // for (const i of imgs) {

    //     for (const j of names) {
    //         if (i == userImg && j == user) {
    //             i.src = `../img/navagation/${j}On.png`
    //         } else{
    //             i.src = `../img/navagation/${j}Off.png`
    //         }
    //     }
    // }

    userImg.src = "../img/navagation/userOn.png"
    statusImg.src = '../img/navagation/statusOff.png'
    cursosImg.src = '../img/navagation/cursosOff.png'


})

btnStatus.addEventListener('click', () => {

    for (const i of btns) {
        if (i == btnStatus) {
            i.className = 'on'
        } else {
            i.className = 'off'
        }
    }

    for (const i of sections) {
        if (i == statusSection) {
            i.style = 'display: flex'
        } else {
            i.style = 'display: none'
        }
    }


    userImg.src = "../img/navagation/userOff.png"
    statusImg.src = '../img/navagation/statusOn.png'
    cursosImg.src = '../img/navagation/cursosOff.png'

})

btnCursos.addEventListener('click', () => {

    for (const i of btns) {
        if (i == btnCursos) {
            i.className = 'on'
        } else {
            i.className = 'off'
        }
    }

    for (const i of sections) {
        if (i == cursosSection) {
            i.style = 'display: flex'
        } else {
            i.style = 'display: none'
        }
    }


    userImg.src = "../img/navagation/userOff.png"
    statusImg.src = '../img/navagation/statusOff.png'
    cursosImg.src = '../img/navagation/cursosOn.png'


})

btnSettings.addEventListener('click', () => {
    alert('settings')
})

btnQuestion.addEventListener('click', () => {
    alert('question')
})

btnLogo.addEventListener('click', () => {
    window.location.href = '../index.html'
})