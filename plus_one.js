/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    //Create a string from the array
    let number = digits.join();
    //Convert the string to a number after removing the commas
    number = BigInt(number.replace(/,/g, ""));
    number++;
    //Convert the number to a string and split it into an array
    digits = Array.from(number.toString());
    return digits;
};
