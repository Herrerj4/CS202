let quotes = [
    {
        "quote": "Don't cry because it's over, smile because it happened.",
        "author": "Dr. Seuss"
    },
    {
        "quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde"
    },
    {
        "quote": "So many books, so little time.",
        "author": "Frank Zappa"
    },
    {
        "quote": "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "author": "Dr. Seuss"
    },
    {
        "quote": "I am so clever that sometimes I don't understand a single word of what I am saying.",
        "author": "Oscar Wilde"
    },
]

$('document').ready(() =>{
    $('.btn').click(() =>{
        let number = Math.floor(Math.random()*quotes.length);

        $('#quote').html('<span></span>' + quotes[number].quote + '<span></span>');
        $('#author').html('<span></span>' + quotes[number].author + '<span></span>');
    })
});