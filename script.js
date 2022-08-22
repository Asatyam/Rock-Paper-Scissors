let countPlayer = 0
countComputer = 0;

function getComputerChoice() {
    let words = ["rock", "paper", "scissors"];
    return words[Math.floor(Math.random() * 3)];
}

function game(playerSelection,computerSelection) {
   
        
        console.log(playerSelection, computerSelection);
        let result = playRound(playerSelection, computerSelection);
        if (result == "You win") {
            console.log("You win this round");
            countPlayer++;
        }
        else if (result == "You lose") {
            console.log("You lose this round");
            countComputer++;
        }
        else {
          //  i--;
            
        }
    document.getElementById('computerChoice').textContent = `Computer's Choice: ${computerSelection}`;
    document.getElementById('playerOutput').textContent = `Player: ${countPlayer}`;
    document.getElementById('computerOutput').textContent = `Computer: ${countComputer}`;
    
    if(countPlayer===5||countComputer===5)
    {
        document.getElementById('finalResult').textContent = countPlayer>countComputer?"You Win":"You Lose";
        let answer = window.confirm("Do you want to play again?");
        if (answer) {
            countPlayer = countComputer = 0;
        }
    }
    
    
}

function playRound(playerSelection, computerSelection) {
    let playerSelection1 = playerSelection.toLowerCase();
    let win = "You win";
    let lose = "You lose";
    if (playerSelection1 === "rock" && computerSelection === "scissors" ||
     playerSelection1 === "scissors" && computerSelection === "paper" || 
     playerSelection1 === "paper" && computerSelection === "rock")
        return win;
    else if(playerSelection1 == computerSelection) return "tie";
    else {
        return lose;
    }
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      game(button.id,getComputerChoice());
    });
    
});

/* function getComputerChoice() {
    let words = ["rock", "paper", "scissors"];
    return words[Math.floor(Math.random() * 3)];
}
function round(playerSelection, computerSelection) {
    let playerSelection1 = playerSelection.toLowerCase();
    let win = "You win";
    let lose = "You lose";
    if (playerSelection1 === "rock" && computerSelection === "scissors" || playerSelection1 === "scissors" && computerSelection === "paper" || playerSelection1 === "paper" && computerSelection === "rock")
        return win;
    else {
        return lose;
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice:");
        let computerSelection = getComputerChoice();
        console.log(playerSelection, computerSelection);
        let result = round(playerSelection, computerSelection);
        if (result == "You win") {
            console.log("You win this round");
            countPlayer++;
        }
        else if (result == "You lose") {
            console.log("You lose this round");
            countComputer++;
        }
        else {
            i--;
            console.log("It's a tie");
        }
        console.log("Player win count: " + countPlayer);
        console.log("Computer win count:" + countComputer);

    }
    if (countPlayer > countComputer) console.log("Congratulations! You win.");
    else console.log("Sorry! Better luck next time");
}
let countPlayer = 0
countComputer = 0;
game();


 */
/* function test(str)
{
    let playerSelection =  str.toLowerCase();
    if(playerSelection==="rock")
    {
        countr++;
        console.log(countr);
    }
    if (playerSelection === "paper") {
        countp++;
        console.log(countp);
    }
    if (playerSelection === "scissors") {
        counts++;
        console.log(counts);
    }
    alert("it worked "+playerSelection);
} */