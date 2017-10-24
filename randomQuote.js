var quote = [];
var quoter = [];

quote.push("Another quote, not a good one!");
quoter.push("J P Muteham");


quote.push("If you are pained by any external thing, it is not this thing that disturbs you, but your own judgment about it. And it is in your power to wipe out this judgment now.");
quoter.push("Marcus Aurelius");

quote.push("Things stand outside of us, themselves by themselves, neither knowing anything of themselves nor expressing any judgment.");
quoter.push("Marcus Aurelius");

quote.push("Today I escaped from anxiety. Or no, I discarded it, because it was within me, in my own perceptions — not outside.");
quoter.push("Marcus Aurelius");

quote.push("Asia and Europe: distant recesses of the universe. The ocean: a drop of water. Mount Athos: a molehill. The present: a split second in eternity. Minuscule, transitory, insignificant.");
quoter.push("Marcus Aurelius");

quote.push("You can discard most of the junk that clutters your mind…and clear out space for yourself… by comprehending the scale of the world… by contemplating infinite time… by thinking of the speed with which things change — each part of every thing; the narrow space between our birth and death; the infinite time before; the equally unbounded time that follows.");
quoter.push("Marcus Aurelius");

quote.push("Remember: Matter. How tiny your share of it. Time. How brief and fleeting your allotment of it. Fate. How small a role you play in it.");
quoter.push("Marcus Aurelius");

quote.push("Whatever happens to you has been waiting to happen since the beginning of time. The twining strands of fate wove both of them together.");
quoter.push("Marcus Aurelius");




function getQuote(){
    var random = Math.floor((Math.random() * (quote.length)));
    var quoteHtml = document.getElementById("quote-text");
    var quoterHtml = document.getElementById("quoter");
    var tweeterHtml = document.getElementById("tweeter");
    var newQuote = ' ' + quote[random];
    //   debugger;
    while(newQuote === quoteHtml.innerHTML){
        random = Math.floor((Math.random() * (quote.length)));         
        newQuote = ' ' + quote[random];
    }
    quoteHtml.innerHTML = newQuote;
    quoterHtml.innerHTML = quoter[random];
    var blockquoteHtml = document.getElementById("blockquote");
    blockquoteHtml.classList.remove('animated','zoomIn');  
    tweeterHtml.classList.remove('animated','shake');
    //timeout is important !!
    setTimeout(function(){ 
        blockquoteHtml.classList.add('animated','zoomIn');
       
    }, 20);

  setTimeout(function(){ 

        tweeterHtml.classList.add('animated','shake');
    }, 1200);
}



function twitter(){

    var quoteHtml = document.getElementById("quote-text");
    var quoterHtml = document.getElementById("quoter");
    var tweetHtml = document.getElementById("tweet");
    tweetHtml.href = 'https://twitter.com/intent/tweet?text=' + quoteHtml.innerHTML.trim() + ' - ' + quoterHtml.innerHTML;
}