let text = document.getElementById("text");

function flipCoin() {
  var flipResult = Math.random();
  $('#coin').removeClass();
  return new Promise((resolve) => {
    setTimeout(function(){
      if(flipResult <= 0.5){
        $('#coin').addClass('heads');
        // console.log('it is head');
        // text.style.color = 'transparent';
        // text.innerHTML = "itzzz heads";
        resolve('heads');
      }
      else{
        $('#coin').addClass('tails');
        // console.log('it is tails');
        // text.style.color = 'transparent';
        // text.innerHTML = "itzzz tails";
        resolve('tails');
      }
    }, 100);
  });
}

async function allOrNothing() {
  let result = await flipCoin();
  alert("The result is: " + result);
}

async function bestOfThree() {
  let results = {heads: 0, tails: 0};
  for (let i = 0; i < 3; i++) {
    let result = await flipCoin();
    results[result]++;
    await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 2 seconds between flips
  }
  let winner = results.heads > results.tails ? "heads" : "tails";
  alert("The winner is: " + winner);
}

jQuery(document).ready(function($){
  $('#allOrNothing').on('click', allOrNothing);
  $('#bestOfThree').on('click', bestOfThree);
});


// Below is for the single click 
jQuery(document).ready(function($){

    $('#coin').on('click', function(){
      var flipResult = Math.random();
      $('#coin').removeClass();
      setTimeout(function(){
        if(flipResult <= 0.5){
          $('#coin').addClass('heads');
          console.log('head');
        }
        else{
          $('#coin').addClass('tails');
          console.log('tails');
        }
      }, 100);
    });
  });
  