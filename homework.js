/* Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array 
Do not use numbers to reference the last element, find it programmatically, 
ages[7] – ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age. */

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages[ages.length - 1] - ages[0]);

ages.push(15);

console.log(ages[ages.length - 1] - ages[0]);

let sum = 0;

for (let number of ages){
    sum += number;
}

average = sum/ages.length;

console.log(average);

/*Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
Use a loop to iterate through the array and calculate the average number of letters per name. */

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let sum1 = 0;
let namesAverage = 0;

for (let i = 0; i < names.length; i++) {
    //console.log(names[i].length);
    sum1 = sum1 + names[i].length;
    //console.log(sum1);
    //last number / number of elements
    namesAverage = sum1 / names.length;
    
}
console.log(namesAverage);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let result = "";

for (let i = 0; i < names.length; i++){
    result = result + names[i] + " ";
}

console.log(result);

//3. To find the last element of any array use arr[arrayName.length - 1]
//4. To access the first element of any array use arrayName[0]

/*Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:
namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array*/

namesArray = ["Kelly", "Sam", "Kate", "Samantha", "Gabriel", "Tom"];
nameLengths = [];

for (let i = 0; i < namesArray.length; i++){
    nameLengths.push(namesArray[i].length);
}

console.log(nameLengths);


//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

let sum2 = 0;

for (let i = 0; i < nameLengths.length; i++){
    sum2 = sum2 + nameLengths[i];

}

console.log(sum2);

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’) 

function repeatStringNTimes(word, n){
    return word.repeat(n);
}

console.log(repeatStringNTimes("Hello", 3));

/* Write a function that takes two parameters, firstName and lastName, and returns a full name.
The full name should be the first and the last name separated by a space. */

function fullName(firstName, lastName){
    return (firstName + " " + lastName);
}
console.log(fullName("Sam", "Smith"));

/* Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. */

function sumGreaterThan (arrayNum) {
    let sum3 = 0;
    for (let i = 0; i < arrayNum.length; i++){
        sum3 = sum3 + arrayNum[i];
    }
    if (sum3 >= 100) {
        return true;
    } else {
        return false;
    }
}

console.log(sumGreaterThan([20, 50]));

/* Write a function that takes an array of numbers and returns the average of all the elements in the array. */

var myNumbers = [2, 4, 6];

function averageNumbers(arg){
    let total = 0;
    let count = arg.length;
    for (let i = 0; i < arg.length; i++){
        total += arg[i];
    }
    return total/count;
}

console.log(averageNumbers(myNumbers));

/* Write a function that takes two arrays of numbers and returns true 
if the average of the elements in the first array is greater than the average of the elements in the second array. */

var firstArray = [10, 20, 30];
var secondArray = [2, 4, 6];

function averageGreaterThan(first, second){
    let firstTotal = 0;
    let firstCount = first.length;
    for (let i = 0; i < firstArray.length; i++){
        firstTotal += first[i];
        firstAverage = firstTotal/firstCount;
    }
    let secondTotal = 0;
    let secondCount = second.length;
    for (let i = 0; i < secondArray.length; i++){
        secondTotal += second[i];
        secondAverage = secondTotal/secondCount;
    }
    if (firstAverage > secondAverage){
        return true;
    } else {
        return false;
    }
}

console.log(averageGreaterThan(firstArray, secondArray));

/* Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50. */

function willBuyDrink (isHotOutside, moneyInPocket){
    if (isHotOutside && moneyInPocket > 10.5){
        return true;
    } else {
        return false;
    }
}

var isHotOutside = true;
console.log(willBuyDrink(isHotOutside, 12));

/* Create a function of your own that solves a problem
In comments, write what the function does and why you created it. */

function goToPark (temperature, timeOfDay) { //helps decide whether to go to the park in the morning, afternoon or not at all
    if (temperature <= 50 && timeOfDay === "morning"){ //it has to be warm enough, but we can again in the afternoon
        return "Try again later";
    } else if (temperature > 50 && timeOfDay === "afternoon"){ //if it's warmer than 50 in the afternoon then it's good to go
        return "Go to the park now!";
    } else if (temperature > 70){ //any temperature warmer than 70 is a good time to go to the park regardless of time of day
        return "Go to the park!";
    } else { //if it doesn't reach the parameters then it's too darn cold
        return "Try again tomorrow"; 
    }
}

console.log(goToPark(55, "afternoon"));