
  let nome = prompt("Qual é o seu nome?");
  let idade = prompt("Qual é a sua idade?");

  idade = Number(idade);

  if (idade < 12) {
    document.getElementById("site-content").classList.add("blur");
    console.log("Conteúdo bloqueado para menores de 12 anos.");
  } else {
    console.log("Bem-vindo, " + nome + "!");
  }