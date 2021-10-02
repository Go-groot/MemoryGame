var buttonColors = ["red","blue","green","yellow"];

var gamePattern = [];
var userPattern = [];

var started = false;
var level = 0;

$(document).keypress(function(){
    if( !started ){
        $("h1").text("level"+level);
        nextSequence();
        started = true;
    }
})


$(".box").click(function(){
        var userChosenButton = $(this).attr("id");
        userPattern.push(userChosenButton);
        
        playSound(userChosenButton);
        pressAnimate(userChosenButton);
        checkAnswer(userPattern.length - 1);
    })



function nextSequence() {
    userPattern = [];
    level++;
    $("h1").text("level "+ level);
    var randomeNumber = Math.floor(Math.random() * 4);

    var randomeColor = buttonColors[randomeNumber];

    gamePattern.push(randomeColor);

    playSound(randomeColor);
    $("#"+randomeColor).fadeIn(100).fadeOut(100).fadeIn(100);
}





function checkAnswer(atThisLevel){
    if(gamePattern[atThisLevel] === userPattern[atThisLevel]){
        if(gamePattern.length === userPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000)
        }
    }else {
        playSound("wrong")
        $("h1").text("Game Over, Press again ");
        $("body").addClass("gameOver");
        setTimeout(function(){
            $("body").removeClass("gameOver");            
        },200);
        startOver();
    }
}



function pressAnimate(color) {
    $("#"+color).addClass("pressed");
    setTimeout(function(){
    $("#"+color).removeClass("pressed");        
    },100);
}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play()
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}






























































// var buttonColors = ["red", "blue", "green", "yellow"]

// var gamePattern = [];
// var userPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function(){
//     if(!started){
//         $("h1").text("level "+ level)
//         nextSequence();
//         started = true;
//     }
// })

// function pressAnimate(button){
//     $("#"+button).addClass("pressed");
//     setTimeout(function(){
//         $("#"+button).removeClass("pressed")        
//     },100);
// }

// function checkAnswer(atThisLevel){
//     if(gamePattern[atThisLevel] === userPattern[atThisLevel]){
//         if(gamePattern.length === userPattern.length){
//             setTimeout(function(){
//                 nextSequence();
//             },1000)
//         }
//     }else {
//         playSound("wrong")
//         $("body").addClass("gameOver");
//         $("h1").text("Game Over, Start over");

//         setTimeout(function(){
//             $("body").removeClass("gameOver");
//         },200)
//         startOver();
//     }
// }


// function nextSequence() {
//     userPattern = [];
//     level++;
//     $("h1").text("level "+ level)    
//     var randomeNumber = Math.floor(Math.random() * 4);
//     var randomeColor = buttonColors[randomeNumber];
//     gamePattern.push(randomeColor);
    
//     $("#"+randomeColor).fadeIn(100).fadeOut(100).fadeIn(100);
//     playSound(randomeColor)
// }

// $(".box").click(function(){
//     var userChosenButton = $(this).attr("id");
//     userPattern.push(userChosenButton)
    
//     playSound(userChosenButton);
//     pressAnimate(userChosenButton);
//     checkAnswer(userPattern.length-1);
// });

// function playSound(name){
//     var audio = new Audio("sounds/"+ name +".mp3")
//     audio.play()
// }

// function startOver(){
//     level = 0
//     started = false;
//     gamePattern = [];
// }

