const input = document.getElementById("input");
const addButton = document.getElementById("addButton");
const table = document.getElementById("table");
const rows = table.rows;
const toDos = JSON.parse(localStorage.getItem('toDos'));
let idCounter = toDos.length + 1;
render();
addButton.addEventListener("click", () => {
    const toDo = {
        id: idCounter,
        text: input.value,
        status: false
    };
    if (input.value !== "") {
        toDos.push(toDo);
    }
    input.value = "";
    input.innerText = "";
    idCounter ++;
    render();
});
function render() {
    table.innerHTML = "";
    toDos.forEach((toDo, index) => {    
        const row = document.createElement("tr");
        const id = document.createElement("td");
        const text = document.createElement("td");
        const status = document.createElement("td");
        const actions = document.createElement("td");

        id.innerText = toDo.id;
        text.innerText = toDo.text;
        status.innerText = toDo.status ? "done" : "in process";
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        const changeStatusButton = document.createElement("button");

        editButton.innerText = "edit";
        editButton.addEventListener("click", editByIndex(index));
        deleteButton.innerText = "delete";
        deleteButton.addEventListener("click", deleteByIndex(index));
        changeStatusButton.innerText = "change status";
        changeStatusButton.addEventListener("click", changeStatusByIndex(index));   

        actions.appendChild(editButton);
        actions.appendChild(deleteButton);
        actions.appendChild(changeStatusButton);

        row.appendChild(id);
        row.appendChild(text);
        row.appendChild(status);
        row.appendChild(actions);

        table.appendChild(row);
        localStorage.setItem('toDos', JSON.stringify(toDos));

    });
}
function editByIndex(index) {}
function deleteByIndex(index) {

}
function changeStatusByIndex(index) {

}
