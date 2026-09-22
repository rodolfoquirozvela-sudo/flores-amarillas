function abrirPagina() {

    let fecha =
        document.getElementById("fecha").value;


    if (fecha === "27/11/2022") {

        document.getElementById("entrada").style.display = "none";

        document
            .getElementById("pagina")
            .classList
            .remove("oculto");


        crearFlores();
	const musica = document.getElementById("musica");

	musica.volume = 0.5;

	musica.play();

    }

    else {

        document
            .getElementById("error")
            .innerText =
            "La fecha no es correcta 💛";

    }

}


/* =========================
   FLORES QUE SUBEN
========================= */

function crearFlores() {

    const contenedor =
        document.getElementById("flores");


    if (contenedor.children.length > 0) {

        return;

    }


    for (let i = 0; i < 18; i++) {

        const flor =
            document.createElement("div");


        flor.classList.add("flor");


        flor.style.left =
            Math.random() * 100 + "%";


        const tamaño =
            0.6 + Math.random() * 0.8;


        flor.style.transform =
            `scale(${tamaño})`;


        flor.style.animationDuration =
            (7 + Math.random() * 7) + "s";


        flor.style.animationDelay =
            (Math.random() * 8) + "s";


        /* Pétalos */

        for (let i = 0; i < 5; i++) {

            const petalo =
                document.createElement("div");


            petalo.classList.add("petalo");


            petalo.style.transform =
                `rotate(${i * 72}deg)`;


            flor.appendChild(petalo);

        }


        /* Centro */

        const centro =
            document.createElement("div");


        centro.classList.add("centro");


        flor.appendChild(centro);


        contenedor.appendChild(flor);

    }

}


/* =========================
   ABRIR CARTAS
========================= */

function abrirCarta(carta) {

    /*
       Si la carta ya está abierta,
       no hacemos nada.
    */

    if (carta.classList.contains("abierta")) {

        return;

    }


    /*
       Cerramos cualquier otra carta
       que estuviera abierta.
    */

    const cartas =
        document.querySelectorAll(".carta");


    cartas.forEach(function(otraCarta) {

        otraCarta.classList.remove("abierta");

    });


    /*
       Abrimos la carta seleccionada.
    */

    carta.classList.add("abierta");

}