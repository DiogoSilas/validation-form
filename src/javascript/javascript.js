// ao clicar no botão enviar, as bordas dos inputs ficaram verdes;
// se ao clicar no botão enviar e estiverem vazios, aparecerá uma mensagem abaixo do input "campo obrigatório" e as bordas do input ficaram com a cor vermelha e o texto abaixo idem;

/*
1 - Pegar o botão enviar;
2 - pegar todos os inputs;
3 - saber se o input está vazio ou com conteudo;
4 - Se estiver texto: tornar as bordas do input verdes;
5 - se estiver vacio: tornar as bordas do input vermelhas e mostrar um texto abaixo;
*/

//1 - Pegar o botão enviar;
let btnEnviar = document.getElementById("btn-enviar");
console.log(btnEnviar)
let inputsForm = document.querySelectorAll("input");
console.log(inputsForm);


btnEnviar.addEventListener('click', () => {
    console.log(btnEnviar)
});




