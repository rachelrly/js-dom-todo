function handleEverything() {
  const form = document.getElementById("add");
  form.onsubmit = addTodo;
  const todos = [
    { id: 1, content: "Go to store" },
    { id: 2, content: "Clean floors" },
    { id: 3, content: "Make dinner" },
    { id: 4, content: "Walk dog" },
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
    if (formValue.length > 0 && formValue.length < 50) {
      const id = todos.length + 1;
      const newTodo = { id, content: formValue };
      e.target.todo.value = "";
      todos.unshift(newTodo);
      makeTodo(newTodo);
    }
  }

  function handleDelete(todo) {
    //how do I access the id from the button press???
    const toDelete = document.getElementById(todo.id);
    document.getElementById("list").removeChild(toDelete);
  }
}

handleEverything();
