// Write a program to demonstrate how a function can be passed as a parameter to another function.
function greet(name, formatter) {
    console.log(formatter(name));
}

const Formatter = name => `Welcome to , ${name}!`;

greet('JavaScript', Formatter);   

//An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments.
// For the arguments Roger and Waters, the function returns ‘RW’. Write this function

const getInitials = (firstName, lastName) => `${firstName.charAt(0)}${lastName.charAt(0)}`;
         
fName='Somya';
lName='Kakarla';      
let res=getInitials(fName,lName);
console.log("First letter of "+fName+" "+lName+" is: "+res);
