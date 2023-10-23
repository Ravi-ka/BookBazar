const popupOverlay = document.getElementById("popup-overlay");
const popupModel = document.getElementById("add-popup")

const container = document.querySelector(".container")
const addBook = document.getElementById("add-book")
const addBookTitle = document.getElementById("popup-input-title")
const addBookAuthor = document.getElementById("popup-input-author")
const addBookDesc = document.getElementById("popup-input-desc")

const deleteBook = document.getElementById("delete-button")

addBook.addEventListener("click",(event)=>{
    
    event.preventDefault();
    let div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${addBookTitle.value}</h2><h6>${addBookAuthor.value}</h6><p>${addBookDesc.value}</p><button class="delete-button" onclick="deleteBookHandler(event)">Delete</button>`;
    container.append(div)
    addBook.value="";
    cancelPopup();
})

function deleteBookHandler(event){
    event.target.parentElement.remove();
}

function addBookPopup(){
    popupOverlay.style.display="block";
    popupModel.style.display="block";
}

function cancelPopup(event){
    popupOverlay.style.display="none";
    popupModel.style.display="none";
    event.preventDefault();
}