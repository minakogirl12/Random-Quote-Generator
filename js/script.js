/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//At least one object has at least one additional property, such as tags.
//At least one additional property prints to the page with the its quote
//Quotes automatically refresh at regular intervals.
//Background color changes to a random color each time the quote refreshes

/*** 
 * An array that holds the quotes that will be randomly selected
 * by the getRandomQuote function
***/
const quotes = [
  {quote:'Why are you keeping this curiosity door locked?', source:'Dustin', citation:'Stranger Things', year:'2016',tag:'television show'},
  {quote:'You can\'t stop change, any more than you can sto the suns from setting.', source:'Shmi Skywalker', citation:'Star Wars: Episode I - The Phantom Menace', year:'1999',tag:'movie'},
  {quote:'You know, the very powerful and the very stupid have one thing in common: they don’t alter their views to fit the facts; they alter the facts to fit their views.', source:'The Doctor', citation:'Doctor Who', year:'1977',tag:'science fiction'},
  {quote:'No matter how much you change, please remeber there are people who care for you.', source:'Usagi Tsukino', citation:'Sailor Moon', tag:'anime'},
  {quote:'You are who you are. You have to do what you can', source:'Tomoyo Okazaki', citation:'Clannad', year:'2007',tag:'anime'},
  {quote:'Do not mock a love-smitten mouse', source:'Brain', citation:'Pinky and the Brain', year:'1995',tag:'cartoon'},
  {quote:'Eighty percent of the people in the world are fools and the rest of us are danger of contamination', source:'Walter Matthau', citation:'Hello, Dolly!', year:'1969',tag:'musical'},
  {quote:'Never let them take the light behind your eyes', source:'My Chemical Romance', citation:'The Light  Behind Your Eyes', year:'2013'},
  {quote:'I tried so hard, And got so far, But in the end, It doesn\'t even matter', source:'Linkin Park', citation:'In the End', year:'2002',tag:'song'}
 
];

getRandomQuote();

/***
 * @returns a quote object that has been rando mly seleceted using the Math.random() function
 * Limits of the random number range are determined by the length of quotes array
***/
function getRandomQuote(){
  let randomNum = Math.floor(Math.random() * quotes.length); //generates a random number between 0 and the length of the quotes array
  
  //Tests for random number and returned object: console.log(randomNum); console.log(quotes[randomNum]);
  
  
  return quotes[randomNum]; //returns random object from array

};


/***
 * `printQuote` function
 * Displays the random quote to the user
***/
function printQuote(){
  let randomQuote = getRandomQuote();
  let quoteString = `
                <p class="quote">${randomQuote['quote']}</p>
                <p class="source">${randomQuote['source']}
                `;

  //determing if the object has other citation, year, or tag property
  // check for citation and add to string
  if(Object.keys(randomQuote).includes('citation')){
    quoteString += `<span class="citation">${randomQuote['citation']}</span>`;
  }
  // check for year and add to string
  if(Object.keys(randomQuote).includes('year')){
    quoteString += `<span class="year">${randomQuote['year']}</span>`;
  }
  // check for tags and add to string
  if(Object.keys(randomQuote).includes('tag')){
    quoteString += `<span class="tag">${randomQuote['tag']}</span>`;

  }

  //add final </p> tag
  quoteString += '</p>';

 //Display and update the HTML to be displayed
  document.getElementById('quote-box').innerHTML = quoteString;
   
  //retrun the completed quote
  return quoteString;
};



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);