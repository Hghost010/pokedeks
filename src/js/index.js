/*O que fazer?
quando clicarmos no botào de troca de terna temos que
alterar a cor do tema da página para as cores do tema clarol ou do tema esculJo
- objetivo 1 -quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do escuro sejam aplicados e mudar a imagem pra lua 
    - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
    - passo 2 - dar um jeito de pegar no JS 0 elemento HTML corresponde ao body
    - passo 3 -dar um jeito de identificar o clique do usuário no botão de troca de tema
    - passo 4 - adicionar a Classe modo—escuro no
    - passo 5 - trocar a imagem do botão de alterar tema pra lua quando clicar no botão de troca de tema, caso o body já tenha a classe

- objetivo 2 -a Classe pra mudar pro modo Claro e mudar a imagem SOI
    - passo 6 - evirifivcar se o ody tem a classe
    - passo 7 - remover a classe do modo-escuro do body
    - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/

/*- objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do escuro sejam aplicados e mudar a imagem pra lua 
*/

// passo 1

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
//console.log(botaoAlterarTema)

//passo 2

const body = document.querySelector("body")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

//passo 3

botaoAlterarTema.addEventListener("click", () => {
    //passo 6
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        // passo 7
        // body.classList.remove("modo-escuro")
        //passo 8
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        //passo 4
        // body.classList.add("modo-escuro");

        //passo 5
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
});
