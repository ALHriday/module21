
// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

let numArr = [50, 30, 12, 24, 33, 55, 28, 75, 90, 56, 48, 91, 84];

function makeAvg(nums) {
    let total = 0;

    for (const num of nums) {
        total += num;
    }
    const avg = total / nums.length;
    console.log(avg);
}

makeAvg(numArr);
