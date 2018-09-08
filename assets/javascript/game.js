$(document).ready(function(){
    var x=window.confirm("Warning! Are you sure you want to play?")
    if (x){
        window.alert("You are responsible for your fate ")
    }
    else{
        window.alert("Its calling you to play")
    };
       
    

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; // array to push user choices to
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from
var letter="";
function restartgame(){
        //choose random letter
        letter=computerChoices[Math.floor(Math.random()*computerChoices.length)]; 
        //clear guesses left
        guessesLeft=9;
        //clear guesses so far   
        guessesSoFar=[];
        $("#left").html(guessesLeft);
         $("#guesses").html(guessesSoFar);
    }
    restartgame();
    console.log(letter);
    $("#music").click(function(){
        var audio = document.getElementById("musicsrc");
        audio.play();
    })
    $(".pause-button").click(function(){
        var audio = document.getElementById("musicsrc");
        audio.pause();
    })
   $(document).keypress(function(e){
    //check which key the user press
    var userkey= e.key;
    //if it matches update wins restart the game
    if(userkey==letter){
        console.log('jhghj')
        $("#musicwin").volume= 0.5;
            $("#musicwin").trigger("play");
        alert("It seem you won but I can give you more, I will contact you when you want greater fortune");
        wins+=1;
        $("#wins").html(wins);
         restartgame();
    } else{
        //if it does not match increase loses counter, decrease guess left, and add the letter to guesses so far
        guessesLeft-=1;
         $("#left").html(guessesLeft);
         guessesSoFar.push(userkey);
         $("#guesses").html(guessesSoFar);
        //if they run out of losses restart the game   
        if(guessesLeft<=0){
            $("#musiclose").volume= 0.5;
            $("#musiclose").trigger("play");
            alert("Fool! you have failed and gain a unfreindly guest forever");
            losses+=1; 
            $("#losses").html(losses);
        restartgame();
       } 
     }  
 });
    
});