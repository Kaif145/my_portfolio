

let element = document.querySelectorAll(".element");
let usreS = document.querySelector(".uS");
let messege = document.querySelector(".mesg");
let cS = document.querySelector(".comS");
let resetButton = document.querySelector(".playAgainBtn");
let userScor = parseInt(localStorage.getItem("userScor")) || 0;
let computerScor = parseInt(localStorage.getItem("computerScor")) || 0;

// Set the score in UI
usreS.innerHTML = userScor;
cS.innerHTML = computerScor;

const genChoice = ()=> {
    const options = ["rock" , "paper", "scissors"];
    const randIndx = Math.floor(Math.random() *3);
    return options[randIndx];
  
};
const showWinner =(userWin)=>{
    if(userWin){
        console.log("YOu won!");
        userScor++;
        usreS.innerHTML = userScor;
        messege.style.backgroundColor = "#28a745";
        messege.innerHTML="You Won the game congrats";
        localStorage.setItem("userScor", JSON.stringify(userScor));
        
    }else if(userWin === false){
        console.log("Computer won!");
        computerScor++;
        cS.innerHTML = computerScor;
        messege.style.backgroundColor = "#8b0000";
        messege.innerHTML= "You lose the game!";
        localStorage.setItem("computerScor", JSON.stringify(computerScor));

    }else{
       
        gameDrow();
    }
   
   

}
const gameDrow=()=>
{
    messege.innerHTML="the game was drow";
    messege.style.backgroundColor = "white"

};

const playGame = (usearChoice)=>{
    
    
    console.log("user choies: ",usearChoice);
    const comphoice = genChoice();
    console.log("Computer Choies: ",comphoice);

    if(usearChoice === comphoice){
        gameDrow();
        
    }else{
    let userWin = true;
    if(usearChoice === "rock"){
       userWin = comphoice === "paper" ? false: true;
    }else if (usearChoice === "paper"){
        userWin = comphoice === "scissors" ? false : true;
    }else {
    userWin = comphoice === "rock"? false : true;
    }

showWinner(userWin);
}
};






element.forEach(element => {
    element.addEventListener("click", ()=>{
        const usearChoice = element.getAttribute("id");
      
        playGame(usearChoice);
        
    })
});

resetButton.addEventListener("click", ()=>{
    localStorage.removeItem("userScor");
    localStorage.removeItem("computerScor");
    userScor = 0;
    computerScor = 0;
    usreS.innerHTML = userScor;
    cS.innerHTML = computerScor;
    messege.innerHTML = "Game reseted";
    messege.style.backgroundColor = "white";
    
}
);




