var questions = [
{
	question: "how many rings does lebron have?",
	answer: 3
},
{
	question: "what is 20 * 5?",
	answer: 100
},
{
	question: "what is 100 / 20?",
	answer: 5
},
{
	question: "what day in December is Xmas celebrated?",
	answer: 25
},
{
	question: "what year are we in?",
	answer: 2018
}
];

for (var i = 0; i < questions.length; i++) {
	var question = questions[i].question;
	var stuff = document.getElementById('question' + [i]);
	console.log(question, stuff);
	stuff.textContent = question;
};
// check answer when user submits quiz
function checkAnswer() {
	// store variables to update correct and incorrect totals
	var correct = 0;
	var incorrect = 0;
	// loop through questions array
	for (var i = 0; i < questions.length; i++) {
		// store each correct answer
		var answer = questions[i].answer;
		// store each user answer
		var guess = document.getElementById('answer' + [i]).value;
		// store element to add a class if correct or incorrect
		var questionSpot = document.getElementById('question' + [i]);
		// check if answer and correct answer match
		if (answer == guess) {
			// update class on questionSpot
			questionSpot.className = 'correct';
			// add one to correct
			correct++;

		} else {
			// update class on questionSpot
			questionSpot.className = 'incorrect';
			// add one to incorrect
			incorrect++;
		};
	};
	// update correct and incorrect values
	document.getElementById('correct').textContent = 'correct';
	document.getElementById('incorrect').textContent = 'incorrect';
}
