//Códigos para o Hot site Rubem Braga


    //cria um novo objeto da classe date

const tempo = new Date()
const txtData = tempo.getFullYear() + ' - hora: ' + tempo.getHours() + ' minuto: ' + tempo.getMinutes()

//elementos DOM
const spanData = document.getElementById('data')
const btHamburger = document.getElementById('btHamburger')
const navPhone = document.getElementById('navPhone')
const FecharPhone = document.getElementById('FecharPhone')

//insere txtData dentro do id "data"

spanData.innerText = txtData

//Ações do usuario (eventos)

//Ao clicar no id "btFechar"

btHamburger.addEventListener('click', function(){
    navPhone.style.display = 'block'
})

FecharPhone.addEventListener('click', function(){
    navPhone.style.display = 'none'
})