function makeBlueButton() {
  document.body.style.backgroundColor = "blue";
}

const pink = document.getElementById("make-pink");
pink.onclick = makePinkButton;
function makePinkButton() {
  document.body.style.backgroundColor = "pink";
}

const yellow = document.getElementById("make-yellow");
yellow.onclick = function makeYellowButton() {
  document.body.style.backgroundColor = "yellow";
};

const lightGray = document.getElementById("make-lightgray");
lightGray.addEventListener("click", makeLightGrayButton);

function makeLightGrayButton() {
  document.body.style.backgroundColor = "lightgray";
}

const purple = document.getElementById("make-purple");
purple.addEventListener("click", function makePurple() {
  document.body.style.backgroundColor = "purple";
});

document
  .getElementById("make-tomato")
  .addEventListener("click", function makeTomato() {
    document.body.style.backgroundColor = "tomato";
  });

const text1 = document.getElementById("text");
function makeChange() {
  text1.innerText = "wow! it change";
}
function makeChange2() {
  text1.innerText = "it change again";
}

document
  .getElementById("updateButton")
  .addEventListener("click", function change() {
    const textArea = document.getElementById("updateText");
    const textUpdate = textArea.value;
    const changing = document.getElementById("make-change");
    changing.innerText = textUpdate;
    textArea.value = "";
  });
