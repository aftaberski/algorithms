var insert = function(array, rightIndex, value) {
   for(var index = rightIndex;
    index >= 0 && array[index] > value;
    index--){
        array[index + 1] = array[index];
    }
    array[index + 1] = value;
};

var insertionSort = function(array) {
    for(var i = 1; i < array.length; i++){
        var value = array[i];
        var rightIndex = i - 1;
        insert(array, rightIndex, value);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log("Array after sorting:  " + array);