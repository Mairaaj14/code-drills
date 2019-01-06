// Anagrams


// This function takes in two strings and checks whether they're anagrams of each other.
// Return true if they are anagrams and false if they aren't anagrams.
function anagramCheck (str1, str2) {

  // ---------- Your Code Here ----------
  // remove all spaces in between letters
str1 = str1.replace(/\s/g, '');
str2 = str2.replace(/\s/g, '');

// in order for the strings to be anagrams they must be equal in length after taking off the spaces

if (str1.length !== str2.length) {
  return false;
}

// turn all letters lowercase to remove case semsibility 
str1 = str1.toLowerCase();
str2 = str2.toLowerCase();

// iterate through the first string 
for (var i=0; i < str1.length; i++) {
  str2 = str2.replace(str1[i], "");
}


if (str2.length === 0) {
  return true;
} else {
  return false
}
  // ----------- End Code Area -----------

}

// This should console log true
console.log(anagramCheck("I am Lord Voldemort", "Tom Marvolo Riddle"));

// This should console log true
console.log(anagramCheck("Astronomer", "Moon Starer"));

// This should console log false
console.log(anagramCheck("Hello World", "Goodnight Sun"));

// This should console log false
console.log(anagramCheck("Supercalifragilisticexpialidocious", "If you say it loud enough"));
