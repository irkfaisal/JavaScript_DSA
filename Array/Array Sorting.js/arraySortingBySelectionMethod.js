// Array sort by selection method in asending order
let array = [12, 20, 8, 30, 16];
function sortingBySelectionMethod(data) {
    for (let i = 0; i < data.length; i++) {
        let minElem = i;
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[minElem]) {
                minElem = j;
            }
        }
        let temp = array[minElem];
        array[minElem] = data[i];
        data[i] = temp;
    }

}
sortingBySelectionMethod(array);
console.log(array)

// Array sort in desending order with reverse loop
function sortingBySelectionMethod2(data) {
    for (let i = array.length-1; i >= 0; i--) {
        let minElem = i;
        for (let j = i - 1; j >=0; j--) {
            if (data[j] < data[minElem]) {
                minElem = j;
            }
        }
        let temp = array[minElem];
        array[minElem] = data[i];
        data[i] = temp;
    }

}
sortingBySelectionMethod2(array);
console.log(array);


// Array sort in desending order without reverse loop
function sortingBySelectionMethod3(data) {
    for (let i = 0; i < data.length; i++) {
        let minElem = i;
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] > data[minElem]) {
                minElem = j;
            }
        }
        let temp = array[minElem];
        array[minElem] = data[i];
        data[i] = temp;
    }

}
sortingBySelectionMethod3(array);
console.log(array);