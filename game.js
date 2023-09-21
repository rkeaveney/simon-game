var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    var randomColour = buttonColours[randomNumber];
    gamePattern.push(randomColour);

    $("#" + randomColour).fadeOut(100).fadeIn(100);

    var sound = new Audio("sounds/" + randomColour + ".mp3");
    //sound.play();
}

$(".btn").click(function (event) {
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});

nextSequence();