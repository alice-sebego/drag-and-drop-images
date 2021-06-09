// Elements of DOM

const $imagesStore = document.querySelector("#images-stores");
const $trashCan = document.querySelector("#trash-can");
const $imgSelected = document.querySelectorAll(".imgSelected");

// Build drag's events

let dragged;

document.addEventListener("drag", e => {}, false);

document.addEventListener("dragstart", e => {
    dragged = e.target;
    e.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", e => e.target.style.opacity = "", false);

document.addEventListener("dragover", e => e.preventDefault(), false);

document.addEventListener("dragenter", e => {
    if(e.target.className === "imgSelected"){
        e.target.style.border = "1px solid green";
        e.target.style.backgroundColor = "rgba(0, 240, 100, 0.1)"
    }
}, false);

document.addEventListener("dragleave", e => {
    if(e.target.className === "imgSelected"){
        e.target.style.backgroundColor = "";
    }
}, false);

document.addEventListener("drop", e => {
    
    e.preventDefault();

    if(e.target.className === "imgSelected"){
        e.target.style.backgroundColor = "";
        dragged.parentNode.removeChild(dragged);
        e.target.appendChild(dragged)
    }

}, false);