//Create an array named colors that contains five different names of colors as strings.
let colors = ["red", "blue", "yellow", "violet", "green"];

   
//Access the first color in the array and print it to the console using console.log()
console.log(colors[0])


//Now do the same with the third color in the list. 
console.log(colors[2])

//Write one line of code that changes the value of the last color in the list to "ultraviolet" (overwriting the previous value).
colors[4] = "ultraviolet";
console.log(colors)



//Create a new variable called fourthColor and set it equal to the fourth color in the list.
let fourthColor = "violet";
colors[3] = fourthColor;
console.log(colors);

//Add another color to the end of the list.
colors[5] = ("pink");
console.log(colors);


//Add another color to the beginning of the list.
colors.unshift("white");
console.log(colors);


//Print the length of the array to the console with console.log()
console.log(colors.length)


//Remove the last color from the end of list, and then print the length of the array to the console one more time.
colors.pop();
console.log(colors.length)

// Write a for loop to iterate through every color in the array and print each color's value to the console.
for (var i = 0; i < colors.length; i++)
{
  console.log(colors[i]);
}


//Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.
for (var i = 0; i < colors.length; i++)
{
  console.log(i + ": " + colors[i]);
}


//Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list. (Hint: make use of the array's length property for this!)
var len = colors.length - 1 
var lastColor = colors[len]
console.log(lastColor)