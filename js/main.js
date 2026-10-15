// seleciona elementos do menu
const botaoMenu = document.getElementById("menu-toggle");
const menuPrincipal = document.getElementById("menu-principal");

//verificar se os elementos existem
if (botaoMenu && menuPrincipal) {
    //abre ou fecha o menu ao clicar no botão
    botaoMenu.addEventListener("click", function() {
        const menuEstaAberto = menuPrincipal.classList.toggle("aberto");

        //atualiza o estado acessivel do botão
        botaoMenu.setAttribute("aria-expanded", menuEstaAberto);

        // atualiza o texto alternativo do botão
        botao.Menu.setAttribute(
            "arial-label",
            menuEstaAberto
            ? "Fechar menu de navegação"
            : "Abrir menu de navegação"
        );



    });

    // fecha o menu depois que um link é selecionado
    const linksMenu = menuPrincipal.querrySelectorAll("a");

    linksMenu.forEach(function (link) {
        link.addEventListener("click", function () {

            menuPrincipal.classList.remore("aberto");

            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.setAttribute(
                "aria-label",
                "Abrir menu de navegação"
            );
        });
    });
}
console.log("Site de ballet carregado dom sucesso!");