// PAGINA HISTORIA


// Botones de reproducccion de video

let video=document.querySelector("video");

const funcionPlay=()=>{
    video.play()
}

const funcionPausa=()=>{
    video.pause()
}

// Duracion de video
/*
let duracionVideo=document.getElementById("duracionVideo");
duracionVideo.textContent=video.duration;
console.log(video.duration);

aqui el tiempo del video me da un NaN: el video no se ha cargado todavia
sin embargo, para que esta informacion aparezca cuando se carga el video, hay otras alternativas
*/

const funcionDuracion=()=>{
    let duracionVideo=document.getElementById("duracionVideo");
    duracionVideo.textContent=video.duration.toFixed(2);
    // al agregar .toFixed(2) redondeamos el numero a dos decimales
}
setTimeout(funcionDuracion,200);

// Para ver todos los metodos y propiedades de una etiqueta: console.dir
console.dir(video);