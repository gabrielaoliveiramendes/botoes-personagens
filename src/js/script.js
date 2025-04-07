const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem"); //array com 5 elementos

botoes.forEach((botao, indice) => { //indice = posição do botão clicado
    botao.addEventListener("click", () => {
        // console.log("clicou no botao", botao);
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        // console.log(botaoSelecionado);
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");


        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");
        // console.log(personagens[0]); //personagem na posição 0 da array personagens
        // console.log(indice); //posição do botao clicado na array personagens
        // console.log(personagens[indice]);
        personagens[indice].classList.add("selecionado");

    })
})

