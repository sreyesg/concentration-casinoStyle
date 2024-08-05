 console.log('sanity check')
//------------------------jS---------------------------------- 


//define a constant variable for winning combos 
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
console.table(winningCombos)
// const iconsCollection
// update card images dynamically
// make winnigCombos a biproduct of dynamicaally updating cardImages
// explore .sort() method
 const cardImages = ['E','B','G','A','H','C','D','G','B','H','F','F','C','D','A','E']

 

//------------------State Variables-------------------------- 

  
let userChoice
let playerChoichesArr = []
let matchedPair = false
let countdown
let message
let win
let lose
let mistakes
let playerChoiceId
let allBoardPositions = []
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
init()
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
    playerChoichesArr.push(playerChoiceId)
    console.log('array of player choices ---->', playerChoichesArr)
    // console.log('this is choices collection inside check winning', playerChoichesArr)
}

// invoke get player function from game function 
const checkWinningCombo = () => {
    console.log('this is playerChoichesArr inside check winning', playerChoichesArr)
    if (playerChoichesArr.length < 2){
        return
    }else {
        winningCombos.map((combo) => {
            // console.log(combo)
            let checkIsInWinCombo = choice => combo.includes(choice)
            if(playerChoichesArr.every(checkIsInWinCombo)){
                console.log('that is a matching pair')
                matchedPair = true
                console.log(matchedPair)
            }
        })           
                
    }
}

const updateWinCombosArr = () => {
    
    // console.log('matchedPair Value FROM update wincombosarr()', matchedPair)
    if (matchedPair === false){
        return
    
    }else {
        console.log('BEFORE POPPING>>>', winningCombos)
        console.log('arrPlayerChoices ****', playerChoichesArr)

        winningCombos = winningCombos.filter((combo, idx) => {
            let [value1, value2] = playerChoichesArr
            console.log(combo)
            console.log({value1, value2})
            let [combo1, combo2] = combo
            console.log({combo1, combo2})
            if (combo1 === value1 && combo2 === value2){
                console.log(combo,idx)
                // winningCombos.splice(idx,1)
                return false
            }
            return true
        })
        

        // console.table(foundIdx)
        console.table(winningCombos)
    }
    
}

// update player choicerArr to empty string

// const updatePlayerChoicesArr ()
// playerChoichesArr = []
const updateBoard = () => {
    allBoardPositions.map((position) => {
        squareEls[position].innerHTML = ''
    })
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
    updateWinCombosArr()
    // updatePlayerChoicesArr()
    // updateBoard()
    // render()
    // checkCountDown()
} 

//----------------Event listeners----------------------------- 

boardEl.addEventListener('click', playGame)
// Delegated: add event listener to the parent element containing all the squares 

// add event listener to startGame the timer button 

// add event listener to reset button 

 

 

 