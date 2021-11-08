// make a ul with the todos displayed in LIs
// make an event listener on the button submit??
const list = document.createElement("ul");
const todos = ["rewrew", "apples", "bananas", "oranges"];

TEST.forEach((word) => {
  const elem = document.createElement("li");
  const elemText = document.createTextNode(word);
  elem.appendChild(elemText);
  document.getElementById("list").appendChild(elem);
});
