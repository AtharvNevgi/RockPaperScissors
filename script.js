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

	console.log(userchoice)
	console.log(computerChoice)

	if(userchoice == 'rock' && computerChoice == 'paper'){
		computer += 1;	
	}
	else if(userChoice == 'rock' && computerChoice == 'scissor'){
		user += 1;
	}
	else if(userChoice == 'rock' && computerChoice == 'rock'){
		pass
	}
	else if(userChoice == 'paper' && computerChoice == 'rock'){
		user += 1;
	}
	else if(userChoice == 'paper' && computerChoice == 'scissor'){
		computer += 1; 
	}
	else if(userChoice == 'paper' && computerChoice == 'paper'){
		computer += 1; user += 1;
	}
	else if(userChoice == 'scissor' && computerChoice == 'paper'){
		user += 1; 
	}
	else if(userChoice == 'scissor' && computerChoice == 'rock'){
		computer += 1; 
	}
	else if(userChoice == 'scissor' && computerChoice == 'scissor'){
		computer += 1; user += 1;
	}
	else {
		console.log('none')
	}


	console.log(user)
	console.log(computer)
}



