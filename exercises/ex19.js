/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

function emotions(emotion, laugh) {
  console.log(`I am ${emotion}, ${laugh}`);
}

var laugh = function (count) {
  var laughing = "";
  for (let i = 0; i < count; i++) {
    laughing = laughing + "ha";
  }
  laughing = laughing + "!";
  return laughing;
};

emotions("happy", laugh(5));
