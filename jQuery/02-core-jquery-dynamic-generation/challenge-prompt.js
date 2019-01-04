$(document).ready(function () {

    $(document).on("click", "#randomLetter", function() {

        // create variable called `text` and have it equal an empty string

        var text = "";
        // create a variable called `possibleLetters` that contains all the letters of the alphabet
        var possibleLetters = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
        
        // Create a new variable `randIndex` that is a random number between 0 and the last index of `possibleLetters`
        var randIndex = Math.floor(Math.random() * possibleLetters.length)

        // Using the `randIndex` and `possibleLetters` variables, set `text'to be a random letter
        text = possibleLetters.charAt(randIndex);
        
        // console log the value of `text`
        console.log(text);

        // append `text` to the element with an id of `letters`
        $("#letters").append(text);

    });

});
