import { ListaProductos } from "./db.js";

function MostrarProductos(lista) {
    let Contenedor = document.querySelector(".contenedor")
    Contenedor.innerHTML = ""
    lista.forEach(i => {
        let nuevodiv = document.createElement("div")
        nuevodiv.classList.add("Tarjeta")
        nuevodiv.innerHTML = `
            <div>
                <div>
                    <h1>${i.nombre}</h1>
                    <p>${i.precio}</p>
                </div>
                <img src="${i.img}" height="80px">
            </div>
            <p>${i.descripción}</p>
            <div>
                <p>${i.stock}</p>
                <button onclick="Favoritos()">❤️</button>
            </div>
        `
        Contenedor.appendChild(nuevodiv)
    });
}

MostrarProductos(ListaProductos)