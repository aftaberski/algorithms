function quicksort(a) {
    if (a.length == 0) return [];

    var left = [],
    right = [],
    pivot = a[0];

    for (var i = 1; i < a.length; i++) {
        a[i] < pivot ? left.push(a[i]) : right.push(a[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
}

array = [5, 9, 23, 34, 67, 9, 10, 44]
console.log(quicksort(array))