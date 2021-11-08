// make a ul with the todos displayed in LIs
// make an event listener on the button submit??
const list = document.createElement("ul");

const todos = [
  { id: 1, content: "rewrew" },
  { id: 2, content: "rewrew" },
  { id: 3, content: "rewrew" },
  { id: 4, content: "rewrew" },
];

todos.forEach(({ content, id }) => {
  // li contains text and button
  const elem = document.createElement("li");
  const elemText = document.createTextNode(content);
  const elemButton = document.createElement("button");
  const buttonText = document.createTextNode("Delete");
  elem.id = `${id}`;

  elemButton.appendChild(buttonText);
  elem.appendChild(elemText);
  elem.appendChild(elemButton);

  document.getElementById("list").appendChild(elem);
});

function testMe(e) {
  e.preventDefault();
  console.log("Im working");
}

document.getElementById("add").onsubmit = testMe;
