var insert = function(array, rightIndex, value) {
   for(var index = rightIndex;
    index >= 0 && array[index] > value;
    index--){
        array[index + 1] = array[index];
    }
    array[index + 1] = value;
};