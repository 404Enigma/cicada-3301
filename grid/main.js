// function that builds a grid in the "container"
function createGrid(x) {
  for (var rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < x; columns++) {
      $("#container").append("<div class='grid'></div>");
    }
  }
  $(".grid").width(960 / x);
  $(".grid").height(960 / x);
}

// function that clears the grid
function clearGrid() {
  $(".grid").remove();
}

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid() {
  var box_no = prompt("How many boxes per side?");
  clearGrid();
  createGrid(box_no);
}

// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function () {
  createGrid(16); //by defaults

  $(".grid").click(function () {
    $(this).css("background-color", "red");
  });

  let drag = false;

  document.addEventListener("mousedown", () => {
    $(this).css("background-color", "red");
    drag = false;
  });
  document.addEventListener("mousemove", () => {
    $(this).css("background-color", "red");
    drag = true;
  });
  document.addEventListener("mouseup", () => {
    console.log(drag ? "drag" : "click");
    $(this).css("background-color", "red");
  });

  $(".newGrid").click(function () {
    refreshGrid();

    $(".grid").mouseover(function () {
      $(this).css("background-color", "black");
    });
  });
});
