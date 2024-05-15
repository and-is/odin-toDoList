var projId = 0;
class Project {
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
    proj.addTodo(
      "Walk",
      "walk for some distance so whatever you've eaten gets digested",
      "18th May"
    );
    container.innerText = "";
    container.classList.remove("oneProject");
    renderProjects(proj);
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
  container.appendChild(table);
  container.appendChild(butt);
  projects.appendChild(container);
};

const renderProjects = (proj) => {
  renderContent(proj);
};

const butt2 = document.createElement("button");
butt2.innerText = "Add Projects";
butt2.addEventListener("click", () => {
  proj1 = new Project();
  proj1.addTodo(
    "Eat",
    "eat something that fills your stomach for some time",
    "18th May"
  );
  proj1.addTodo(
    "Walk",
    "walk for some distance so whatever you've eaten gets digested",
    "18th May"
  );
  renderProjects(proj1);
});

const projects = document.querySelector(".mega");
projects.appendChild(butt2);
