
// Task - 4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function countZero() {
    let binaryStr = "1010100";
    let zeroStr = "";
    for (const str of binaryStr) {
        if (str === "0") {
            zeroStr += str;
        }
    }
    return zeroStr;
}
const result = countZero();
console.log(result);
