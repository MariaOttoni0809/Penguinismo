/* =========================================
   PENGUINISMO
   SCRIPT PRINCIPAL
========================================= */


/* =========================================
   MENU MOBILE
========================================= */

const menuMobile = document.getElementById("menuMobile");
const menu = document.querySelector(".menu");


if (menuMobile && menu) {

    menuMobile.addEventListener("click", () => {

        menu.classList.toggle("ativo");

    });


    /* Fecha o menu quando clicar em um link */

    const linksMenu = menu.querySelectorAll("a");

    linksMenu.forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("ativo");

        });

    });

}


/* =========================================
   BOTÃO — NOSSA HISTÓRIA
========================================= */

const botaoHistoria = document.getElementById("botaoHistoria");


if (botaoHistoria) {

    botaoHistoria.addEventListener("click", function(event) {

        event.preventDefault();

        const historia =
            document.getElementById("historia");

        if (historia) {

            historia.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


/* =========================================
   BOTÃO — ENTRAR NA COMUNIDADE
========================================= */

const botaoComunidade =
    document.getElementById("botaoComunidade");


if (botaoComunidade) {

    botaoComunidade.addEventListener("click", function(event) {

        event.preventDefault();

        alert(
            "O espaço da comunidade está sendo construído! 🐧\n\nEm breve você poderá fazer parte do Penguinismo."
        );

    });

}


/* =========================================
   ANIMAÇÃO DOS ELEMENTOS
========================================= */

const elementosAnimados =
    document.querySelectorAll(
        ".card, .recurso, .mensagem, .historia-item"
    );


const observador =
    new IntersectionObserver(

        (elementos) => {

            elementos.forEach(elemento => {

                if (elemento.isIntersecting) {

                    elemento.target.classList.add("aparecer");

                    observador.unobserve(elemento.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


elementosAnimados.forEach(elemento => {

    observador.observe(elemento);

});


/* =========================================
   ROLAGEM SUAVE DOS LINKS
========================================= */

const linksInternos =
    document.querySelectorAll(
        'a[href^="#"]'
    );


linksInternos.forEach(link => {

    link.addEventListener("click", function(event) {

        const destino =
            document.querySelector(
                this.getAttribute("href")
            );


        if (destino) {

            event.preventDefault();

            destino.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


/* =========================================
   FECHAR MENU AO CLICAR FORA
========================================= */

document.addEventListener("click", function(event) {

    if (!menu || !menuMobile) return;


    const clicouNoMenu =
        menu.contains(event.target);


    const clicouNoBotao =
        menuMobile.contains(event.target);


    if (
        !clicouNoMenu &&
        !clicouNoBotao
    ) {

        menu.classList.remove("ativo");

    }

});


/* =========================================
   ANIMAÇÃO DO PINGUIM
========================================= */

const pinguim =
    document.getElementById(
        "pinguimSemFundo"
    );


if (pinguim) {

    pinguim.addEventListener(
        "mouseenter",
        () => {

            pinguim.style.transform =
                "translateY(-8px) rotate(-2deg)";

            pinguim.style.transition =
                "transform 0.3s ease";

        }
    );


    pinguim.addEventListener(
        "mouseleave",
        () => {

            pinguim.style.transform =
                "translateY(0) rotate(0deg)";

        }
    );

}


/* =========================================
   CONSOLE
========================================= */

console.log(
    "🐧 Penguinismo carregado com sucesso!"
);