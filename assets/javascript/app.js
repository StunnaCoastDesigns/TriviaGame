// global variables

//counters
var correct = 0;
var incorrect = 0;
var unanswered = 0;

var timer = 60;

//questions
var questions = [{
    question: "What decade did Deborah cox's song: Nobody Suppose To Be Here come out?",
    answers: ["80's", "70's", "90's"],
    correctAnswer: "90's"
}, {
    question: "Monica's first album was Miss Thang?",
    answers: ["True", "False"],
    correctAnswer: "True"
}, {
    question: "Eve and Faith Evans sung Love Is Blind together?",
    answers: ["Yes", "No"],
    correctAnswer: "Yes",
}, {
    question: "Bell Biv DeVoe warned everyone that the girl was bad in 1990 song?",
    answers: ["Poison", "B.B.D", "I Do Need You", "Can You Stand The Rain"],
    correctAnswer: "Posion",
}, {
    question: "Toni Braxton wanted her man to say he loved her again in what 1996 song?",
    answers: ["I Don't Want To", "Breathe Agian", "FOH", "Un-Break My Heart"],
    correctAnswer: "Un-Break My Heart"
}, {
    question: "Brain Mcknight repeated steps 1 thru 3 in what 1999 hit song?",
    answers: ["Anytime", "Back At One", "One Last Cry", "U-Turn"],
    correctAnswer: "Back At One"
}, {
    question: "Blackstreet said, I can't get her out of my mind, well, I think about the girl all the time in what 1996 song?",
    answers: ["No Diggity", "Pony", "Wannabe", "Gangsta's Paradise"],
    correctAnswer: "No Diggity"
}, {
    question: "Bone-Thugs -n- Harmony sang while you laughin' we passing away, and we pray and we pray everyday. What's the title of this 1996 song?",
    answers: ["Thuggish Ruggish Bone", "1st of tha Month", "The Crossroads", "I Tried"],
    correctAnswer: "The Crossroads"
}, {
    question: "Not too hard not too soft, Boyz II Men were doin' a little east coast swing in what 1991 hit song?",
    answers: ["MtownPhilly", "CooleyHighHarmony", "Another Bad Creation", "On Bended Knee"],
    correctAnswer: "MtownPhilly"
}];

//global function
function startgame() {

}


//Game Logic Begins Here
$(document).ready(function () {
    $("#start").on("click", function () {
        $("#start").remove();
        console.log("You clicked start")
        console.log(questions);
        // create div to append into so that it only appears when the button is clicked
        $("#game").append("<div id='gameBody'></div>");
        // loop through questions with radio answers-break between questions and answers
        for (var i = 0; i < questions.length; i++) {
            $("#gameBody").append('<h3>' + questions[i].question + '<h3>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#gameBody").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j] + "<br>");
            }
            $("#gameBody").append("<br>");
        }

    })

})