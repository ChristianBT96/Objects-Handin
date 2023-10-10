


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
    // To save time we first check if we have a jackpot.
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

// Creating my "good" and "bad" words.
const goodWords= ["happy", "nice", "great", "wonderful"];
const badWords= ["bad", "shitty", "boring"];

const sentimentAnalyser = (string) => {

    // Make the string lowercase and split it into an array of words
    const stringLowerCaseAndSplit = string.toLowerCase().split(" ")

    // Make filter functions that checks if the words in the string are in the goodWords or badWords array
    const positiveWordsFound = stringLowerCaseAndSplit.filter((word) =>
        goodWords.includes(word)
    );
    const negativeWordsFound = stringLowerCaseAndSplit.filter((word) =>
        badWords.includes(word)
    );
    // ".filter" is an array method that creates a new array with all elements that pass a certain test.
    // It takes a callback function as an argument, and this function is applied to each element in the array.
    // In this case the callback function checks if the word (element) exists in the goodWords or badWords array.
    // If it does, it returns true and the word is kept in the new array, if false it is not included.

    // Calculate the score by subtracting the length of the negativeWordsFound array from the length of the positiveWordsFound array
    const score = positiveWordsFound.length - negativeWordsFound.length;

    // Make an object with the score, positiveWordsFound and negativeWordsFound
    const result = {
        score: score,
        positiveWords: positiveWordsFound,
        negativeWords: negativeWordsFound
    };
    // Log out the result
    console.log(result)
}

// Make different sentences to test the function
const testSentenceGood = "I am so happy to be part of this great class of wonderful people";
const testSentenceBad = "I hate my shitty job it is bad and boring";
const testSentenceNeutral = "I guess my work is not so bad I have wonderful coworkers";
// Test
sentimentAnalyser(testSentenceGood)
sentimentAnalyser(testSentenceBad)
sentimentAnalyser(testSentenceNeutral)

// // // 4 - Character frequencies - optional // // //
// Write a function that counts the frequency of characters in a string:
// console.log(getCharacterFrequencies('happy'));

const getCharacterFrequencies = (string) => {

    // Start by splitting the string into an array of separate letters.
    const stringArray = string.split("");
    // Make an object that stores the characters and the length of the string
    const charactersOfString = {characters:[], length:string.length};

    // Iterate over the array of letters
    for (let letter of stringArray) {
        // Use "for of" loop to iterate over every element of the character array.
        const lowerCaseLetter = letter.toLowerCase();
        // Make individual letters lower case to avoid repeats of letters.
        const alreadyInCharacters = charactersOfString.characters.find(element => element.character === lowerCaseLetter);
        // Define a variable that stores the first element in an array it finds that satisfy the callback function.
        // In this case we are using it on the array in "characters" inside the "charactersOfString" object.
        // So the referred to element is actually the individual letter object.
        // If the callback function in .find() is not satisfied (it didn't find a matching letter in this case) it will become undefined i.e. it becomes "falsy"
        // If it does find what it is looking for it becomes that element of the array

        if (alreadyInCharacters) {
            // In this case if the "if" is true we increment the count by one
            alreadyInCharacters.count += 1;
        } else {
            // This will run in case we have not found the letter in the array "charactersOfString" and add the letter as an object with a count of 1.
            charactersOfString.characters.push({ character: lowerCaseLetter, count: 1});
        }

    }

    console.log(charactersOfString);
};
// Test
getCharacterFrequencies("Hello world")



// // // 5 - Credit card number formatter - optional // // //
// This is a very real world example of a problem i got at my previous work.
// I was tasked to implement one of the smart credit card input fields, where the credit card numbers are seperated with a space.

const creditCardChecker = (creditCardNumber) => {

    // Make a regular expression to check if the credit card number is valid
    const creditCardRegExp = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    // RegExp found online here: https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests
    // DISCLAIMER: it is not good to use RegExp for cc numbers, other and better solutions exist.

    // Convert the credit card number to a string so we can use the .substring() method to format it
    const creditCardNumberToString = creditCardNumber.toString();
    // Format the credit card number by adding spaces
    let formattedNumber = creditCardNumberToString.substring(0,4) + " " + creditCardNumberToString.substring(4,8) + " " + creditCardNumberToString.substring(8,12) + " " + creditCardNumberToString.substring(12,16);
    // Check if the credit card number is valid
    if (creditCardRegExp.test(creditCardNumberToString)) {
        let result = {
            original: creditCardNumber,
            formatted: formattedNumber
        };
        console.log(result);
    } else {
        console.log("That is not a valid/accepted credit card number");
    }

}

// Make different credit card numbers to test the function
const testCCNumber1 = "4012888888881881"
const testCCNumber12 = "4012-8888-8888-1881"
const testCCNumber2 = "4222222222222"
const testCCNumber3 = "4222222222222"
const testCCNumber4 = 4012888888881881
const testCCNumber5 = 1234567890123456
// Test
creditCardChecker(testCCNumber1)
creditCardChecker(testCCNumber12)
creditCardChecker(testCCNumber2)
creditCardChecker(testCCNumber3)
creditCardChecker(testCCNumber4)
creditCardChecker(testCCNumber5)
creditCardChecker("Do you take master card?")





