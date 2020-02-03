// Code your solution here!

function printString(myString) {
    console.log(myString[0])
    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length)
        printString(mySubString)
    } else {
        return true
    }
}
// printString("pizza")

function reverseString(myString) {
    if (myString === "") {
        return ""
    } else {
        return reverseString(myString.substring(1)) + myString.charAt(0)
    }
}

// function isPalindrome(myString) {
//     if (myString === reverseString(myString)) {
//         return true
//     } else {
//         return false 
//     }
// }

function isPalindrome(myString) {
    let l = myString.length

    if (l < 2 ){
        return true
    } else if (myString[l - 1] === myString[0]) {
        console.log(myString[l-1], myString[0])
        return isPalindrome(myString.substring(1, l - 1))
    } else {
        return false
    }
}

function addUpTo(myArray, index) {
    if (index) { 
        console.log( myArray[index] + addUpTo(myArray, --index) )
        return myArray[index] + addUpTo(myArray, --index)
    } else {
        return myArray[index]
    }
}


