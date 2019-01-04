// Scope Review

// We're going to be asking you what the value of `tracked` will be
// at different points in this code. We want to know what the value
// of `tracked` is if we were to put a console log at that point in
// the code

// As you work through this exercise, console log out `tracked` where
// we provided the seperator console logs for the question and run
// the code to check your answer for each question before moving on 
// to the next one



var tracked = "We're";

console.log("==================== Question 01 ====================");
// What is the value of `tracked` here?
// The value of 'tracked' here is "We're"
console.log(tracked);



loseTracked1();

function loseTracked1() {
  var tracked = "no";
}

console.log("==================== Question 02 ====================");
// What is the value of `tracked` here?
// The value of tracked here is "We're"
console.log(tracked);



loseTracked2(tracked);

function loseTracked2(arg) {
  arg = "strangers";
}

console.log("==================== Question 03 ====================");
// What is the value of `tracked` here?
// 'tracked' = "We're"
console.log(tracked);



loseTracked3();

function loseTracked3(tracked) {
  console.log("==================== Question 04 ====================");
  // What is the value of `tracked` here?
  // 'tracked' = undefined
  console.log(tracked);
  //'tracked' points to an argument which is only defined outside of function 
  //therefore it is undefined

}

loseTracked4();

function loseTracked4() {
  tracked = "to";
}

console.log("==================== Question 05 ====================");
// What is the value of `tracked` here?
// 'tracked' = "to"

console.log(tracked);

loseTracked5("love");

function loseTracked5(arg) {
  tracked = arg;
}

console.log("==================== Question 06 ====================");
// What is the value of `tracked` here?
// 'tracker' = "love"
console.log(tracked);
//'tracked' is not defined locally so the global variable 'tracked' is assigned 
//the value of the 'arg' which is equal to "love"



loseTracked6("You");

function loseTracked6(arg) {
  arg = "know";

  console.log("==================== Question 07 ====================");
  // What is the value of `tracked` here?
  // 'tracked' = "love"
  console.log(tracked);

}



console.log("==================== Question 08 ====================");
// What is the value of `tracked` here?
// 'tracked' = "love"
console.log(tracked);



tracked = "the";

loseTracked7(tracked);

function loseTracked7(tracked) {
  tracked = "rules";

  console.log("==================== Question 09 ====================");
  // What is the value of `tracked` here?
  // 'tracked' = "rules"
  console.log(tracked);
  //"rules" is the local variable for tracked
}



console.log("==================== Question 10 ====================");
// What is the value of `tracked` here?
// 'track' = "the"
console.log(tracked);




loseTracked8("and");

function loseTracked8(arg) {
  var tracked = arg;

  console.log("==================== Question 11 ====================");
  // What is the value of `tracked` here?
  // 'tracked' = "and"
  console.log(tracked);

}



console.log("==================== Question 12 ====================");
// What is the value of `tracked` here?
// 'tracked' = "the"
console.log(tracked);



var newTracked = "so";

function loseTracked9() {
  tracked = newTracked;  
}

console.log("==================== Question 13 ====================");
// What is the value of `tracked` here?
// 'tracked' = "the"
console.log(tracked);  



loseTracked10("do");

function loseTracked10(newTracked) {
  newTracked = "I";
}

tracked = newTracked;

console.log("==================== Question 14 ====================");
// What is the value of `tracked` here?
// 'tracked' = "so"
console.log(tracked); 
// The newTracked was defined locally in function 'loseTracked10', so the global newTracked wasn't reassigned.
// WHen the new value of 'newTracked' is assigned to 'tracked', it used the first value of 'newTracked'

tracked = 12;

loseTracked11(tracked);

function loseTracked11(arg) {
  arg = 14;
}

console.log("==================== Question 15 ====================");
// What is the value of `tracked` here?
// 'tracked' = 12



tracked = false;

loseTracked12(tracked);

function loseTracked12(arg) {
  arg = true;
}

console.log("==================== Question 16 ====================");
// What is the value of `tracked` here?
// 'tracked' = false
console.log(tracked);



tracked = {a: "hello", b: "world"};

loseTracked13(tracked);

function loseTracked13(arg) {
  arg = "goodbye";
}

console.log("==================== Question 17 ====================");
// What is the value of `tracked` here?
// 'tracked' = {a: "hellow, b:"World"}
console.log(tracked);



tracked = ["variable", "scoping", "is"]

loseTracked14(tracked);

function loseTracked14(arg) {
  arg = "fun";
}

console.log("==================== Question 18 ====================");
// What is the value of `tracked` here?
// 'tracked' = ["variable", "scoping", "is"]
console.log(tracked);



tracked = ["Testing", "Arrays"];

loseTracked15(tracked);

function loseTracked15(arg) {
  arg[0] = "WHAT!?";
  arg.pop();
  arg.push("Arrays!")

  console.log("==================== Question 19 ====================");
  // What is the value of `tracked` here?
  // 'tracked' = [WHAT!?, "Arrays!"]
  console.log(tracked);

}



console.log("==================== Question 20 ====================");
// What is the value of `tracked` here?
// 'tracked' = [WHAT!?, "Arrays!"]
console.log(tracked);



tracked = {how: "about", objects: "?"}

loseTracked16(tracked);

function loseTracked16(arg) {
  var key = "how";
  arg.key = "Dot Notation!";
  arg[key] = "Bracket Notation!";

  console.log("==================== Question 21 ====================");
  // What is the value of `tracked` here?
  // 'tracked' = {how: "Bracket Notation!", objects: '?', key: 'Dot Notation!'}
  console.log(tracked);
  // When using dot notation, js automatically designated whatever key to become a string

}


console.log("==================== Question 22 ====================");
// What is the value of `tracked` here?
// 'tracked' = {how: "Bracket Notation!", objects: '?', key: 'Dot Notation!'}
console.log(tracked);
// Variables point to objects, any variable pointing to the object will change the whole object pointing to that object


tracked = "Never Gonna Give You Up";

loseTracked17(tracked);

function loseTracked17(arg) {
  arg[0] = "R";
  arg[1] = "ick";

  console.log("==================== Question 23 ====================");
  // What is the value of `tracked` here?
  // 'tracked' = "Never Gonna Give Up"
  console.log(tracked);
  // A string CANNOT have two pointers pointing to it. 

}



console.log("==================== Question 24 ====================");
// What is the value of `tracked` here?
// 'tracked' = "Never Gonna Give You Up"
console.log(tracked);
