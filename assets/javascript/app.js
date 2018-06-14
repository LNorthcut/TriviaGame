var questions = [{
    quesiton: "How old is Lauren",
    alternatives: [29, 34, 26, 25],
    right: 3
}, {
    quesiton: "What type of pet does Lauren own?",
    alternatives: ["cat", "dog", "husband", "goldfish"],
    right: 1
}, {
    quesiton: "What color does Lauren reference the most?",
    alternatives: ["red", "pink", "green", "who knows and who cares"],
    right: 1
}, {
    quesiton: "Lauren has a tattoo on her neck",
    alternatives: [true],
    right: 0
}];

var correctAnswers = 0;
var id = 0;

function loadTheQuestions ()
{
    document.getElementById(quesiton).innerHTML = "<h1> "+questions[id].question +" </h1>";

    document.getElementById("1").innerHTML = quesitons[id].alternatives[0];
    document.getElementById("2").innerHTML = quesitons[id].alternatives[1];

}