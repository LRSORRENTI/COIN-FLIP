
let text = document.getElementById("text")
let rand = Math.round(Math.random() * 1)
//console.log(rand)
let flipped = ''
if(rand === 0){
console.log('heads')
flipped = 'heads'
} else{
    console.log('tails')
    flipped = 'tails'
    
}


let renderedElement = document.getElementById('finalResult')

// INSERTING HTML VIA JAVASCRIPT

// STEP 1. CREATE THE NEW ELEMENT
//USING THE createElement(), METHOD 
//FROM THE DOCUMENT OBJECT

// AND IT'S IMPORTANT TO REMEMBER,
// WE ONLY PASS IN THE HTML 
// ELEMENT NAME WE WANT IN QUOTES
// WE WOULDN'T EVER DO SOMETHING LIKE
// document.createElement(<P>rendered html p tag</p>);

// FIRST WE NEED TO SAVE document.createElement('p'); 
// TO IT'S OWN VARIABLE

let renderedHtml = document.createElement('p');

// 2. Get access to parent element that will hold our 
// newly rendered HTML


// let finalRender = document.getElementById('renderHere')
let finalRender = document.getElementById('renderHere').innerHTML
function replyOne() {
  // document.getElementById("comment_content").value =
  //   document.getElementById("username");
  document.getElementById("comment_content").value =
    document.getElementById("username").innerHTML;
}


// 3. INSERT THE NEW HTML ELEMENT INTO THE PARENT 
// ELEMENT CONTENT

// finalRender.append(`${renderedHtml},${flipped}`)

jQuery(document).ready(function($){

    $('#coin').on('click', function(){
      var flipResult = Math.random();
      $('#coin').removeClass();
      setTimeout(function(){
        if(flipResult <= 0.5){
          $('#coin').addClass('heads');
          console.log('it is head');
          text.innerHTML = "itzzz heads"
        }
        else{
          $('#coin').addClass('tails');
          console.log('it is tails');
          text.innerHTML = "itzzz tails"
        }
      }, 100);
    });
  });
  