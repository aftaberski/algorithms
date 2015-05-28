function mergeRanges(ranges) {
    var sortedRanges = ranges.sort(function(a, b){
        if(a[0] === b[0]){
          return a[1] - b[1];
        }
        else  {
          return a[0] - b[0];
        }
      });
    var mergedRanged = [];

    return sortedRanges;
}

ranges = [[1, 5], [7, 8], [1, 2]];
console.log(mergeRanges(ranges));