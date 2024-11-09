const botao = document.querySelector('#theme')
const corpo = document.querySelector('#body')
const socials = document.querySelectorAll('#social')
const link = document.querySelector('.link')

botao.addEventListener("click", () => {
    corpo.classList.toggle('active')
    botao.classList.toggle('active')
    link.classList.toggle('active')
    for (let cor = 0; cor < socials.length; cor++){
        socials[cor].classList.toggle('active')
    }
})