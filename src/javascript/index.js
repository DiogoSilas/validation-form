const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const mensagem = document.getElementById("mensagem")
const msgDeAlerta = document.getElementsByClassName("msg-alert")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(username.value === "" || username.value === null) {
        username.style.borderColor = '#bb0000'
        msgDeAlerta[0].innerHTML = "<a>campo obrigatório</a>"
    } else {
        username.style.borderColor = '#84e684'
        msgDeAlerta[0].innerHTML = ""

    }

    if(email.value ==="" || email.value === null) {
        email.style.borderColor = '#bb0000'
        msgDeAlerta[1].innerHTML = "<a>campo obrigatório</a>"
    } else {
        email.style.borderColor = '#84e684'
        msgDeAlerta[1].innerHTML = ""
    }

    if(telefone.value === "" || telefone.value === null) {
        telefone.style.borderColor = '#bb0000'
        msgDeAlerta[2].innerHTML = "<a>campo obrigatório</a>"
    } else {
        telefone.style.borderColor = '#84e684'
        msgDeAlerta[2].innerHTML = ""
    }

    if(mensagem.value === "" || mensagem.value === null) {
        mensagem.style.borderColor = '#bb0000'
        msgDeAlerta[3].innerHTML = "<a>campo obrigatório</a>"
    } else {
        mensagem.style.borderColor = '#84e684'
        msgDeAlerta[3].innerHTML = ""
    }
})