// Verify whether word is a palindrome

var firstCharacter = function(str) {
    return str.slice(0, 1);
};

var lastCharacter = function(str) {
    return str.slice(-1);
};

var middleCharacters = function(str) {
    return str.slice(1, -1);
};

var isPalindrome = function(str) {
    // First base case
    if (str.length <= 1){
        return true;
    }
    // Second base case
    else if (firstCharacter(str) === lastCharacter(str)){
        return isPalindrome(middleCharacters(str));
    }
    else {
        return false;
    }
};

console.log(isPalindrome("anna"));
console.log(isPalindrome("water"));