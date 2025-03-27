let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let userScore = document.querySelector(".userScore");
let computerScore = document.querySelector(".computerScore");

// console.log(userScore.innerHTML);
// console.log(computerScore.innerHTML);

let options = ["rock", "paper", "scissor"];

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

let user = 0;
let computer = 0;

function rps(userChoice) {
	let userchoice = userChoice.alt;
	let computerChoice = options[Math.floor(Math.random() * options.length)]

	if(userchoice == 'rock' && computerChoice == 'paper'){
		computer += 1;	
	}
	else if(userchoice == 'rock' && computerChoice == 'scissor'){
		user += 1;
	}
	else if(userchoice == 'rock' && computerChoice == 'rock'){
		computer += 1; user += 1;
	}
	else if(userchoice == 'paper' && computerChoice == 'rock'){
		user += 1;
	}
	else if(userchoice == 'paper' && computerChoice == 'scissor'){
		computer += 1; 
	}
	else if(userchoice == 'paper' && computerChoice == 'paper'){
		computer += 1; user += 1;
	}
	else if(userchoice == 'scissor' && computerChoice == 'paper'){
		user += 1; 
	}
	else if(userchoice == 'scissor' && computerChoice == 'rock'){
		computer += 1; 
	}
	else if(userchoice == 'scissor' && computerChoice == 'scissor'){
		computer += 1; user += 1;
	}
	else {
		console.log('none')
	}
	userScore.innerHTML = user;
	computerScore.innerHTML = computer;

	console.log("User: "+userScore.innerHTML +" "+ userchoice)
	console.log("Computer: "+computerScore.innerHTML +" "+ computerChoice)
}



