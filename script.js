let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let userScore = document.querySelector(".userScore");
let computerScore = document.querySelector(".computerScore");
let result = document.querySelector(".result");
let textResult = document.querySelector(".textResult");

// console.log(userScore.innerHTML);
// console.log(computerScore.innerHTML);

let options = ["rock", "paper", "scissor"];
let imgOptions = ["images/Rock.png", "images/Paper.png", "images/Scissor.png"]
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
	let randomNumber = Math.floor(Math.random() * options.length)
	let computerChoice = options[randomNumber]
	result.src = imgOptions[randomNumber]

	// setTimeout(() => {
	// 	result.src = "";
	// 	textResult.innerHTML = ""
	// }, 1000) ;

	if(userchoice == computerChoice){
		console.log("It's a tie!");
		textResult.innerHTML = "It's a tie!"
		setTimeout(() => {
			result.src = "";
			textResult.innerHTML = ""

		}, 1000) ;
	}
	else if(userchoice == 'rock' && computerChoice == 'paper'){
		computer += 1;	
		textResult.innerHTML = "Lose.."
		setTimeout(() => {
			result.src = "";
			textResult.innerHTML = ""
			
		}, 1000) ;
	}
	else if(userchoice == 'rock' && computerChoice == 'scissor'){
		user += 1;
		textResult.innerHTML = "Win!"
		setTimeout(() => {
			result.src = "";
			textResult.innerHTML = ""
			
		}, 1000) ;
	}
	else if(userchoice == 'paper' && computerChoice == 'rock'){
		user += 1;
		textResult.innerHTML = "Win!"
		setTimeout(() => {
			result.src = "";
			textResult.innerHTML = ""
			
		}, 1000) ;
	}
	else if(userchoice == 'paper' && computerChoice == 'scissor'){
		computer += 1; 
		textResult.innerHTML = "Lose.."
		setTimeout(() => {
			result.src = "";
			textResult.innerHTML = ""
			
		}, 1000) ;
	}
	else if(userchoice == 'scissor' && computerChoice == 'paper'){
		user += 1; 
		textResult.innerHTML = "Win!"
		setTimeout(() => {
			result.src = "";
			textResult.innerHTML = ""
			
		}, 1000) ;
	}
	else if(userchoice == 'scissor' && computerChoice == 'rock'){
		computer += 1; 
		textResult.innerHTML = "Lose.."
		setTimeout(() => {
			result.src = "";
			textResult.innerHTML = ""
			
		}, 1000) ;
	}
	else {
		console.log('none')
	}
	userScore.innerHTML = user;
	computerScore.innerHTML = computer;

	console.log("User: "+userScore.innerHTML +" "+ userchoice)
	console.log("Computer: "+computerScore.innerHTML +" "+ computerChoice)
}



