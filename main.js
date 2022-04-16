let cells = document.querySelectorAll("[data-cell]");

// this will give each element an event listener
cells.forEach((cell, i) => {
  cell.addEventListener("click", handleClick, { once: true });
});

let choice;
var counter = 0;

function handleClick(e) {
  // change the value in that cell
  counter++;
  let cell = e.target;
  if (choice) {
    cell.style.backgroundImage = "url('/images/x.png')";
    cell.style.color = "red";
  } else {
    cell.style.backgroundImage = "url('/images/o.png')";
    cell.style.color = "green";
  }
  option("red");
  option("green");
  choice = !choice;
}

function option(pick) {
  if (
    cells[0].style.color === pick &&
    cells[1].style.color === pick &&
    cells[2].style.color === pick
  ) {
    alert(pick + " is the winner ");
  } else if (
    cells[3].style.color === pick &&
    cells[4].style.color === pick &&
    cells[5].style.color === pick
  ) {
    alert(pick + " is the winner ");
  } else if (
    cells[6].style.color === pick &&
    cells[7].style.color === pick &&
    cells[8].style.color === pick
  ) {
    alert(pick + " is the winner ");
  } else if (
    cells[0].style.color === pick &&
    cells[3].style.color === pick &&
    cells[6].style.color === pick
  ) {
    alert(pick + " is the winner ");
  } else if (
    cells[1].style.color === pick &&
    cells[4].style.color === pick &&
    cells[7].style.color === pick
  ) {
    alert(pick + " is the winner ");
  } else if (
    cells[2].style.color === pick &&
    cells[5].style.color === pick &&
    cells[8].style.color === pick
  ) {
    alert(pick + " is the winner ");
  } else if (
    cells[0].style.color === pick &&
    cells[4].style.color === pick &&
    cells[8].style.color === pick
  ) {
    alert(pick + " is the winner ");
  } else if (
    cells[2].style.color === pick &&
    cells[4].style.color === pick &&
    cells[6].style.color === pick
  ) {
    alert(pick + " is the winner ");
  } else if (counter >= 9) {
    alert("it's a draw");
  }
}

function clean() {
  location.reload();
  document.getElementsByClassName("cell").value = " ";
}

