


// // // 📝 Hand-in - Individual // // //
// // // 1 - What to wear // // //
// Create a function (that you have to name) that has temperature as parameter.
// Based on the temperature it should return a string with what the user should wear.
// You decide what the user should wear based on the temperature.

const whatToWear = (temperature) => {

    // Make an empty message variable to be changed by if's and else's
    let message

    // Make the if statement that uses the parameter from the function
    if (temperature <= 10) {
        message = " Wear a some warm clothes.";
    } else if (temperature <= 20) {
        message = " Wear pants and a t-shirt also bring a jacket.";
    } else {
        message = " Wear shorts and a t-shirt, it is hot.";
    }

    return `${temperature} degrees: ${message}`;
    // Returns the giving temperature (argument) and the message.

}
// Test
console.log(whatToWear(5))
console.log(whatToWear(15))
console.log(whatToWear(25))


// // // 2 - Dice game 🎲 // // //
// Write a function that simulates a die roll. You call the function with the number of times you would like to roll the die.
// Every time the dice hits a 6 log out You just hit 6!

// Making a number generator function that can be adjusted with a minimum roll and a maximum roll
const getRandomNumber = (min, max) => {                  //
    return Math.floor((Math.random() * (max - min + 1)) + min)      // Generates random number between and including min and max: Math.random() * (max - min + 1)) + min)
}
// Making the function that uses the getRandomNumber function to roll the die and log out everytime a six is rolled
const dieRoller = (timesThrow) => {

    for (let i = 0; i < timesThrow; i++) {
        // A loop that runs the amount of times we want the die to be rolled
        let dieResult = (getRandomNumber(1,6));
        // Input 1 and 6 into the function to set the min and max value of the generated number
        if (dieResult === 6) {
            console.log("You just hit 6!")
        }
    }

}

// Test
dieRoller(100)

// // // Part 2 // // //
// If the user hits 6 in every roll the log-out Jackpot 🎉

const dieRollerWithJackpot = (timesThrow) => {

    // Because we need to check if we only rolled sixes later we need to store the result of the rolls in an array
    let dieRollResult = [];
    // The loop now pushes the result of the roll into the empty array
    for (let i = 0; i < timesThrow; i++) {
        dieRollResult.push(getRandomNumber(1,6));
    }
    // To check if we only rolled sixes we create a shallow copy of the dieRollResult array and sort it in ascending order.
    // This is helpful because since we now know the array is sorted in ascending order if we only hit sixes a six should be in the first index of the new array.
    const onlySix = [...new Set(dieRollResult)].sort();
    // To save time we first check in the if statement if we have a jackpot.
    if (onlySix[0] === 6) {
        console.log("Jackpot");
    } else {
        // If we don't hit the jackpot we can then iterate over the array using a forEach loop and log out "You just hit 6!" for every six rolled
        dieRollResult.forEach((result) => {
            if (result === 6) {
                console.log("You just hit 6!");
            }
        });
    }
};

dieRollerWithJackpot(100)

// // // 3 - Build a sentiment analyzer // // //
// A sentiment analyzer is some functionality that figures out how positive/negative a sentence is.
// Fx the sentence "I am mega super awesome happy" Should have a high score The sentence "I hate doing boring stuff" should have a low score".
// Create a function that takes a string as a parameter.
// Calling the function will return an object with score, positiveWords and negativeWords.
// You decide how the score should be implemented and what words are negative and positive.























