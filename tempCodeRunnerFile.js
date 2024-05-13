class ToDo {
  todos = [];
  currentId = -1;
  ToDo() {
    console.log("dfd");

    // this.id = "";
    // this.title = "";
    // this.description = "";
    // this.dueDate = "";
    // this.priority = "";
    // this.notes = "";
    // this.checkList = "";
  }

  addTodo = (title, description, dueDate) => {
    this.currenId = this.currenId + 1;
    console.log(this.todos);
    this.todos.push({
      title,
      description,
      dueDate,
    });
  };

  get getLatestTodos() {
    console.log("H");
    return this.todos[this.currenId];
  }
  //   get getDescription() {
  //     return this.description;
  //   }
  //   get getDueDate() {
  //     return this.dueDate;
  //   }
  //   get getPriority() {
  //     return this.priority;
  //   }
  //   get getNotes() {
  //     return this.notes;
  //   }
  //   get getCheckList() {
  //     return this.checkList;
  //   }
  //   get getTitle() {
  //     return this.title;
  //   }

  //   remove = () => {
  //     this.title = "";
  //     this.description = "";
  //     this.dueDate = "";
  //     this.priority = "";
  //     this.notes = "";
  //     this.checkList = "";
  //     this.id = "0";
  //   };
}

const todo = new ToDo();
todo.addTodo("Demo todo", "Thois is the description ", "2nd April");
console.log(todo.getLatestTodos);
