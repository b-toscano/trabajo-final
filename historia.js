// ---------- PAGINA HISTORIA ----------

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

// Botones de reproducccion de video

let video = document.querySelector("video");

const funcionPlay=()=>{
    video.play()
    console.log('play')
}

const funcionPausa=()=>{
    video.pause()
    console.log('pausa')
}


// Duracion de video
/*
let duracionVideo=document.getElementById("duracionVideo");
duracionVideo.textContent=video.duration;
console.log(video.duration);

aqui el tiempo del video me da un NaN: el video no se ha cargado todavia
sin embargo, para que esta informacion aparezca cuando se carga el video, 
hay otras alternativas, como la siguiente:
*/

const funcionDuracion=()=>{
    let duracionVideo=document.getElementById("duracionVideo");
    duracionVideo.textContent=video.duration.toFixed(2);
    // al agregar .toFixed(2) redondeamos el numero a dos decimales
}
setTimeout(funcionDuracion,200);

// Para ver todos los metodos y propiedades de una etiqueta: console.dir
console.dir(video);


