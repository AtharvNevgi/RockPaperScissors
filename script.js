let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let userScore = document.querySelector(".userScore");
let computerScore = document.querySelector(".computerScore");
console.log(userScore.innerHTML);
console.log(computerScore.innerHTML);
let options = ["rock", "paper", "scissor"];
let computerChoice = options[Math.floor(Math.random() * options.length)]
// console.log(computerChoice);
rock.onclick = () => {
	rps(rock)
}
paper.onclick = () => {
	rps(paper)
}
scissor.onclick = () => {
	rps(scissor)
}

function rps(userChoice) {
	let userchoice = userChoice.alt;
	// console.log(userchoice)

	if(userchoice == 'rock' && computerChoice == 'paper'){
		document.computerScore.innerHTML = computerScore += 1;	
	}
	else if(userChoice == 'paper' && computerChoice == 'scissor'){
		document.computerScore.innerHTML += 1;
	}
	else if(userChoice == 'scissor' && computerChoice == 'rock'){
		document.computerScore.innerHTML += 1;
	}
	else {
		document.userScore.innerHTML += 1;
	}
}



