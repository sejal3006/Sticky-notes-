const noteContent = document.querySelector("#note-content");
const noteColor = document.querySelector("#note-color")
const noteCreateBtn = document.querySelector("#note-creation-section > button");
const notesContainer = document.querySelector("#notes-container");
let emptyNotesMessage = document.querySelector("#empty-notes-message");

noteCreateBtn.addEventListener("click",(e)=>{
    if(noteContent.value === ""){
        alert("Please input a note");
        return;
    }else {
        if(!emptyNotesMessage.classList.contains("hidden")){
            emptyNotesMessage.classList.add("hidden")
        }
        let div = document.createElement("div");
        div.innerHTML = `
            <p>${noteContent.value}</p>
            <span class="close-btn">X</span>
        `
        div.classList.add("note")
        div.style.backgroundColor = noteColor.value;

        notesContainer.appendChild(div);
        noteContent.value = "";
    }
})

notesContainer.addEventListener("click",(e) => {


    if(e.target.innerText === "X"){
        e.target.parentNode.remove();
    }
   
    if(notesContainer.children.length < 2){
        emptyNotesMessage.classList.remove("hidden")
    }
})