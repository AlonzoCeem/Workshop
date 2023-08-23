//Higher or Lower
function higherOrLower(firstNum, secondNum){
    if(firstNum === secondNum){
        return "equal";
    }else if(firstNum > secondNum){
        return "higher";
    }else{
        return "lower";
    }
}
// console.log(higherOrLower(5, 6)); // => "lower"
// console.log(higherOrLower(6.2, 5)); // => "higher"
// console.log(higherOrLower(6, 6)); // => "equal"

//Exclaim
function exclaim(string){
    return string + "!";
}
// console.log(exclaim("Hello")); // >>> "Hello!"
// console.log(exclaim("Goodbye")); // >>> "Goodbye!"
// console.log(exclaim("")); // >>> "!"

//esrever
function reverse(arr){
    let max = arr.length - 1;
    let reverseArr = [];
    arr.forEach((num) => {
        reverseArr += arr[max];
        max--;
        return reverseArr;
    })
    return reverseArr;
}
// console.log(reverse([1, 2, 3])); // >>> [3, 2, 1]
// console.log(reverse(["a", "b", "c", "d"])); // >>> ["d", "c", "b", "a"]

//buildNArray
function buildNArray(num){
    let arr = []
    if(num < 0){
        return arr;
    }
    for(let i = 1; i <= num; i++){
        if(i <= num){
            arr.push(i);
        }else if(i === num){
            arr.push(i);
        }
    }
    return arr;
}
// console.log(buildNArray(-555)); // >>> []
// console.log(buildNArray(3)); // [1, 2, 3]
// console.log(buildNArray(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//findLongestString
function findLongestString(arr){
    let maxLength = 0;
    arr.forEach((str) => {
        if(str.length >= maxLength){
            maxLength = str.length;
        }
    })
    let max = "";
    arr.forEach((str) => {
        if(str.length === maxLength){
            max = str;
        }
    })
    return max;
}
// console.log(findLongestString([])); // >>> ""
// console.log(findLongestString(["a", "bc", "def", "gh"])); // >>> "def"

//evenAndOdd
function evenAndOdd(arr){
    let evenArr = [];
    let oddArr = [];
    arr.forEach((num) => {
        if(num % 2 === 0){
            evenArr.push(num);
        }else if(num % 2 === 1){
            oddArr.push(num);
        }
    })
    return `[${evenArr}], [${oddArr}]`;
}

// console.log(evenAndOdd([1, 2, 3, 4, 5, 6])); // >>> [[ 2, 4, 6 ], [ 1, 3, 5 ]]
// console.log(evenAndOdd([10, 8, 6, 4, 2])); // >>> [[10, 8, 6, 4, 2], []]

//coinMachine
function coinMachine(num){
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    while(num > 0){
        if(num / 25 >= 1){
            num -= 25;
            quarters++;
        }else if(num / 10 >= 1){
            num -= 10;
            dimes++;
        }else if(num / 5 >= 1){
            num -= 5;
            nickels++;
        }else if(num / 1 >= 1){
            num -= 1;
            pennies++;
        }
    }
    return `quarters: ${quarters}, dimes: ${dimes}, nickels: ${nickels}, pennies: ${pennies}`
}

// console.log(coinMachine(99)); // => { quarters: 3, dimes: 2, nickels: 0, pennies: 4 }