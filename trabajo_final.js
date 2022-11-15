
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

// logo del footer
let canvasFooter = document.getElementById("canvasFooter");
let lienzoFooter = canvasFooter.getContext("2d");

lienzoFooter.fillStyle="#3F6797"; 
lienzoFooter.fillRect(20,10,60,35);
lienzoFooter.fillStyle="lightblue"; 
lienzoFooter.fillRect(25,15,50,25);

lienzoFooter.strokeStyle="#3F6797";
lienzoFooter.fillStyle="#3F6797"; 
lienzoFooter.beginPath();
lienzoFooter.moveTo(30,55);
lienzoFooter.lineTo(10,75);
lienzoFooter.lineTo(90,75);
lienzoFooter.lineTo(70,55);
lienzoFooter.closePath();
lienzoFooter.stroke();
lienzoFooter.fill();

lienzoFooter.strokeStyle="lightblue";
lienzoFooter.fillStyle="lightblue"; 
lienzoFooter.beginPath();
lienzoFooter.moveTo(70,60);
lienzoFooter.lineTo(30,60);
lienzoFooter.lineTo(20,70);
lienzoFooter.lineTo(80,70);
lienzoFooter.closePath();
lienzoFooter.stroke();
lienzoFooter.fill();

// REVISAR:
// rectangulo con los bordes redondeados: roundRect(x, y, width, height, radii)
