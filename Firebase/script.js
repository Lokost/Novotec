import { app } from './firebase.js';
import { getDatabase, set, ref, onChildAdded, onChildChanged, onChildRemoved, push } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import { Task } from './task.js';

const tasksList = document.getElementById("tasks");
const taskInput = document.getElementById("new-task");
const addTaskBtt = document.getElementById("add-task");

const db = getDatabase(app);
const refTasks = ref(db, "tasks");
var savedTasks = [];

/*
Funções da página

Principais funções da página, responsáveis pela construção do HTML e demais ações.
*/

// Função responsável pela construção da lista
function drawList() {
    tasksList.innerHTML = "";

    if (savedTasks.length > 0) {
        savedTasks.forEach(task => {
            tasksList.innerHTML += (task.build());
        });
    } else {
        tasksList.innerHTML = "Adicione uma tarefa abaixo";
    }

    setFunctions()
}

// Função de adição de nova task
function addTask() {
    if (taskInput.value == "") {
        taskInput.focus();
        return;
    }

    let task = new Task(push(refTasks).key, taskInput.value, false);
    set(ref(db, 'tasks/' + task.id), task.toObj());
    taskInput.value = "";
    taskInput.focus();
}

// Função do botão de edição
function editTask(id) {
    let input = document.getElementById(`input-${id}`);

    if (input.hasAttribute("readonly")) {
        input.removeAttribute("readonly");
        input.style.background = "white"
        input.focus();
    } else {
        input.setAttribute("readonly", "");
        input.style.background = "transparent"
        let index = savedTasks.findIndex(task => task.id == id);
        savedTasks[index].text = input.value;
        set(ref(db, 'tasks/' + id), savedTasks[index].toObj());
    }
}

// Função do botão de exclusão
function deleteTask(id) {
    set(ref(db, 'tasks/' + id), null);
}

// Função da seleção do checkbox
function checkTask(id) {
    let index = savedTasks.findIndex(task => task.id == id);
    savedTasks[index].mode = !savedTasks[index].mode;
    set(ref(db, 'tasks/' + id), savedTasks[index].toObj());
}

/*
Funções dos botões

Funções responsáveis pela ação dos botões.
*/

// Adição de nova task
taskInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        addTask();
    }
})

addTaskBtt.addEventListener("click", () => {
    addTask();
})

function setFunctions() {
    let editButtons = document.querySelectorAll(".edit-button");
    let deleteButtons = document.querySelectorAll(".delete-button");
    let checkBoxes = document.querySelectorAll(".check-task");

    if (editButtons) {
        editButtons.forEach(button => button.addEventListener('click', (e) => editTask(e.target.getAttribute("key"))))
        deleteButtons.forEach(button => button.addEventListener('click', (e) => deleteTask(e.target.getAttribute("key"))))
        checkBoxes.forEach(button => button.addEventListener('click', (e) => checkTask(e.target.getAttribute("key"))))
    }
}

/*
Funções Firebase

Funções responsáveis pela atualização com o banco de dados.
*/

// Reage sempre que um item é adicionado ao Firebase
onChildAdded(refTasks, (snapshot) => {
    let data = snapshot.val();
    savedTasks.push(
        new Task(
            snapshot.key,
            data.text,
            data.mode
        )
    );
    drawList();
})


// Reage sempre que um item é removido do Firebase
onChildRemoved(refTasks, (snapshot) => {
    let index = savedTasks.findIndex(task => task.id == snapshot.key);
    savedTasks.splice(index, 1);
    drawList();
})

// Reage sempre que um item é modificado no Firebase
onChildChanged(refTasks, (snapshot) => {
    let index = savedTasks.findIndex(task => task.id == snapshot.key);
    console.log(index)
    let data = snapshot.val();
    savedTasks[index].text = data.text;
    savedTasks[index].mode = data.mode;
    drawList();
})