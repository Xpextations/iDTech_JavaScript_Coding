// TODO: Create an array variable called "words" with the following elements: 'This', 'is', 'JavaScript', 'Coding!'
// YOUR CODE GOES HERE


// TODO: Create an empty string variable called "sentence".
// YOUR CODE GOES HERE


// TODO: 
// 1. Create a function called "createSentence" that takes an array as an argument.
// 2. In the function use a for loop to iterate through each word element of the array.
// 3. Add each word to the "sentence" variable.
// 4. Return the "sentence".
// YOUR CODE GOES HERE


// TODO: Call the function "createSentence" using the console.log method.
// YOUR CODE GOES HERE
const words = ["This", "is", "JavaScript", "Coding!"];
var sentence = ""
function createSentence(array)
{
    for (let word = 0; word < array.length; word++) {
        if (word == array.length - 1) {
            sentence = sentence + array[word];
          } else {
            sentence = sentence + array[word] + " "
        }
    }  
    return sentence
}
console.log(createSentence(words))