const squares = Array.from(document.querySelectorAll(".square"))
console.log(squares)
const mole = document.querySelector('.mole')
const timeLeft = document.getElementById('TIME')
const score = document.getElementById('SCORE')
console.log(timeLeft,score)

let result = 0;


let hitPos;
function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
    
  });
  let y = Math.floor(Math.random() * 9)
  let randomSquare = squares[y]
  console.log(randomSquare)
  randomSquare.classList.add('mole')
  hitPos = randomSquare.id;
  
}


squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if(square.id == hitPos) {
      result++
      console.log(result)
      score.innerHTML = result;
      hitPos = null;
    }
  
  })

})




function moveMole() {
  let TimerId = null;
  TimerId = setInterval(randomSquare, 500);
}



function startGAME() {
    // Start the countdown
    let currentTime = 60;
    let timeLeft = document.getElementById("TIME");
    let countDownTimerId = setInterval(function() {
      currentTime--;
      timeLeft.innerHTML = currentTime;
      if (currentTime == 0) {
        clearInterval(countDownTimerId);
        alert("GAME OVER! YOUR FINAL SCORE IS " + toString(score));
      }
    }, 1000);

    //start the game
    moveMole();
}