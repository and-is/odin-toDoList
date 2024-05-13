class ToDo {
  todos = [];
  currentId = -1;

  addTodo = (title, description, dueDate) => {
    this.currentId = this.currentId + 1;

    this.todos.push({
      title,
      description,
      dueDate,
      isCompleted: false,
      id: this.currentId,
    });
  };

  get getLatestTodos() {
    return this.todos[this.currentId];
  }

  get getAllTodos() {
    console.log(this.todos);
    return this.todos;
  }

  getTodoWithId = (id) => {
    const filtered = this.todos.filter((todo) => todo.id == id);
    if (filtered.length === 0) {
      console.log("Invalid Id");
      return;
    }
    console.log(filtered[0]);
    return filtered[0];
  };

  removeTodoWithId = (id) => {
    const filteredId = this.todos.filter((todo) => todo.id != id);
    this.todos = filteredId;
  };

  updateDate(id, toUpdateDate) {
    const filtered = this.todos.findIndex((todo) => id == todo.id);
    if (filtered == -1) {
      console.log("Invalid id");
      return;
    }
    this.todos[filtered].dueDate = toUpdateDate;
  }

  flagComplete(id) {
    const filtered = this.todos.filter((todo) => todo.id == id);
    if (filtered.length === 0) {
      console.log("Invalid todo");
      return;
    }

    filtered[0].isCompleted = true;
  }
}

const todo = new ToDo();
todo.addTodo("Demo todo", "Thois is the description ", "2nd April");
todo.addTodo("Demo todo2", "Thois is the description2 ", "2nd April");
todo.getAllTodos;
// todo.removeTodoWithId("0");
todo.updateDate("0", "10 April");
todo.flagComplete("0");
todo.getAllTodos;

const renderContent = () => {
  const wrapper = document.querySelector(".projects");
  todo.getAllTodos.forEach((todo) => {
    const bhaado = document.querySelector("table");
    const row = document.createElement("tr");
    const classToAppend = todo.isCompleted
      ? "completed "
      : "incompleted " + "toClick";

    row.innerHTML = `<td>${todo.id + 1}.</td><td>${todo.title}</td><td>${
      todo.description
    }</td><td>${todo.dueDate}</td><td id=${todo.id} class=${classToAppend}>${
      todo.isCompleted
    }</td>`;
    bhaado.appendChild(row);
  });
};

renderContent();

const inCompletedChid = document
  .querySelector(".incompleted")
  .addEventListener("click", (e) => {
    todo.flagComplete(e.target.id);
    e.target.className = "completed";
    e.target.innerText = "true";
  });
