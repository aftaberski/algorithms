// RECURSIVE
var factorial = function(n) {
  if (n === 0){
      return 1;
  }
  return n * factorial(n-1);
};

// ITERATIVE
var factorial = function(n) {
    var result = 1;
    for(var i = 1; i <= n; i++){
        result *= i;
    }

    return result;
};