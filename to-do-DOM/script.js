const input = document.getElementById("input");
const addButton = document.getElementById("addButton");
const tableContainer = document.getElementById("tableContainer");
const rows = tableContainer.rows;
let toDos = localStorage.getItem('toDos');
const table = document.querySelector("table");
// const sortTodosByName = getElementById("sortByName");

if (!toDos) {
    toDos = [];
} else {
    toDos = JSON.parse(toDos);
}
render();

addButton.addEventListener("click", () => {

    const toDo = {
        id: Date.now().toString() + Math.random().toString() + 1,
        text: input.value,
        status: false
    };
    if (input.value !== "") {
        toDos.push(toDo);
    }
    input.value = "";
    input.innerText = "";
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

        id.innerText = toDo.id.toString().substring(0, 3) + "...";
        text.innerText = toDo.text;
        status.innerText = toDo.status ? "done" : "in process";

        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        const changeStatusButton = document.createElement("button");

        editButton.innerText = "edit";
        editButton.addEventListener("click", editByIndex(index));
        deleteButton.innerText = "delete";
        deleteButton.addEventListener("click", ()=> deleteByIndex(index));
        changeStatusButton.innerText = "change status";
        changeStatusButton.addEventListener("click",()=> changeStatusByIndex(index));

        actions.appendChild(editButton);
        actions.appendChild(deleteButton);
        actions.appendChild(changeStatusButton);

        row.appendChild(id);
        row.appendChild(text);
        row.appendChild(status);
        row.appendChild(actions);
        table.appendChild(row)
        tableContainer.appendChild(table);
        localStorage.setItem('toDos', JSON.stringify(toDos));

    });
}
function editByIndex(index) { }
function deleteByIndex(index) {
    toDos.splice(index, 1);
    localStorage.setItem('toDos', JSON.stringify(toDos));
    render();
}
function changeStatusByIndex(index) {
    if (toDos[index].status == false) { toDos[index].status = true } else { toDos[index].status = false; }
    localStorage.setItem('toDos', JSON.stringify(toDos));
    render();
}
// sortTodosByName.addEventListener("click", sortTodosByName(index));
// function sortTodosByName() {
//     toDos.sort((a, b) => (a.text > b.text) ? 1 : -1);
// }
