//this is working
//now I want to make a midterm game for the first question at least

//what day is it today
//I need to have an array of days
//I need to make a div to hold everything
//I need to make a loop to go through each of the days and put them into the box

let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const questionSection = document.querySelector('.question-section');
const bodySection = document.querySelector('.body-section');

//
let date = new Date();
let	day = date.getDay();
let count = 0;

//create the score counter
const score = document.createElement('div');
score.textContent = count;
score.setAttribute('class', 'score');
document.body.appendChild(score);

//set up Question 1
//What day is it today?
function whatDay() {
	let question = document.createElement('h1');
	question.textContent = "What day is it today?"
	questionSection.appendChild(question);
	for (i = 0; i < daysOfWeek.length; i++) {
		let div = document.createElement('div');
		div.textContent = daysOfWeek[i];
		div.setAttribute('id', i);
		div.setAttribute('class','days-of-week');
		div.addEventListener('click', submitWhatDay);
		bodySection.appendChild(div);
	}
}
whatDay();
//submit answer for What day is it today?
function submitWhatDay(e) {
	let answer;
	if (Number(e.target.id) === day) {
		alert(`Yes! It is ${daysOfWeek[day]}!`);
		answer = "yes";
	} else {
		alert(`No! It is not ${daysOfWeek[e.target.id]}!`)
		answer = "no"
	}

	if (answer === "yes") {
		count++;
		score.textContent = count;
		console.log(count);
		while (questionSection.firstChild) {
			questionSection.removeChild(questionSection.firstChild);
		}
		while (bodySection.firstChild) {
			bodySection.removeChild(bodySection.firstChild);
		}
		countBlocks();
	}

	
}

//set up question 2
//Look at the picture. How is the weather?
function countBlocks() {
	let question = document.createElement('h1')
	question.textContent = "Count the blocks?"
	questionSection.appendChild(question);

	let randomNumber = 0;
}


