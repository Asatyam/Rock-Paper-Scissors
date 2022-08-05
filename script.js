function getComputerChoice(){
    let words = ["rock", "paper", "scissors"];
    return words[Math.floor(Math.random()*3)];
}
function round(playerSelection, computerSelection)
{
    let playerSelection1 = playerSelection.toLowerCase();
    let win = "You win";
    let lose = "You lose";
    if (playerSelection1 === "rock" && computerSelection === "scissors" || playerSelection1 === "scissors" && computerSelection === "paper" || playerSelection1 === "paper" && computerSelection === "rock") 
        return win;
   else {
        return lose;
   }
}
function game()
{
    for(let i = 0;i<5;i++)
    {
        let playerSelection = prompt("Enter your choice:");
        let computerSelection = getComputerChoice();
        console.log(playerSelection,computerSelection);
        let result = round(playerSelection,computerSelection);
        if(result=="You win") 
        {
            console.log("You win this round");
            countPlayer++;
        }
        else if(result =="You lose")
        {
            console.log("You lose this round");
            countComputer++;
        }
        else
        {
            i--;
            console.log("It's a tie");
        }
        console.log("Player win count: " + countPlayer);
        console.log("Computer win count:" + countComputer);

    }
    if(countPlayer>countComputer) console.log("Congratulations! You win.");
    else console.log("Sorry! Better luck next time");
}
let countPlayer = 0
    countComputer = 0;
    game();



