/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
let quotes = [];
let prevQuote = ""; // Creating a global variable to save previously displayed quote.

// Adding quotes object to the array.
quotes.push({
    "quote": "When you have a dream, you've got to grab it and never let go.",
    "source": "Carol Burnett"
})
quotes.push({
    "quote": "There is some good in this world, and it's worth fighting for.",
    "source": "J.R.R. Tolkien",
    "citation": "The Two Towers",
    "year": "1954"
})
quotes.push({
    "quote": "Whatever our souls are made of, his and mine are the same.",
    "source": "Emily Brontë",
    "citation": "Wuthering Heights",
    "year": "1847"
})
quotes.push({
    "quote": "There is nothing impossible to they who will try.",
    "source": "Alexander the Great"
})
quotes.push({
    "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "source": "Winston Churchill"
})

// Logging out quotes array.
console.log(quotes)

/***
 * `getRandomQuote` function
***/
function getRandomQuote(len) {
    // Generating a random number between 0 and len of quotes.
    let randomNumber = Math.floor(Math.random() * len);
    // Getting a random quote from the array.
    randomQuote = quotes[randomNumber];
    return randomQuote;
}


/***
 * `printQuote` function
***/
function printQuote() {
    let randomQuote = getRandomQuote(quotes.length);

    // Checking if the current random quote if the same as previously displayed quote.
    while (randomQuote.quote == prevQuote) {
        randomQuote = getRandomQuote(quotes.length);
    }
    // Saving current quote to prevQuote.
    console.log("Previous Quote: " + prevQuote);
    prevQuote = randomQuote.quote;

    // Assigning the quote and the source.
    let pToHTML = "<p class = 'quote'>" + randomQuote.quote + "</p>" +
        "<p class = 'source'>" + randomQuote.source;

    // Adding citation if it exists.
    if ('citation' in randomQuote) { pToHTML += "<span class = 'citation'>" + randomQuote.citation + "</span>" }
    // Adding year if it exists.
    if ('year' in randomQuote) { pToHTML += "<span class = 'year'>" + randomQuote.year + "</span>" }

    // Closing the tag.
    pToHTML += "</p>";

    document.getElementById('quote-box').innerHTML = pToHTML;

    // Logging out random quote details.
    console.log(randomQuote);
    console.log("Quote: " + randomQuote.quote);
    console.log("Source: " + randomQuote.source);
    console.log("Citation: " + randomQuote.citation);
    console.log("Year: " + randomQuote.year);
    console.log("");
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
document.getElementById('load-quote').addEventListener("click", printQuote);