import { app } from './firebase.js'
import { getDatabase, ref, onChildAdded, onChildRemoved, set, onChildChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
const tasksList = document.getElementById('tasks')

const db = getDatabase(app)

const refDB = ref(db, '/tasks')

const tasks = {}

onChildAdded(refDB, (snapshot) => {
    let info = snapshot.val()
    tasks[snapshot.key] = info
    console.log(tasks)
    updateList()
})

onChildChanged(refDB, (snapshot) => {
    tasks[snapshot.key] = snapshot.val()
    console.log(tasks)
    updateList()
})

onChildRemoved(refDB, (snapshot) => {
    delete tasks[snapshot.key]
    updateList()
})

class taskCard {
    constructor(text) {
        this.text = text;
    }

    build() {
        return `<div class="task-card">
        <input type="checkbox" class="check">
        <input type="text" value="${this.text}" class="text" readonly>
        <button>
            <span class="material-symbols-outlined card-button">
                edit
                </span>
        </button>
    </div>`
    }

    toObj() {
        return {
            text: this.text
        }
    }
}

function updateList() {
    tasksList.innerHTML = ``
    if (tasks) {
        tasksList.style.justifyContent = "start"
        Object.keys(tasks).forEach((key, val) => {
            tasksList.innerHTML += new taskCard(tasks[key]).build()
        });
    } else {
        tasksList.style.justifyContent = "center"
        tasksList.innerHTML = `Adicione uma nova tarefa digitando abaixo`
    }
}

