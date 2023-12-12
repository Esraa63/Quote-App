var  quotes = [
    {
        quote: "We come from the land, give our love and labor to her, and she nurtures us in return."+
        "When we die, we return to the land. In a way, she owns us."+
        "Palestine owns us and we belong to her",
        author: "--Susan Abulhawa "
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "--Oscar Wilde"
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "--Marcus Tullius Cicero"
    },
    {
        quote: "Don’t walk in front of me… I may not follow"+
        "Don’t walk behind me… I may not lead"+
        "Walk beside me… just be my friend",
        author: "--Marcus Tullius Cicero"
    },
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        author: "--Albus Dumbledore"
    },
    {
        quote: "It is impossible to manufacture or imitate love",
        author: "--Horace Slughorn"
    },
    {
        quote: "Being different isn't a bad thing. I mean that you are brave enough to be yourself.",
        author: "--Luna Lovegood"
    },
    {
        quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
        author: "--Sirius Black"
    },
    {
        quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        author: "--Arthur Weasley"
    },
    {
        quote: "Every human life is worth the same, and worth saving.",
        author: "--Kingsley Shacklebolt"
    },
    {
        quote: "Have a biscuit, Potter.",
        author: "--Minerva McGonagall"
    },
    {
        quote: "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
        author: "--Albus Dumbledore"
    },
    {
        quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
        author: "--Dobby"
    }
];
var random=[];
var randomNumberIndex=0;

function randomQuote(){  
    var randNumber=Math.floor(Math.random()*quotes.length);
    var isDuplicate = 0;
    if (random.length == 0) {
        randomNumberIndex = randNumber;
      } else {
        for (let i = 0; i < random.length; i++) {
          if (randNumber == random[i]) {
              isDuplicate = 1;
          }
        }
        if (isDuplicate == 1){
            if(random.length<quotes.length){
                randomQuote();
                return;
            }else{
                random=[];
                randomQuote();
                return;
            }
           
        } else {
            randomNumberIndex = randNumber;
            for (let i = 0; i < random.length; i++) {
                console.log("i "+random[i]);
            }
        }
      }

        random.push(randNumber);
        document.getElementById("quotes").innerHTML = quotes[randomNumberIndex].quote;
        document.getElementById("author").innerHTML =  quotes[randomNumberIndex].author;
        
    
}
