var quotes = [
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" }
];

var lastRandomIndex = -1;
function getNewRandomIndex() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastRandomIndex);
    lastRandomIndex = randomIndex;
    return randomIndex;
}
function addQuote() {
    const randomIndex = getNewRandomIndex();
    console.log( randomIndex);
    const quote = quotes[randomIndex];
    console.log(quote);

    document.getElementById("quote").textContent = `"${quote.text}"`;
    document.getElementById("author").textContent = `-- ${quote.author}`;
}