var cards = document.querySelectorAll(".card");
console.log(cards);

var isFlipped = false;
var firstCard;
var secondCard;
cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  //console.log("card is flipped");
  //console.log(this);
  this.classList.add("flip");
  //this.classList.remove("flip")

  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    checkIt();
  }
}
function checkIt() {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }

  //console.log("checking");
}

function success() {
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
  //console.log("success");
}

function fail() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 900);
  //reset()

  //console.log("fail");
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

// TODO:  shuffle

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
