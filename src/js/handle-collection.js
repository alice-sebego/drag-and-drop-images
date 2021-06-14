/**
 * Handle user's collection of selected images on the DOM
 * @class HandleCollection
 * @param {HTMLDivElement} imgStore
 * @param {HTMLDivElement} image
 * @param {HTMLDivElement} trashcan
 * @param {HTMLAllCollection} imgSelected
 * @param {Array} collection
 */
export default class HandleCollection{

    indexPicture = 1;
    currentPicture;
    
    constructor(imgStore, image, trashcan, imgSelected, collection){
        
        this.imgStore = imgStore;
        this.image = image;
        this.trashcan = trashcan;
        this.imgSelected = imgSelected;
        this.collection = collection;

    }

    handleImgSelected(){

        this.imgSelected.forEach(img => this.collection.push(img));
        this.collection.push(this.trashcan);

    }

    initializeImg(){

        this.image.style.backgroundImage = `url(./assets/pexels-${this.indexPicture}.jpg)`;
        this.currentPicture = `url(./assets/pexels-${this.indexPicture}.jpg)`;
    
    }

    newPicture(){

        const newImg = document.createElement("div");
        newImg.setAttribute("class", "image");
        newImg.setAttribute("draggable", "true");
        this.indexPicture ++ ;
        newImg.style.backgroundImage = `url(./assets/pexels-${this.indexPicture}.jpg)`;
        this.currentPicture = `url(./assets/pexels-${this.indexPicture}.jpg)`;
        this.imgStore.appendChild(newImg);
    }

    noMoreSelect(){

        if(this.indexPicture > 25){
            setTimeout(()=>{
                alert("Il n'y a plus de photos à sélectionner")
            }, 500)
        }

    }
}