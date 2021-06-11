// Elements of DOM

const $images = document.querySelector(".images");
const $trashCan = document.querySelector("#trash-can");
const $imgSelected = document.querySelectorAll(".imgSelected");

// Add images on images store
let indexPicture = 1;

$images.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPicture})`;

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