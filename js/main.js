var questions = [
{
	question: "how many rings does lebron have",
	answer: 3
},
{
	question: "what is 20 * 5",
	answer: 100
},
{
	question: "what is 100 / 20",
	answer: 5
},
{
	question: "what day in December is Xmas celebrated",
	answer: 25
},
{
	question: "what year are we in",
	answer: 2018
}
];

for (var i = 0; i < questions.length; i++) {
	var question = questions[i].question;
	var stuff = document.getElementById('question' + [i]);
	console.log(question, stuff);
};
function checkAnswer() {
	var correct = 0;
	var incorrect = 0;
	
}
