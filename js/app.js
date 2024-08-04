 console.log('sanity check')
//------------------------jS---------------------------------- 


//define a constant variable for winning combos 
const winningCombos = [
    [3,15],
    [0,8],
    [5,12],
    [6,13],
    [0,15],
    [1,14],
    [10,11],
    [2,7],
    [4,9]
]
// const iconsCollection
 const cardImages = ['imageOne','Imagetwo','ImageThree','imageFour','imageFive','imageix','imageSeven','ImageEigth','','','','','','','','']

 

//------------------State Variables-------------------------- 

  
let userChoice
let choicesCollection = []
let countdown
let message
let win
let lose
let mistakes
let playerChoiceId
//define variable for user's choice 
//define variable for countdown 
//define variable for message 
//define variable for win 
//define variable for lose 
//define variable for mistakes 


//-----------------Cache elements-------------------------- 

 

//Select the results displayed message 
displayMessageEl = document.querySelector('#message')
boardEl = document.querySelector('.board')
squareEls = document.querySelectorAll('.square')
// console.log(squareEls[2])
 

//------------------Functions-------------------------------- 

 

// invoke the init function:  
const init = () => {
    let userChoice = ''
    let countdown = 0
    let message = ''
    let win = false
    let mistakes = 0

}
// set all variables to initial state:  
// set countdown to 30 seconds; 
//set winner 

// using the event listeners setup, assign the player's choice to the player's choice variable 
const getPlayerChoiceId = (event) => {
    playerChoiceId = Number(event.target.id)
    
}

const displayCard = () => {
    squareEls[playerChoiceId].innerHTML = cardImages[playerChoiceId]
}

const collectPlayerChoices = () => {
    choicesCollection.push(playerChoiceId)
    // console.log('this is choices collection inside check winning', choicesCollection)
}

// invoke get player function from game function 
const checkWinningCombo = () => {
    console.log('this is choicesCollection inside check winning', choicesCollection)
    if (choicesCollection.length < 2){
        return
    }else {
        winningCombos.map((combo) => {
            console.log(combo)
            const checkIsInWinCombo = choice => combo.includes(choicesCollection)
            if(choicesCollection.every(checkIsInWinCombo)){
                console.log('that is a matching pair')
            }else {
                console.log('not a matching pair')
            }
        })
    }
} 

 

// invoke the primary render function 

// render the game message to the DOM 

 

// after two player's clicks: 

// compare the first and second choices with the winning combos 

// IF the set matches any winning combo 

//THEN keep the choices visible 

//ELSE hide choices and add 1 to the mistakes variable and render a message  

 

// check mistakes 

// IF mistakes variable is less than 2 return/continue game 

//ELSE set looser to true and set message variable to "you reached two mistakes, you lost. Please try again" 

 

// check board 

// IF board is completed 

//THEN set win to true 

 

// Render message to player. 
const render = () => {
    displayMessageEle.innerHtml = message
} 
 

// when countdown reaches zero: 

// IF Board is incomplete set looser to true and set message variable to "you lost, try again"  

const playGame = (event) => {
    // startCountdown()
    getPlayerChoiceId(event) //and collections
    displayCard()
    collectPlayerChoices()
    checkWinningCombo()
    // updateBoard()
    // render()
    // checkCountDown()
} 

//----------------Event listeners----------------------------- 

boardEl.addEventListener('click', playGame)
// Delegated: add event listener to the parent element containing all the squares 

// add event listener to startGame the timer button 

// add event listener to reset button 

 

 

 