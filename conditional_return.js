
let numArr = [12, 30, 38, 35, 78, 45, 33, 89, 50, 80, 66, 33, 97, 98, 75, 55, 23, 44, 88, 65, 20];

let evenTotal = 0;
let oddTotal = 0;

for (let num of numArr) {
    if (num % 2 === 0) {
        console.log("Even Total = ", evenTotal += num);
    }else{
        console.log("Odd Total = ", oddTotal += num);
    }
}

