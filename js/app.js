 
const boardImages = ['🎲','🎰','🂷','🍀','♣️','💰','🃏','🂷','🎰','♣️','🃑','🃑','💰','🃏','🍀','🎲'] 

let winningCombos
let playerChoichesArr 
let matchedPair 
let message
let win
let mistakesCounter 
let playerChoiceId
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

// map over nested array to display all images
winningCombos.map((combo) => {
    combo.map((position) => {
        squareEls[position].innerHTML = boardImages[position]
    })
})


// init definition
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
    resetBoard()
}



const resetBoard = () => {
        
    winningCombos.map((combo) => {
        combo.map((position) => {
            squareEls[position].innerHTML = '-'
        })           
    })
}


    
// countdown
function countdownTimer (seconds) {
    
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
        
        timeLeft--
        countdownEl.innerHTML = ` ${timeLeft} seconds left!`
    } 
}


// using the event listeners setup, assign the player's choice to the player's choice variable 
// Get the event's ID
const getPlayerChoiceId = (event) => {
    playerChoiceId = Number(event.target.id)
    
}

// Using the event ID display the Card
const displayImage = () => {
    squareEls[playerChoiceId].innerHTML = boardImages[playerChoiceId]
    
}

// after two player's clicks: 
    // compare the first and second choices with the winning combos 
    // IF the set matches any winning combo 
        //THEN keep the choices visible 
    //ELSE hide choices and add 1 to the mistakes variable and render a message  

const collectPlayerChoices = () => {
    playerChoichesArr.push(playerChoiceId)
    
}
// Check for Matched Pair when PlayerChoicesArr.lenght < 2 
const checkForMatchedPair = () => {
    
    if (playerChoichesArr.length < 2){
        return
    }else {
        winningCombos.map((combo) => {
            
            let checkIsInWinCombo = choice => combo.includes(choice)
            if(playerChoichesArr.every(checkIsInWinCombo)){
                matchedPair = true
               
            }else {
               
                displayMessageEl.innerHTML = 'Wrong Guess!!'
                
            }
        })      
            
    }  
}

// Delete the matched pair index from the Winning Combos array
const updateWinCombosArr = () => {
    
    if (matchedPair === false){
        return
    
    }else if(playerChoichesArr.length < 2){
        return
    
    }else {

        winningCombos = winningCombos.filter((combo, idx) => {
            let [value1, value2] = playerChoichesArr
            let [combo1, combo2] = combo
            
            if (combo1 !== value1 && combo2 !== value2){
                return true
            }
        
        })
        
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
    
    if (winningCombos.length === 0){
        win = true
        clearInterval(intervalId)
    }
}

// Update mistakesCounter
const updateMistakesCounter = () => {
    
    if (playerChoichesArr.length < 2) {
        return
    }else if(winningCombos.length === previousWinCombos){
        mistakesCounter += 1
        
    } 
    mistakesEl.innerHTML = `${mistakesCounter} mistake(s)`
}

// render the game message to the DOM 
const updateMessage = () => {
    
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
        
        playerChoichesArr = [] 
        matchedPair = false
        previousWinCombos = winningCombos.length
        
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
    displayImage()
    collectPlayerChoices()
    checkForMatchedPair()
    updateWinCombosArr()
    updateMistakesCounter()
    updateBoard()
    isBoardCompleted()
    updateMessage()
    resetPlayerChoicesArr()
    finalMessage()
    checkForloose()
} 

//----------------Event listeners----------------------------- 

// Delegated: add event listener to the parent element containing all the squares 
boardEl.addEventListener('click', playGame)

// add event listener to reset button 
StartGameEl.addEventListener('click', init)


 

 
// -------graveyard-------------------------------------------
  // const playerChoicesObj = {playerChoichesArr,
                //     firstGuess: squareEls[playerChoichesArr[0]].textContent,
                //     secondGuess: squareEls[playerChoichesArr[1]].textContent,
                    
                // }