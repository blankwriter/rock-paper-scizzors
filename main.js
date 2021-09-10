const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb'){
 return userInput;
}

else{
  console.log(`ERROR!!!!`)
}
};
// console.log(getUserChoice('paper'));
const getComputerChoice = () => {
 getNumber = Math.floor(Math.random()* 3);
 switch (getNumber){
     case 0:
        return 'paper';
        break;
    case 1:
        return 'rock';
        break;    
    case 2:
        return 'scissors';
        break;    
 }
};  
//console.log(getComputerChoice());
const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === 'bomb'){
    return 'You won'
  }
  if(userChoice === computerChoice){
    return'The game is a tie';
  };

  if (userChoice === 'rock'){
  if (computerChoice === 'paper'){
    return 'computer won';
  }
  else{
   return 'you won';
  }
  }
  if (userChoice === 'paper'){
  if (computerChoice === 'scissors'){
    return 'computer won';
  }
  else{
   return 'you won';
  }
  }
  if (userChoice === 'scissors'){
  if (computerChoice === 'rock'){
    return 'computer won';
  }
  else{
   return 'you won';
  }
  }

}
//console.log(determineWinner('paper','scissors'));
const playGame = () => {
   const userChoice = getUserChoice('rock');
   const computerChoice = getComputerChoice();
   console.log(`You threw ${userChoice}`);
   console.log(`The computer ${computerChoice}`);
   
   console.log(determineWinner(userChoice,computerChoice))

}
playGame();



