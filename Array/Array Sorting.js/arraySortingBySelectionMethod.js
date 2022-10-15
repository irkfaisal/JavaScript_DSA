// Array sort by selection method
let array = [12, 20, 8, 30, 16];
function sortingBySelectionMethod(data) {
    for (let i = 0; i < data.length; i++) {
        let minElem = i;
        for (let j = i; j < data.length; j++) {
            if (data[j] > data[minElem]) {
                minElem = j;
            }
        }
        let temp = array[minElem];
        array[minElem] = data[i];
        data[i]= temp;
    }

}
sortingBySelectionMethod(array);
console.log(array)