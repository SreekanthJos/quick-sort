'use strict';

function quickSort(input) {
    
      if (input.length === 0 || input.length === 1) {
        return input;
    }
    else {
        return arrQuickSort(input);
    }

};
module.exports = quickSort;

function arrQuickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    var pivot = array[0];

    var left = [];
    var right = [];
    var i;
    var arrLength = array.length;

    for (i = 1; i < arrLength; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return arrQuickSort(left).concat(pivot, arrQuickSort(right));
}
