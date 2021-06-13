// Elements of DOM
const $imagesStore = document.querySelector("#images-store");
let $image = document.querySelector(".image");
const $trashCan = document.querySelector("#trash-can");
const $imgSelected = document.querySelectorAll(".imgSelected");

// Handle collection of images
let collection = [];
const selection = [];
let currentPicture;
$imgSelected.forEach(img => collection.push(img));
collection.push($trashCan);

// Add images on images store
let indexPicture = 1;

$image.style.backgroundImage = `url(./assets/pexels-${indexPicture}.jpg)`;
currentPicture = `url(./assets/pexels-${indexPicture}.jpg)`;

/**
 * Add a new picture on the div - Images Stores - 
 * when the previous image has been dropped on collection
 */
const newPicture = () => {

    const newImg = document.createElement("div");
    newImg.setAttribute("class", "image");
    newImg.setAttribute("draggable", "true");
    indexPicture ++ ;
    newImg.style.backgroundImage = `url(./assets/pexels-${indexPicture}.jpg)`;
    currentPicture = `url(./assets/pexels-${indexPicture}.jpg)`;
    $imagesStore.appendChild(newImg);

}

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

    if(e.target.className === "images-store"){
        return;
    }

    if(e.target.getAttribute("id") === "trash-can"){
        dragged.remove();
        newPicture();
    }

    if(e.target.className === "imgSelected"){
        e.target.style.backgroundColor = "";
        dragged.parentNode.removeChild(dragged);
        e.target.appendChild(dragged);
        dragged.setAttribute("draggable", "false");
        newPicture();
        selection.push(currentPicture);
        if(selection.length === 3){
            setTimeout(()=>{
                alert("Vous avez terminé votre sélection");
            }, 1000)
        }
    }

}, false);