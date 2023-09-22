var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).on("keydown", function() {
    if (started === false) {
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    var randomColour = buttonColours[randomNumber];
    gamePattern.push(randomColour);
    userClickedPattern = [];
    level++;

    $("#" + randomColour).fadeOut(100).fadeIn(100);

    playSound(randomColour);
    $("h1").text("Level " + level);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] !== userClickedPattern[currentLevel]) {
        $("body").addClass("game-over");
        setTimeout(function () {$("body").removeClass("game-over");}, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
    else {
        setTimeout(function () {nextSequence();}, 1000);
    }
}

function startOver() {
    gamePattern = [];
    level = 0;
    started = false;
}

$(".btn").click(function (event) {
    if (started) {
        var userChosenColour = event.target.id;
        animatePress(userChosenColour);
        playSound(userChosenColour);
        userClickedPattern.push(userChosenColour);
        checkAnswer(userClickedPattern.length);
    }
});

function playSound (name) {
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");
    setTimeout(function () {
        $("." + currentColour).removeClass("pressed");}, 100);
}