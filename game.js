$(document).ready(function(){
    // when the page loads, this javascript starts as a single function
  var randomize  = Math.floor(Math.random()*100+19);
  //creates random number larger than any gem value
var randomGem= randomize;
//sets random function equal to randomly generated computer gem sack
console.log(randomGem);
//logs randomized number to the console
var totalScore=0;
var wins=0;
var losses=0;
//sets multiple variables initially to 0
$("#scoreToGet").text("Gems to get: " +randomGem);
$("#wins").text("Wins: 0");
$("#losses").text("Losses: 0");
//updates textboxes with the default losses/wins and updates page with the gem number needed
var gem1=  Math.floor(Math.random()*3)+1;
var gem2=  Math.floor(Math.random()*6)+3;
var gem3=  Math.floor(Math.random()*9)+6;
var gem4=  Math.floor(Math.random()*12)+9;
//randomizes gem numbers with number paramaters
var clicks= [];
//creates array to store click values

    $("#gem1").click(function gym1(){
        //when the gem image is clicked, function gym1 starts
     clicks.push(gem1);
     //pushes value of gemclick to clicks array
     var yuh=   clicks.reduce((a,b) =>a + b, 0);
     //sets variable that adds clicks together to users total gemsack
     $("#yourScore").text("Gems: "+ yuh);
     //updates text with your new gem sack amount with every click
     console.log("your gems: " + yuh);
     //logs your gem sack count to the console
     if (yuh===randomGem) {
        //if your gem sack has the same number of 'gems' as the randomly generated computer gem sack, do this:
        wins++;
        //increment wincount up by one
        $("#wins").text(wins);
        //adds newly incremented wins to wins element in html
        alert("You win! Congratulations you are an expert Gem Collector!");
        //alerts the user with a message unique to whatever gem you won with
        clicks.length=[];
        //resets clicks array(the one that held user Gem Sack)
       $("#scoreToGet").text("Gems: "+ Math.floor(Math.random()*100+19));
      //resets computer gem sack for another round

    }
    if (yuh>randomGem) {
        losses++;
        $("#losses").text("Losses: " + losses);
        alert("You L O S E !!!! Better luck next time? There's really not THAT much luck involved though");
        clicks.length=[];
       $("#scoreToGet").text("Gem Sack: "+ Math.floor(Math.random()*100+19));
    }
    
        
    });

    $("#gem2").click(function gym2(){
       clicks.push(gem2);
       var yuh=   clicks.reduce((a,b) =>a + b, 0);
       $("#yourScore").text("Gems: "+ yuh);
         console.log(yuh);
       if (yuh===randomGem) {
        wins++;
        $("#wins").text(wins);
        alert("You win! Congratulations you are an expert Gem Collector!");
        clicks.length=[];
       $("#scoreToGet").text("Gem Sack: "+ Math.floor(Math.random()*100+19));
    }
    if (yuh>randomGem) {
        losses++;
        $("#losses").text("Losses: " + losses);
        alert("You lose! But the real losers don't know how to make websites!");
        clicks.length=[];
       $("#scoreToGet").text("Gem Sack: "+ Math.floor(Math.random()*100+19));
    }
    
    });

    $("#gem3").click(function gym3(){
        clicks.push(gem3);
        var yuh=   clicks.reduce((a,b) =>a + b, 0);
        $("#yourScore").text("Gems: "+ yuh);
        console.log(yuh);
        if (yuh===randomGem) {
            wins++;
            $("#wins").text(wins);
            alert("You win! Congratulations you are an expert Gem Collector!");
            clicks.length=[];
            $("#scoreToGet").text("Gem Sack: "+ Math.floor(Math.random()*100+19));
        }
        if (yuh>randomGem) {
            losses++;
            $("#losses").text("Losses: " + losses);
            alert("You lose! Maybe next time? Probably not? But MAYBE!");
            clicks.length=[];
            $("#scoreToGet").text("Gem Sack: "+ Math.floor(Math.random()*100+19));
        }
        
     });
    
    $("#gem4").click(function gym4(){
       clicks.push(gem4);
        var yuh=   clicks.reduce((a,b) =>a + b, 0);
        $("#yourScore").text("Gems: "+ yuh);
        console.log(yuh);
        if (yuh===randomGem) {
            wins++;
            $("#wins").text(wins);
            alert("You win! Congratulations you are an expert Gem Collector!");
            clicks.length=[];
            $("#scoreToGet").text("Gem Sack: "+ Math.floor(Math.random()*100+19));
        }
        if (yuh>randomGem) {
            losses++;
            $("#losses").text("Losses: " + losses);
            alert("You LOSE!!!! Not everyone can be expert mathmeticians I guess?");
            clicks.length=[];
            $("#scoreToGet").text("Gem Sack: "+ Math.floor(Math.random()*100+19));
        }
       
        
    })

  
    
   
    





});