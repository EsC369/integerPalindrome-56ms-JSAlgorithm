/*
Example 1:
Input: 121
Output: true
Example 2:
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/


// the string method... to easy tho... AND is slower! 
// Runtime: 92 ms

var isPalindrome = (nums) => {
    //string:
    let numString = nums.toString();
    let reversedStr =  numString.split('').reverse().join('');
    if(numString == reversedStr) {
        return true
    }
    return false
}



// My solution not including bult in functions:--
// Runtime: 56 ms

var isPalindrome = (nums) => {
    // convert to string in order to count it:
    let numString = nums.toString();
    let start = 0;
    let end = numString.length -1;

    // Check if beginning and end are the same, if so, then add 1 to start minus 1 from end to work your way inword towards the middle,
    // Once it sees a number that doesnt match, it will return false, otherwise it is a palindrome.
    while(start < end) {
        if(numString[start] == numString[end]){
            // Its a match, work your way down the elements til it hits false or ends. If it ends, its true.
            start++;
            end--;
        }else{
            return false;
        }
    }
    return true;
};
//-----

let numbers = 123321;
// isPalindrome(numbers);
console.log(isPalindrome(numbers));