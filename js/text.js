var titulo = document.querySelector(".titulo-E");
titulo.textContent = "Lista de Encomendas";

var qA = document.querySelector(".info-qtdeA").textContent;
var valorA = document.querySelector(".info-valorA").textContent;
document.querySelector(".info-totalA").textContent = valorA * qA;

var qB = document.querySelector(".info-qtdeB").textContent;
var valorB = document.querySelector(".info-valorB").textContent;
document.querySelector(".info-totalB").textContent = valorB * qB;

var qC = document.querySelector(".info-qtdeC").textContent;
var valorC = document.querySelector(".info-valorC").textContent;
document.querySelector(".info-totalC").textContent = valorC * qC;

var qD = document.querySelector(".info-qtdeD").textContent;
var valorD = document.querySelector(".info-valorD").textContent;
document.querySelector(".info-totalD").textContent = valorD * qD;

