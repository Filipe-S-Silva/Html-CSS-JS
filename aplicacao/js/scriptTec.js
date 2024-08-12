//buttons

const btnUser = document.getElementById('userBtn')
const btnStatus = document.getElementById('statusBtn')
const btnGroups = document.getElementById('groupsBtn')
const btnSettings = document.getElementById('settingsBtn')
const btnQuestion = document.getElementById('questionBtn')
const btnLogo = document.getElementById('logoBtn')

const btns = [btnUser, btnStatus, btnGroups, btnSettings, btnQuestion]

//btns imgs

const userImg = document.getElementById('imgUser')
const statusImg = document.getElementById('imgStatus')
const groupsImg = document.getElementById('imgGroups')
const settingsImg = document.getElementById('imgSettings')
const questionImg = document.getElementById('imgQuestion')

//sections 

const userSection = document.getElementById('user')
const statusSection = document.getElementById('status')
const sections = [userSection, statusSection]

btnUser.addEventListener('click', ()=>{
    
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
    
    userImg.src = "../img/navagation/userOn.png"
    statusImg.src = '../img/navagation/cursosOff.png'

})

btnStatus.addEventListener('click', ()=>{
    
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
    statusImg.src = '../img/navagation/cursosOn.png'
})

btnGroups.addEventListener('click', ()=>{
    alert('groups')
})

btnSettings.addEventListener('click', ()=>{
    alert('settings')
})

btnQuestion.addEventListener('click', ()=>{
    alert('question')
})

btnLogo.addEventListener('click', ()=> {
    window.location.href = '../index.html'
})