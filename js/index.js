// json file 
var quote = [

    {
        saying: "Be yourself; everyone else is already taken",
        author: "Oscar Wilde"
    },
    {
        saying: "A room without books is like a body without a soul",
        author: "Marcus Tullius Cicero"
    },
    {
        saying: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
        author: "Bernard M. Baruch"
    },
    {
        saying: "You only live once, but if you do it right, once is enough",
        author: "Mae West"
    },
    {
        saying: "Be the change that you wish to see in the world",
        author: " Mahatma Gandhi"
    },
    {
        saying: "In three words I can sum up everything I've learned about life: it goes on",
        author: " Robert Frost"
    },
    {
        saying: "If you tell the truth, you don't have to remember anything",
        author: "Mark Twain"
    },
    {
        saying: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
        author: "Maya Angelou"
    },
    {
        saying: "A friend is someone who knows all about you and still loves you",
        author: "Elbert Hubbard"
    },
    {
        saying: "To live is the rarest thing in the world. Most people exist, that is all",
        author: "Oscar Wilde"
    },
    {
        saying: "It is better to be hated for what you are than to be loved for what you are not",
        author: " Andre Gide"
    },

]

function display() {

    var num = randomNum();
    var clr = randomColor();

    console.log(num);
    console.log(clr);
    var str = `<div style = "color: ${clr}"> <p>"${quote[num].saying}."
    </p><p>--${quote[num].author}</p> </div>`;

    document.getElementById('quote').innerHTML = str;
}


function randomColor() {
    var max = 999999;
    var min = 111111;
    return "#" + Math.floor(Math.random() * (max - min) + min);
}

function randomNum() {
    var max = quote.length;
    var min = 0;
    return Math.floor(Math.random() * max);
}


