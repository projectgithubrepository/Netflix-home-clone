function Popup() {
    document.querySelectorAll(".filme-principal")[0].setAttribute('style', 'filter: blur(3px)')
    document.querySelectorAll(".carrosel-filmes")[0].setAttribute('style', 'filter: blur(3px)')
    
    const popup = document.createElement('div')
    const botao = document.createElement('i')
    botao.classList.add('fa-solid')
    botao.classList.add('fa-circle-xmark')
    botao.classList.add('fa-2xl')

    botao.setAttribute('style', 'top: 20%')
    botao.setAttribute('style', 'margin-right: 20%')
    botao.setAttribute('style', 'text-align: right')

    
    popup.classList.add('popup')
    botao.classList.add('popupBotao')
    document.querySelectorAll("body")[0].appendChild(popup)
    document.querySelectorAll(".popup")[0].appendChild(botao)
    

    botao.addEventListener("click", () => {
        document.querySelectorAll(".filme-principal")[0].setAttribute('style', 'filter: blur(0)')
        document.querySelectorAll(".carrosel-filmes")[0].setAttribute('style', 'filter: blur(0)')
        popup.remove() 
    })
}

function linkTo() {
    window.open('https://www.youtube.com/embed/DZS4xwNwtJs?start=28&autoplay=1', '_blank')
}