$(document).ready(function() {
    var quotes = $(".quotes");
    var index = 0;

    function nextQuote() {
        index++;
        quotes.eq(index % quotes.length)
            .fadeIn(1500)
            .delay(12000)
            .fadeOut(1500, nextQuote);
    }

    nextQuote();
})
