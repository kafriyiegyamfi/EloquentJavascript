//eloquent javascript EXErcises
const fish = "#";
for (let x = 0; x < 7; x++) {
  for (let i = 0; i <= x; i++) {
    console.log(fish + " ");
  }
  console.log("/n");
}
/*Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out
a significant percentage of programmer candidates. So if you solved it, your
labor market value just went up */

for (let number = 1; number <= 100; number++) {
  if ((number % 3 == 0) & (number % 5 == 0)) {
    console.log("FizzBuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else console.log(number);
}

/*Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height.
*/

let odd = "# # # #",
  even = " # # # #";
for (let line = 1; line < 9; line++) {
  if (line % 2 == 0) {
    console.log(even);
  } else console.log(odd);
}
/*
recursion for even and odd 
*/

let isEven = num => {
  if (num < 0) return "argument should be  positive number";
  else if (num === 0) return "is even";
  else if (num === 1) return "is odd";
  else return isEven(num - 2);
};

// a function to count the number of "B"s in a word is
let countBs = word => {
  let total = 0,
    i = 0;
  while (i < word.length) {
    if (word[i] === "B") total++;
    i++;
  }
  return total;
};

//a function to count the number of a given Alphabet in a given word
let countChar = (word, char) => {
  let total = 0,
    i = 0;
  while (i < word.length) {
    word[i] === char ? total++ : {};
    i++;
  }
  return total;
};
