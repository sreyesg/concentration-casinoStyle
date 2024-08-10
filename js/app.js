 
const cardImages = ['🎲','🎰','🂷','🍀','♣️','💰','🃏','🂷','🎰','♣️','🃑','🃑','💰','🃏','🍀','🎲']

let winningCombos
let playerChoichesArr 
let matchedPair 
let message
let win
let lose
let mistakesCounter 
let playerChoiceId
let allBoardPositions  
let timeLeft 
let intervalId 
let previousWinCombos


const displayMessageEl = document.querySelector('#message')
const boardEl = document.querySelector('#board')
const squareEls = document.querySelectorAll('.square')
const countdownEl = document.querySelector('#countdown')
const StartGameEl = document.querySelector('#btnStartGame') 
const mistakesEl = document.querySelector('#mistakes')


// On load
winningCombos = [
    [3,14], 
    [1,8], 
    [5,12], 
    [6,13], 
    [0,15],
    [10,11],
    [2,7],
    [4,9]
]

winningCombos.map((combo, idx1) => {
    combo.map((position, idx) => {
        squareEls[position].innerHTML = cardImages[position]
    })
})


// Define init
const init = () => {
    playerChoichesArr = []
    matchedPair = false
    displayMessageEl.innerHTML = 'Good Luck!!'
    mistakesEl.innerHTML = ''
    win = false
    mistakesCounter = 0 
    previousWinCombos = 8
    boardEl.classList.remove('disabled')
    countdownTimer(60)
    winningCombos = [
        [3,14], 
        [1,8], 
        [5,12], 
        [6,13], 
        [0,15],
        [10,11],
        [2,7],
        [4,9]
    ]
    resetBoard()
}



const resetBoard = () => {
        
    winningCombos.map((combo) => {
        combo.map((position) => {
            squareEls[position].innerHTML = '-'
        })           
    })
}



// INITIATE GAME
    // set all variables to initial state:  
    // set countdown to 30 seconds; 
    //set winner to false
    

// Code a countdown timer
// add this function to the INIT function with the intended seconds
// the time left variable is a number that is in the gobal scope 
// if Matched add to the timeLeft Global variable x seconds
function countdownTimer (seconds) {
    // setting up the countdown second
    timeLeft = seconds
    intervalId = setInterval(countdown, 1000)    
    return 'the countdown starting up'
}

function  countdown  () {
    if(timeLeft === 0){
        countdownEl.innerHTML = `Time is up!`
        displayMessageEl.innerHTML = 'Time is up, you lost!'
        boardEl.classList.toggle('disabled')

        clearInterval(intervalId)
    }else { 
        // console.log(timeLeft)
        timeLeft--
        countdownEl.innerHTML = ` ${timeLeft} seconds left!`
        // console.log("seconds left =", timeLeft)    
    } 
}


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
                // notIncludedInCombo += 1
                
            }
        })      
            
    }
    // console.log("NOT INCLUDED VALUE >>>", notIncludedInCombo)    
}

// Delete the matched pair position from the Winning Combos array
const updateWinCombosArr = () => {
    
    if (matchedPair === false){
        return
    
    }else if(playerChoichesArr.length < 2){
        return
    
    }else {
        console.log('BEFORE POPPING>>>')
        // console.table(winningCombos)
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
    // console.table(winningCombos)
    }
    
}

// Render board using winningCombos array
const updateBoard = () => {
    if (playerChoichesArr.length < 2){
        return
    }else {
        
        winningCombos.map((combo) => {
            combo.map((position) => {
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
    // console.log(winningCombos.length)
    if (winningCombos.length === 0){
        win = true
        clearInterval(intervalId)
        console.log(win)
    }
}

// Update mistakesCounter
const updateMistakesCounter = () => {
    console.log('winCombosat223', winningCombos.length)
    if (playerChoichesArr.length < 2) {
        return
    }else if(winningCombos.length === previousWinCombos){
        mistakesCounter += 1
        
    } 
    console.log("UPDATE MISTAKESCOUNTER", mistakesCounter)
    mistakesEl.innerHTML = `${mistakesCounter} mistake(s)`
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
        previousWinCombos = winningCombos.length
        console.log('PREVIOUS COMBO VALUE IS .>>' , previousWinCombos)
        notIncludedInCombo = 0
        // console.log('empty PlayerChoicesArr >>>>', playerChoichesArr.length)

    }
}


// check mistakes 
    // IF mistakes variable is less than 2 return/continue game 
    //ELSE set looser to true and set message variable to "you reached two mistakes, you lost. Please try again" 
const checkForloose = () => {
    
    if (mistakesCounter === 8){
        boardEl.classList.toggle('disabled')
        displayMessageEl.innerHTML = "Good try! \nBetter luck next time."
        clearInterval(intervalId)
    }
}
 


const playGame = (event) => {
    getPlayerChoiceId(event) 
    displayCard()
    collectPlayerChoices()
    checkForMatchedPair(event)
    updateWinCombosArr()
    updateMistakesCounter()
    updateBoard()
    isBoardCompleted()
    updateMessage()
    resetPlayerChoicesArr()
    finalMessage()
    checkForloose()
    // render()
    // checkCountDown()
} 

//----------------Event listeners----------------------------- 

// Delegated: add event listener to the parent element containing all the squares 
boardEl.addEventListener('click', playGame)

// add event listener to reset button 
StartGameEl.addEventListener('click', init)


 

 

 