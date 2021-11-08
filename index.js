function handleEverything() {
  const form = document.getElementById("add");
  form.onsubmit = addTodo;
  const todos = [
    { id: 1, content: "rewrew" },
    { id: 2, content: "rewrew" },
    { id: 3, content: "rewrew" },
    { id: 4, content: "rewrew" },
  ];

  todos.forEach(makeTodo);

  function makeTodo({ content, id }) {
    const elem = document.createElement("li");
    const elemText = document.createTextNode(content);
    const elemButton = document.createElement("button");
    const buttonText = document.createTextNode("Delete");
    elem.id = `${id}`;

    elemButton.appendChild(buttonText);
    elem.appendChild(elemText);
    elem.appendChild(elemButton);
    document.getElementById("list").appendChild(elem);
  }

  function addTodo(e) {
    e.preventDefault();
    const formValue = e?.target?.todo?.value;
    const id = todos.length + 1;
    const newTodo = { id, content: formValue };
    e.target.todo.value = "";
    todos.unshift(newTodo);
    makeTodo(newTodo);
  }
}

handleEverything();
