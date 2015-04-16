var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {

    // base case
    if (n === 0){
        return 1;
    }
    // n is negative
    else if (n < 0){
        return 1/(power(x, (n*-1)));
    }

    // n is odd
    else if (isOdd(n)){
        return x * power(x, (n-1));
    }
    // n is even
    else if (isEven(n)){
        var y = power(x, n/2);
        return y*y;
    }
};

console.log(power(3,2));