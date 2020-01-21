const container = document.getElementById("container");

//Creates Div Elements

function createDivs() {
  for (let i = 0; i < 17 * 17; i++) {
    const content = document.createElement("div");
    content.classList.add("content");
    container.appendChild(content);
    const box = document.querySelectorAll("div.content");
    box.forEach(box => {
      box.addEventListener("mouseover", changeColour);
    });
  }
}

//Change colour when hovered over
function changeColour(e) {
  e.target.style.background = "red";
}

//Clears Grid

function clearGrid() {
  let button = document.getElementById("new");
  button.addEventListener("click", () => {
    const clear = document.querySelectorAll("#container div");
    clear.forEach(div => {
      div.style.backgroundColor = "white";
    });
  });
}

createDivs();
clearGrid();
