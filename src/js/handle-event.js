import HandleCollection from './handle-collection.js';
import * as dom from './dom-elements.js';

/**
 * Handle all events related to drag and drop
 * @class HandleEvent
 * @param {Array} selection
 */
export default class HandleEvent{
    
    dragged;
    handleCollection = new HandleCollection(dom.$imagesStore, dom.$image, dom.$trashCan, dom.$imgSelected, dom.collection);
    
    constructor(selection){

        this.selection = selection;

    }

    load(){

        this.handleCollection.handleImgSelected();
        this.handleCollection.initializeImg();

    }

    drag(){

        document.addEventListener("drag", e => {}, false); 

    }

    dragStart(){

        document.addEventListener("dragstart", e => {
            this.dragged = e.target;
            e.target.style.opacity = .5;
        }, false); 

    }

    dragEnd(){

        document.addEventListener("dragend", e => e.target.style.opacity = "", false);

    }

    dragOver(){

        document.addEventListener("dragover", e => e.preventDefault(), false);

    }

    dragEnter(){

        document.addEventListener("dragenter", e => {
            if(e.target.className === "imgSelected"){
                e.target.style.border = "1px solid green";
                e.target.style.backgroundColor = "rgba(0, 240, 100, 0.1)"
            }
        }, false);

    }

    dragLeave(){

        document.addEventListener("dragleave", e => {
            if(e.target.className === "imgSelected"){
                e.target.style.backgroundColor = "";
            }
        }, false);

    }

    drop(){

        document.addEventListener("drop", e => {
    
            e.preventDefault();

            if(e.target.className === "images-store"){
                return;
            }
        
            if(e.target.getAttribute("id") === "trash-can"){
                this.dragged.remove();
                this.handleCollection.newPicture();
            }
        
            if(e.target.className === "imgSelected"){
                e.target.style.backgroundColor = "";
                this.dragged.parentNode.removeChild(this.dragged);
                e.target.appendChild(this.dragged);
                this.dragged.setAttribute("draggable", "false");
                this.handleCollection.newPicture();
                this.selection.push(this.handleCollection.currentPicture);
                if(this.selection.length === 3){
                    setTimeout(()=>{
                        alert("Vous avez terminé votre sélection");
                    }, 1000)
                }
            }
        
        }, false);
        
    }
}