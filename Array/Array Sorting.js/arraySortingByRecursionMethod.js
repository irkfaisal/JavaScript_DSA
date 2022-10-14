// Array sorting with bubble sort method by recursion

let array = [2, 3, 1, 5, 4];
let temp;
function bubbleSortByRecursion(data, length) {
    if (length == 1) {
        return;
    }
    let currentEl = 0;
    for (let i = 0; i < length; i++) {
        if (data[i] > data[i + 1]) {
            temp = data[i];
            data[i] = data[i + 1];
            data[i + 1] = temp;
            currentEl++;
        }
    }
    bubbleSortByRecursion(data, length - 1)  //recursing here     
}
bubbleSortByRecursion(array, array.length);
console.log(array);