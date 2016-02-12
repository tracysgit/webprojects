// ======== JQuery Random Quotes =========

$(document).ready(function(){
    
    var $quote = $("#quote");
    var $author = $("#author");
    var quotes = [
        {
            quote: "Happiness is not a goal, but a by-product.",
            author: "Eleanor Roosevelt"
        },
        {
            quote: "The only way of finding the limits of the possible is by going beyond them into the impossible.",
            author: "Arthur C. Clarke"
        },
        {
            quote: "We are all inventors, each sailing out on a voyage of discovery, guided each by a private chart, of which there is no duplicate. The world is all gates, all opportunities.",
            author: "Ralph Waldo Emerson"
        },
        {
            quote: "No man was ever wise by chance.",
            author: "Seneca"
        },
        {
            quote: "It is not our differences that divide us. It is our inability to recognize, accept, and celebrate those differences.",
            author: "Audre Lorde"
        },
        {
            quote: "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
            author: "Ayn Rand"
        },
        {
            quote: "I find that the harder I work, the more luck I seem to have.",
            author: "Thomas Jefferson"
        },
        {
            quote: "There is only one success--to be able to spend your life in your own way.",
            author: "Christopher Morley"
        }];
    
    //------ post a quote upon page load ------
    showQuote();

    //------ display a quote ------
    function showQuote(){
        var random = Math.floor(Math.random() * (quotes.length));  // generate a random number between 0 and the size of the quotes array.
        $("#quote").fadeIn("slow").text(quotes[random].quote);   //(quotes[0].quote);
        $("#author").fadeIn("slow").text(quotes[random].author);
    }

    $("#clickQuote").click(function () {
        showQuote();
    });
   
});