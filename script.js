let colorDisplay = document.getElementById("color-display");
let aquaButton = document.getElementById("aqua");
let tealButton = document.getElementById("teal");
let pinkButton = document.getElementById("pink");
let purpleButton = document.getElementById("purple");
let colorlessButton = document.getElementById("colorless");

function updateColor(color, text) {
  colorDisplay.style.backgroundColor = color;
  colorDisplay.textContent = text;
}

aquaButton.addEventListener("click", function () {
  updateColor("aqua", "aqua");
});

tealButton.addEventListener("click", function () {
  updateColor("teal", "teal");
});

pinkButton.addEventListener("click", function () {
  updateColor("pink", "pink");
});

purpleButton.addEventListener("click", function () {
  updateColor("purple", "purple");
});

colorlessButton.addEventListener("click", function () {
  updateColor("white", "colorless");
});
