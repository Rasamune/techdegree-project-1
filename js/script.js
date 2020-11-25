/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


// --------------------------------------------------- //
// Array of Quotes can be found in file 'js/quotes.js' //
// --------------------------------------------------- //

// Set intervalTimer
let intervalTimer;
// Variable to check if quote is repeating
let prevQuote = -1;

// Generate a random number based on the number of quotes in the array
function getRandomQuote () {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// Function to display a random quote and also update background color
function printQuote() {
  // Get random quote
  let quote = getRandomQuote();
  // If random quote is the same as the previous quote, get a new one
  while(quote === prevQuote) {
    quote = getRandomQuote();
  }

  // Create HTML to display the quote data
  let html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
  `;
  if (quote.citation) { html += `<span class="citation">${quote.citation}</span>`; }
  if (quote.year) { html += `<span class="citation">${quote.year}</span>`; }
  if (quote.tags) {
    html += `<br>`;
    for ( let i = 0; i < quote.tags.length; i++ ){
      html += `<span class="tags"> ${quote.tags[i]} </span>`;
    }
  }
  html += `</p>`;

  // Update the quote in the html
  document.getElementById('quote-box').innerHTML = html;

  // Update background color
  randomBackgroundColor();

  // Update timer and clear old timer
  // (important when triggering the click event)
  intervalTimer = clearInterval(intervalTimer);
  intervalTimer = setInterval(printQuote, 10000);

  // Set Previous Quote to current Quote
  prevQuote = quote;
}

// Function to set a random background color
function randomBackgroundColor() {
  // Generate random color for the background
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rgb = `rgb(${red}, ${green}, ${blue})`;

  // Update Background Color
  document.body.style.backgroundColor = rgb;
}

// Get a random quote when the page loads
printQuote();

// Call printQuote when "Show Another Quote" is clicked
document.getElementById('load-quote').addEventListener("click", printQuote, false);