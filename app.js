var list = document.getElementById("list");

function addTodo() {
    var inputTodo = document.getElementById("todo-item");

    // create list

    var createLi = document.createElement("li");
    var liText = document.createTextNode(inputTodo.value);
    createLi.appendChild(liText);
    createLi.setAttribute("class" , "liStyle");

    // create edit button

    var editeBtn = document.createElement("button");
    var editeText = document.createTextNode("Edit");

    editeBtn.appendChild(editeText);
    createLi.appendChild(editeBtn);

    editeBtn.setAttribute("onclick" , "editItem(this)");
    editeBtn.setAttribute("class" , "editButton");

    // Delete Button

    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Remove");
    
    delBtn.appendChild(delText);
    createLi.appendChild(delBtn);

    delBtn.setAttribute("class" , "removeButton");
    delBtn.setAttribute("onclick" , "deleteItem(this)");
    
    list.appendChild(createLi);
    inputTodo.value = "";

    
}
function editItem(it) {
    var val = it.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edite value", val);
    it.parentNode.firstChild.nodeValue = editValue; 
}

function deleteItem(it) {
    it.parentNode.remove();
}


function deleteAll() {
    list.innerHTML = "";
}



