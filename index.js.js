const elementoResposta = document.querySelector("#resposta")
const buttonmotivacao = document.querySelector("#buttonmotivacao")
const motivacoes = [
  "Um sonho que você deixa para trás é uma parte do seu futuro que deixa de existir.",
  "No fim, tudo dá certo. Se ainda não deu certo, é porque ainda não chegou ao fim.",
  "Sonhe grande, mas não tenha vergonha de começar pequeno.",
  "A felicidade está na caminhada e não no final.",
  "Aprenda a apreciar as pequenas coisas.",
  "A felicidade é feita de momentos, aprenda a valorizá-los",
  "Cuide dos seus pensamentos, pois eles guiarão a sua vida",
  "Pense apenas em coisas boas.",
  "Beba água!",
  "Você é mais forte do que você imagina.",
  "Acredite em você e vá mais além.",
]

function motivacao() {
    const totalMotivacoes = motivacoes.length
    const numeroAleatorio = Math.floor(Math.random() * totalMotivacoes)
    elementoResposta.innerHTML = motivacoes[numeroAleatorio]
}