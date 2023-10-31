console.log("hello ");

// option-2
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option-3
const makeOrangeButton = document.getElementById("make-orange");
makeOrangeButton.onclick = makeOrangeee;

function makeOrangeee() {
  document.body.style.backgroundColor = "orange";
}

// option-4
const makeGrayButton = document.getElementById("make-gray");
makeGrayButton.onclick = function makeGray() {
  document.body.style.backgroundColor = "gray";
};

// option-5
const makePink = document.getElementById("make-pink");
makePink.addEventListener("click", makePinkButton);
function makePinkButton() {
  document.body.style.backgroundColor = "pink";
}

// option-6
const makeBlack = document.getElementById("make-black");
makeBlack.addEventListener("click", function makeBlackButton() {
  document.body.style.backgroundColor = "black";
});

// option-7
document.getElementById("make-golden").addEventListener("click", function makeGoldenButton() {
    document.body.style.backgroundColor = "goldenrod";
  });
