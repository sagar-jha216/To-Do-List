const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//to take input into input box

function addTask(){
    if(inputBox.value===''){
        alert("Kindly Write Something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u2716";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData() ;  //we always call this function to save the data
}

// To checked the completed work and to remove the done work

listContainer.addEventListener('click' ,function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

//To store list even after refresh

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

//To show the saved data lets create a function

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();