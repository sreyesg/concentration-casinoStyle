 console.log('sanity check')
//------------------------jS---------------------------------- 


//define a constant variable for winningcombos 
let winningCombos = [
    [3,14], 
    [1,8], 
    [5,12], 
    [6,13], 
    [0,15],
    [10,11],
    [2,7],
    [4,9]
]
// console.table(winningCombos)
// const iconsCollection
// update card images dynamically
// make winnigCombos a biproduct of dynamicaally updating cardImages
// explore .sort() method
 const cardImages = ['E','B','G','A','H','C','D','G','B','H','F','F','C','D','A','E']

 

//------------------State Variables-------------------------- 

  
let userChoice
let playerChoichesArr = []
let matchedPair = false
let message
let win
let lose
let mistakes
let playerChoiceId
let allBoardPositions = []
let timeLeft 
let intervalId 
 
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
countdownEl = document.querySelector('#countdown')
// console.log(squareEls[2])
 

//------------------Functions-------------------------------- 

 

// invoke the init function:  
const init = () => {
    // userChoice = ''
    // countdown = 0
    // message = ''
    // win = false
    // mistakes = 0
    getAllBoardPositions()

}


// add to init function
const getAllBoardPositions = () => {
    console.log('getAllBoardPositions completed')
    allBoardPositions = []
    winningCombos.map((combo) => {
        combo.map(position => allBoardPositions.push(position))
    })
}

// INITIATE GAME
// set all variables to initial state:  
// set countdown to 30 seconds; 
//set winner to false
init()
 

// using the event listeners setup, assign the player's choice to the player's choice variable 
// Get the event's ID
const getPlayerChoiceId = (event) => {
    playerChoiceId = Number(event.target.id)
    
}

// Using the event ID display the Card
const displayCard = () => {
    squareEls[playerChoiceId].innerHTML = cardImages[playerChoiceId]
}

// after two player's clicks: 
// compare the first and second choices with the winning combos 
// IF the set matches any winning combo 
    //THEN keep the choices visible 
    //ELSE hide choices and add 1 to the mistakes variable and render a message  

const collectPlayerChoices = () => {
    playerChoichesArr.push(playerChoiceId)
    console.log('array of player choices ---->', playerChoichesArr)
    // console.log('this is choices collection inside check winning', playerChoichesArr)
}
// Check for Matched Pair when PlayerChoicesArr.lenght < 2 
const checkForMatchedPair = (event) => {
    console.log(playerChoichesArr)
    if (playerChoichesArr.length < 2){
        return
    }else {
        winningCombos.map((combo) => {
            // console.log(combo)
            let checkIsInWinCombo = choice => combo.includes(choice)
            if(playerChoichesArr.every(checkIsInWinCombo)){
                console.log('that is a matching pair')
                matchedPair = true
                // console.log(matchedPair)
            }else {
                // const playerChoicesObj = {playerChoichesArr,
                //     firstGuess: squareEls[playerChoichesArr[0]].textContent,
                //     secondGuess: squareEls[playerChoichesArr[1]].textContent,
                    
                // }
                displayMessageEl.innerHTML = 'Wrong Guess!!'
            }
        })           
                
    }
}

// Delete the matched pair position from the Winning Combos array
const updateWinCombosArr = () => {
    
    if (matchedPair === false){
        return
    
    }else if(playerChoichesArr.length < 2){
        return
    
    }else {
        console.log('BEFORE POPPING>>>')
        console.table(winningCombos)
        console.log('arrPlayerChoices ****', playerChoichesArr)

        winningCombos = winningCombos.filter((combo, idx) => {
            let [value1, value2] = playerChoichesArr
            // console.log('this is the combo to analize', combo)
            // console.log('destructuring choice', {value1, value2})
            let [combo1, combo2] = combo
            // console.log('distructuring combo', {combo1, combo2})
            if (combo1 !== value1 && combo2 !== value2){
                return true
            }
            // return true
        })
        // console.table(foundIdx)
    console.table(winningCombos)
    }
    
}

// Render board using winningCombos array
const updateBoard = () => {
    if (playerChoichesArr.length < 2){
        return
    }else {
        
        winningCombos.map((combo) => {
            combo.map((position) => {
                // console.log('winAtThisPosition', position)
                squareEls[position].innerHTML = '-'
            })           
        })
    }
}


// CHECK FIRST WINNING CONDITION
// Check board 
    // IF board is completed 
    //THEN set win to true 

const isBoardCompleted = () => {
    console.log(winningCombos.length)
    if (winningCombos.length === 0){
        win = true
        console.log(win)
    }
}

// render the game message to the DOM 
const updateMessage = () => {
    console.log(matchedPair)
    if (matchedPair === true){
        displayMessageEl.innerHTML = 'Pair Unlocked!'
    }
}
 
const finalMessage = () => {
    if (win === true){
        displayMessageEl.innerHTML = 'Congratulations you WON!'
    }
}


// Update player choicerArr to empty string and Matchedpair Variable to false
const resetPlayerChoicesArr = () => {
    if (playerChoichesArr.length < 2) {
        return
    }else {
        console.log('playerChoichesArr is greater 2', playerChoichesArr)
        playerChoichesArr = [] 
        matchedPair = false
        console.log('empty PlayerChoicesArr >>>>', playerChoichesArr.length)

    }
}


// invoke the primary render function 



 

// check mistakes 
// IF mistakes variable is less than 2 return/continue game 
//ELSE set looser to true and set message variable to "you reached two mistakes, you lost. Please try again" 

 

// Code a countdown timer
// add this function to the INIT function with the intended seconds
// the time left variable is a number that is in the gobal scope 
// if Matched add to the timeLeft Global variable x seconds
 const countdownTimer = (seconds) => {
    // setting up the countdown second
    timeLeft = seconds
    intervalId = setInterval(countdown, 1000)    
    return 'the countdown starting up'
}

function  countdown  () {
    if(timeLeft === 0){
        clearInterval(intervalId)
    }else { 
        console.log(timeLeft)
        timeLeft--
        countdownEl.innerHTML = timeLeft
        console.log("seconds left =", timeLeft)    
    } 
}
// console.log(countdownTimer(10))
// Render message to player. 
const render = () => {
    // displayMessageEle.innerHtml = message
} 
 

// when countdown reaches zero: 

// IF Board is incomplete set looser to true and set message variable to "you lost, try again"  

const playGame = (event) => {
    // startCountdown()
    getPlayerChoiceId(event) //and collections
    displayCard()
    collectPlayerChoices()
    checkForMatchedPair(event)
    updateWinCombosArr()
    updateBoard()
    isBoardCompleted()
    updateMessage()
    resetPlayerChoicesArr()
    finalMessage()
    // render()
    // checkCountDown()
} 

//----------------Event listeners----------------------------- 

boardEl.addEventListener('click', playGame)
// Delegated: add event listener to the parent element containing all the squares 

// add event listener to startGame the timer button 

// add event listener to reset button 

 

 

 