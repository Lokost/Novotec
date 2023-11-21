/*
Classe Tasks

Classe necessária para administração das tasks. Facilitando o nosso código.
*/

class Task {

    // Construtor da classe Task
    constructor(id, text, mode) {
        this.id = id;
        this.text = text;
        this.mode = mode;
    }

    // Construção do elemento em HTML
    build() {
        return `
        <div class="task-card">
            <input type="checkbox" class="check-task" key="${this.id}" ${this.mode ? "checked" : ""}>
            <input type="text" value="${this.text}" class="text" id="input-${this.id}" readonly>
            <button>
                <span class="material-symbols-outlined card-button edit-button" key="${this.id}">
                    edit
                </span>
            <button>
                <span class="material-symbols-outlined card-button delete-button" key="${this.id}">
                    delete
                </span>
            </button>
        </div>`
    }

    // Retorna os parâmetros necessários como objeto
    toObj() {
        return {
            text: this.text,
            mode: this.mode
        }
    }
}

export { Task }