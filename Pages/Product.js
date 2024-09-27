// Bootstrap link Here

let head = document.querySelector("head");
head.innerHtml += `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`;

// ---------------------------------------------------------------------------------------------------------------------------------------------------

let buttons = document.querySelectorAll(".buttonProduct");
buttons.forEach(button => {
  button.addEventListener("click", function() {
    let mood = false;

    if (button.textContent === "Add To Cart") {
      button.textContent = "Remove From Cart";
      button.style.backgroundColor = "red";
    } else {
      button.textContent = "Add To Cart";
      button.style.backgroundColor = "#7749f8";
    }
  });
});
