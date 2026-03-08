function enviarPedido() {

    let numero = "5517997478775";

    let nomeCliente = document.getElementById("nomeCliente").value;

    if(nomeCliente.trim() === ""){
        alert("Por favor, digite seu nome!");
        return;
    }

    let inputs = document.querySelectorAll(".produtoInput");

    let mensagem = `Olá, meu nome é ${nomeCliente} e quero pedir:\n\n`;

    inputs.forEach(input => {
        let quantidade = input.value;
        let nome = input.dataset.nome;

        if (quantidade > 0) {
            mensagem += `- ${quantidade} ${nome}\n`;
        }
    });

    if (mensagem === `Olá, meu nome é ${nomeCliente} e quero pedir:\n\n`) {
        alert("Selecione pelo menos um produto!");
        return;
    }

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

document.getElementById("btnEnviar")
        .addEventListener("click", enviarPedido);