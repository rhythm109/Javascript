# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution Code

## project_1 : Color Switcher
``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach( function (button) {
  console.log(button);
  button.addEventListener('click', function(chai){
    console.log(chai);
    console.log(chai.target);
    if(chai.target.id === 'grey'){
      body.style.color = chai.target.id
    }
    if(chai.target.id === 'white'){
      body.style.color = chai.target.id
    }
    if(chai.target.id === 'blue'){
      body.style.color = chai.target.id
    }
    if(chai.target.id === 'yellow'){
      body.style.color = chai.target.id
    }
  })
})
``` 


# project 2 : BMI Calculator

``` javascript
const form = document.querySelector('form');

// this usecase will give empty value
// const height = parseInt(document.querySelector('#weight'))


form.addEventListener('submit', function(chai){
  chai.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height  < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height`;
  } else if(weight === '' || weight  < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight`;
  } else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // show the result
    results.innerHTML = `<span>${bmi}</span>`;

  }
  
})
```

# project 3 : Clock

```javascript

const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

# project 4 : Guess the number

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;
let playGame = true;

if(playGame){
  submit.addEventListener('click', function(chai){
    chai.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess){
  //
  if(isNaN(guess)){
    alert(`Please enter a valid number`);
  }
  else if(guess < 1){
    alert(`Please enter more than 1`);
  }
  else if(guess > 100){
    alert(`Please enter a number less than 100`);
  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess);
      displayMessage(`Game Over, Random Number was ${randomNumber}`);
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  //
  if(guess === randomNumber){
    displayMessage(`You guessed it right`);
    endGame()
  }
  else if(guess < randomNumber){
    displayMessage(`Number is too low`);
  }
  else if(guess > randomNumber){
    displayMessage(`Number is too high`);
  }
}

function displayMessage(message){
  //
  loOrHi.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
  //
  userInput.value = ''
  guessSlot.innerHTML += `${guess}  `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function newGame(){
  //
  const newGame = document.querySelector('#newgame');
  newGame.addEventListener('click', function(chai){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    playGame = true;
  })
}

function endGame(){
  //
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newgame"> Start New Game</h2>`
  startOver.appendChild(p);
  playGame = false;
  newGame();
}




```


# project 5 : keyboard keys

```javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown', (chai) => {
  insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr>
  <th> Key </th>
  <th> KeyCode </th>
  <th> KeySet </th>
  </tr>
  <tr>
  <th> ${chai.key === ' ' ? 'Space' : chai.key}</th>
  <th> ${chai.keyCode}</th>
  <th> ${chai.code} </th>
  </tr>
  </table>  
  </div>
  `;
});
```

# project 6 : bg color keys

```javascript

// generate a random color

const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
}


let intervalId;
const startChangingColor = function(){
  if(!intervalId){
    intervalId = setInterval(changeBg, 1000);
  }

  function changeBg(){
    document.body.style.backgroundColor = randomColor()
  }
}
const stopChangingColor = function(){
  clearInterval(intervalId);
  intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```