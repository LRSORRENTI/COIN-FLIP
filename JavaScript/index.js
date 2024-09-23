// Get the text element from the DOM
let text = document.getElementById("text");

// Function to simulate a coin flip
function flipCoin() {
  // Generate a random number between 0 and 1
  var flipResult = Math.random();
  // Remove any existing classes from the coin element
  $('#coin').removeClass();
  
  // Return a Promise that resolves with the flip result after a short delay
  return new Promise((resolve) => {
    setTimeout(function(){
      if(flipResult <= 0.5){
        // If the random number is 0.5 or less, it's heads
        $('#coin').addClass('heads');
        resolve('heads');
      }
      else{
        // If the random number is greater than 0.5, it's tails
        $('#coin').addClass('tails');
        resolve('tails');
      }
    }, 100); // 100ms delay to allow for animation
  });
}

// Function to handle the "All or Nothing" game mode
async function allOrNothing() {
  // Prevent starting a new game if one is already in progress
  if (gameInProgress) return;

  gameInProgress = true;
  document.getElementById('allOrNothing').disabled = true;

  // Flip the coin once
  let result = await flipCoin();
  // Show the result in a popup
  showResultPopup("All or Nothing", null, result.toUpperCase(), result === 'heads' ? 1 : 0, result === 'tails' ? 1 : 0);

  // Re-enable the button after the game
  gameInProgress = false;
  document.getElementById('allOrNothing').disabled = false;
}

// Function to handle the "Best of Three" game mode
async function bestOfThree() {
  // Prevent starting a new game if one is already in progress
  if (gameInProgress) return;

  gameInProgress = true;
  document.getElementById('bestOfThree').disabled = true;

  // Initialize counters for heads and tails
  let results = {heads: 0, tails: 0};
  // Flip the coin three times
  for (let i = 0; i < 3; i++) {
    let result = await flipCoin();
    results[result]++;
    // Wait for 3 seconds between flips
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  // Determine the winner
  let winner = results.heads > results.tails ? "HEADS" : "TAILS";
  // Show the result in a popup
  showResultPopup("Best of Three", null, winner, results.heads, results.tails);

  // Re-enable the button after the game
  gameInProgress = false;
  document.getElementById('bestOfThree').disabled = false;
}

// When the DOM is ready, set up event listeners for the game buttons
jQuery(document).ready(function($){
  $('#allOrNothing').on('click', allOrNothing);
  $('#bestOfThree').on('click', bestOfThree);
});

// Set up event listener for single click on the coin
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

// Function to display the result popup
function showResultPopup(title, message, winner, headsCount, tailsCount) {
  // Set the title of the popup
  document.getElementById('result-title').textContent = title;
  // Set the content of the popup
  document.getElementById('result-message').innerHTML = `
    <p>The winner is: <span class="winner ${winner.toLowerCase()}">${winner}</span></p>
    <p class="count">Heads: ${headsCount}, Tails: ${tailsCount}</p>
  `;
  // Display the popup
  document.getElementById('result-popup').style.display = 'flex';
}

// Variable to track if a game is currently in progress
let gameInProgress = false;

// Event listener to close the popup when the close button is clicked
document.getElementById('close-popup').addEventListener('click', function() {
  document.getElementById('result-popup').style.display = 'none';
});