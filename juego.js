// ---------- PAGINA JUEGO -----------

// logo del navegador
let canvas = document.querySelector("canvas");
let lienzo = canvas.getContext("2d");

lienzo.fillStyle="#3F6797"; 
lienzo.fillRect(20,10,60,35);
lienzo.fillStyle="lightblue"; 
lienzo.fillRect(25,15,50,25);

lienzo.strokeStyle="#3F6797";
lienzo.fillStyle="#3F6797"; 
lienzo.beginPath();
lienzo.moveTo(30,55);
lienzo.lineTo(10,75);
lienzo.lineTo(90,75);
lienzo.lineTo(70,55);
lienzo.closePath();
lienzo.stroke();
lienzo.fill();

lienzo.strokeStyle="lightblue";
lienzo.fillStyle="lightblue"; 
lienzo.beginPath();
lienzo.moveTo(70,60);
lienzo.lineTo(30,60);
lienzo.lineTo(20,70);
lienzo.lineTo(80,70);
lienzo.closePath();
lienzo.stroke();
lienzo.fill();

// rompecabezas:
// la funcionDragstart en este caso aplica a todas las imagenes
const funcionDragstart=(event)=>{
    event.dataTransfer.setData("Text",event.target.src);
    console.log(event.dataTransfer.getData("Text"));
}
// PREGUNTA: por que tambien funciona si no se incluye la funcionDragstart?
// Es decir, si no se incluye el dataTransfer.setData

// las siguientes lineas son para borrar la imagen una vez termine el drag
let rompe1Imagen = document.getElementById("rompe1Imagen");
const funcionDragend1=(event)=>{
    rompe1Imagen.style.visibility="hidden";
}

let rompe2Imagen = document.getElementById("rompe2Imagen");
const funcionDragend2=(event)=>{
    rompe2Imagen.style.visibility="hidden";
}

let rompe3Imagen = document.getElementById("rompe3Imagen");
const funcionDragend3=(event)=>{
    rompe3Imagen.style.visibility="hidden";
}

// contenedores de destino:

const funcionDragover=(event)=>{
    event.preventDefault();
}
// notese aqui que la funcionDragover aplica a todos los contenedores

let juegoContenedor1 = document.getElementById("juegoContenedor1");
const funcionDrop=(event)=>{
    let infoImagenJuego = event.dataTransfer.getData("Text");
    juegoContenedor1.innerHTML = `<img src="${infoImagenJuego}" class="imagenRompecabeza"/>`;
    event.dataTransfer.clearData("Text");
}

let juegoContenedor2 = document.getElementById("juegoContenedor2");
const funcionDrop2=(event)=>{
    let infoImagenJuego = event.dataTransfer.getData("Text");
    juegoContenedor2.innerHTML = `<img src="${infoImagenJuego}" class="imagenRompecabeza"/>`;
    event.dataTransfer.clearData("Text");
}

let juegoContenedor3 = document.getElementById("juegoContenedor3");
const funcionDrop3=(event)=>{
    let infoImagenJuego = event.dataTransfer.getData("Text");
    juegoContenedor3.innerHTML = `<img src="${infoImagenJuego}" class="imagenRompecabeza"/>`;
    event.dataTransfer.clearData("Text");
}

