  // This selects a random number in the beginning of the game
  // Number should be should be between 19 - 120
  
$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)

 // This is appending random number to the randomNumber id in the index.html

  $('#randomNumber').text(Random);
 
   // This sets up random numbers for each season
  // Random number has to be between 1 - 12

  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)


  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

//This will reset the game

function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 

//This adds the wins to the userTotal

function yaywin(){
alert("Great Job! You won!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}

//This adds the losses to the userTotal

function loser(){
alert ("You lose! Try again");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}

//sets up click for seasons

  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 

          //sets win/lose conditions

        if (userTotal == Random){
          yaywin();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          yaywin();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
//sets win/lose conditions
          if (userTotal == Random){
          yaywin();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  

  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          yaywin();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 
