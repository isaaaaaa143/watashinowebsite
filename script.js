window.onload = function () {
  const button = document.getElementById("magicButton");

  button.addEventListener("click", function () {
    alert("You clicked it anyway... prepare for magic!");
    document.body.style.backgroundColor = "#1a001a"; // deep dark purple
    button.textContent = "Too late now...";
  });
};
