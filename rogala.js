const todoList = []

function renderTodo() {
    let todoListHTML = '';
        for(let i = 0; i < todoList.length; i++){
            const todoObject = todoList[i];
            const {name, date} = todoObject;
            const html = `
            <p>
            ${name}
            </p>
            <p>
            ${date}
            </p>
            <button class="deleteBtn" onclick="todoList.splice(${i}, 1); renderTodo()">Usuń</button>`
            todoListHTML += html;
        }
        document.getElementById("todoList").innerHTML = todoListHTML;
}

function addTodo() {
    const nameImputElement = document.getElementById("todoName");
    const name = nameImputElement.value;
    const dateImputElement = document.getElementById("todoDate");
    const date = dateImputElement.value;
    todoList.push({
        name,
        date
    })
}
