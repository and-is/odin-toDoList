var projId = 0;
class Project {
  constructor(name) {
    this.name = name;
  }
  todos = [];
  currentId = -1;
  pId = projId++;
  get getProjectId() {
    return this.pId;
  }
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

const renderContent = (proj) => {
  const projects = document.querySelector(".projects");
  const container = document.createElement("div");
  container.classList.add("oneProject");
  const butt = document.createElement("button");
  butt.innerText = "Add Todos";
  butt.addEventListener("click", () => {
    const todoDialog = document.querySelector(".addTodoDialog");
    todoDialog.showModal();
    const submitTodoBtn = document.querySelector("#submitTodo");
    const dueDat = document.querySelector("#dueDate");
    const descr = document.querySelector("#description");
    const titl = document.querySelector("#todoTitle");
    let tit, des, dd;
    submitTodoBtn.addEventListener("click", () => {
      tit = titl.value;
      des = descr.value;
      dd = dueDat.value;
      proj.addTodo(tit, des, dd);
      container.innerText = "";
      container.classList.remove("oneProject");
      renderContent(proj);
    });
  });
  const table = document.createElement("table");
  const headRow = document.createElement("tr");
  headRow.innerHTML =
    "<th>SN</th><th>Title</th><th>Description</th><th>Due Date</th><th>Completion</th>";
  table.appendChild(headRow);
  proj.getAllTodos.forEach((p) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${p.id + 1}.</td><td>${p.title}</td><td>${
      p.description
    }</td><td>${p.dueDate}</td><td>${p.isCompleted ? "Yes" : "No"}</td>`;
    table.appendChild(row);
  });
  const title = document.createElement("h1");
  title.innerText = proj.name;
  container.appendChild(title);
  container.appendChild(table);
  container.appendChild(butt);
  projects.appendChild(container);
};

const butt2 = document.createElement("button");
butt2.innerText = "Add Projects";
butt2.addEventListener("click", () => {
  const projectDialog = document.querySelector(".addProjectDialog");
  projectDialog.showModal();
  const submitBtn = document.querySelector("#submit");
  const pN = document.querySelector("#projectName");
  let nm;
  submitBtn.addEventListener("click", () => {
    nm = pN.value;
    proj1 = new Project(nm);
    renderContent(proj1);
  });
});

const projects = document.querySelector(".mega");
projects.appendChild(butt2);
