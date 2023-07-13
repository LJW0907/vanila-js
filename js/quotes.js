const quotes= [
    {
        quote: "When you have faults, do not fear to abandon them."
    },
    {
        quote: "They must often change who would be constant in happiness or wisdom."
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated."
    },
    {
        quote: "Life is either a daring adventure or nothing at all."
    },
    {
        quote: "This too shall pass."
    },
];


const quote = document.querySelector("#quote span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;