let div_list = document.createElement("div");
div_list.id = "list";
document.body.append(div_list)


let submit = document.getElementById("submit_btn");
let list_div = document.getElementById("list");
let counter = 0
document.addEventListener("keydown", event =>  {
    
    if(event.key.startsWith("Enter")) {

    let task = document.getElementById("text").value;
    counter++
    let new_task = document.createElement("input");
    new_label = document.createElement("label");
    let br = document.createElement("br");
    new_label.className = "label_task"
    new_task.type = "checkbox";
    new_task.className = "task";
    list_div.append(new_task);
    list_div.append(new_label);
    list_div.append(br);
    new_label.innerHTML = task;
    document.getElementById("text").value = "";
    }



})

document.getElementById("reset").onclick = function() {
    document.getElementById("list").innerHTML = "";
}
if(document.getElementsByClassName("task").checked){
    document.getElementsByClassName("label_task").style.textDecoration = "line-through"; 
}
else {
    document.getElementsByClassName("label_task").style.textDecoration = "none";
}


