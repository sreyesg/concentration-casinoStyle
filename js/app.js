 
/* -----------------------HTML----------------------------*/ 

//boiler plate 

//body 

//div "instructions" 

//h1 id="stateMessage" 

//div*4 class="board" 

//forEach div.board =div*4 id="square 0 -4" 

 

//------------------------jS---------------------------------- 


//define a constant variable for winning combos 
const winningCombos
 

 

//------------------State Variables-------------------------- 

 
let userChoice
let countdown
let message
let win
let lose
let mistakes

//define variable for user's choice 

//define variable for countdown 

//define variable for message 

//define variable for win 

//define variable for lose 

//define variable for mistakes 

 

 

 

//-----------------Cache elements-------------------------- 

 

//Select the results displayed message 

 

//----------------Event listeners----------------------------- 

 

// Delegated: add event listener to the parent element containing all the squares 

// add event listener to startGame the timer button 

// add event listener to reset button 

 

//------------------Functions-------------------------------- 

 

// invoke the init function:  

// set all variables to initial state:  

// set countdown to 30 seconds; 

//set winner 

 

// using the event listeners setup, assign the player's choice to the player's choice variable 

// invoke get player function from game function 

 

 

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

 

// when countdown reaches zero: 

// IF Board is incomplete set looser to true and set message variable to "you lost, try again"  

 

 

 