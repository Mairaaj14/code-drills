// Firebase Chat

// creating a variable that references our database, so we don't have to type
// it out every time
var database = firebase.database();

// Document.ready shorthand
$(function() {

  // -------------------- Your Code Here --------------------

// setting up a child_added listener for our database

database.ref().on("child_added", function (childSnapshot) {

  // create new element 'chatItem' that we will append into chat-display

  var chatItem = $("<p>");

  chatItem.text(childSnapshot.val());

  // append chatItem to the chat-display
  $("#chat-display").append(chatItem);
})
  // Setting up an on click listener for the submit  button

  $(document).on("click", "button[type=submit]", function (event) {
    event.preventDefault();

    // get chat message user has input and clear the input area

    var chatMessage = $("input[type=text]").val().trim();
    $("#chat-input").val("");

    // Push chat message data into database
    database.ref().push(chatMessage);
  })

  // --------------------- End Code Area --------------------

})

