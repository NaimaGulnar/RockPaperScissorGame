//when user clicks on the "play" button, the landing page will disappear and the page where user has to choose between rock, paper and scissor will displayed i.e., the actual game starts.
$("#play").on("click", function(){
    $(".landing-page").hide();
    $(".cards-section").show();
});

//when user clicks on any card(rock, paper or scissor)..
$(".mycard").on("click", function(){
    //storing user's choice 
    var userChoice = $(this).children().text();   //ROCK or PAPER or SCISSOR
    console.log(userChoice)
    //storing computer's choice 
    var options = ["ROCK", "PAPER", "SCISSOR"];
    var randomNumbers = Math.floor(Math.random() * 3);
    var compChoice = options[randomNumbers];   //ROCK or PAPER or SCISSOR
    console.log(compChoice)
    //game logic
    if(userChoice===`ROCK` && compChoice===`ROCK`){
        $(".winner").text("GAME DRAW!")
        $(".user").text("[You chose: ROCK]")
        $(".comp").text("[Computer chose: ROCK]")
    }
    else if(userChoice===`ROCK` && compChoice===`PAPER`){
        $(".winner").text("BETTER LUCK NEXT TIME!")
        $(".user").text("[You chose: ROCK]")
        $(".comp").text("[Computer chose: PAPER]")
    }
    else if(userChoice===`ROCK` && compChoice===`SCISSOR`){
        $(".winner").text("CONGRATULATIONS! YOU WON!")
        $(".user").text("[You chose: ROCK]")
        $(".comp").text("[Computer chose: SCISSOR]")
    }
    else if(userChoice==='PAPER' && compChoice==='ROCK'){
        $(".winner").text("CONGRATULATIONS! YOU WON!")
        $(".user").text("[You chose: PAPER]")
        $(".comp").text("[Computer chose: ROCK]")
    }
    else if(userChoice==='PAPER' && compChoice==='PAPER'){
        $(".winner").text("GAME DRAW!")
        $(".user").text("[You chose: PAPER]")
        $(".comp").text("[Computer chose: PAPER]")
    }
    else if(userChoice==='PAPER' && compChoice==='SCISSOR'){
        $(".winner").text("BETTER LUCK NEXT TIME!")
        $(".user").text("[You chose: PAPER]")
        $(".comp").text("[Computer chose: SCISSOR]")
    }
    else if(userChoice==='SCISSOR' && compChoice==='ROCK'){
        $(".winner").text("BETTER LUCK NEXT TIME!")
        $(".user").text("[You chose: SCISSOR]")
        $(".comp").text("[Computer chose: ROCK]")
    }
    else if(userChoice==='SCISSOR' && compChoice==='PAPER'){
        $(".winner").text("CONGRATULATIONS! YOU WON!")
        $(".user").text("[You chose: SCISSOR]")
        $(".comp").text("[Computer chose: PAPER]")
    }
    else if(userChoice==='SCISSOR' && compChoice==='SCISSOR'){
        $(".winner").text("GAME DRAW!")
        $(".user").text("[You chose: SCISSOR]")
        $(".comp").text("[Computer chose: SCISSOR]")
    }
    //for showing the result, the card-page will disapper and the result page is displayed
    $(".cards-section").hide();
    $(".result").show();
});

//when user clicks on "play again" button, then the game starts again
$("#play-again").on("click", function(){
    $(".result").hide();
    $(".landing-page").show();
});