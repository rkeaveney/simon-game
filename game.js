var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function playSound (name) {
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    var randomColour = buttonColours[randomNumber];
    gamePattern.push(randomColour);

    $("#" + randomColour).fadeOut(100).fadeIn(100);

    playSound(randomColour);
}

$(".btn").click(function (event) {
    var userChosenColour = event.target.id;
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});

nextSequence();