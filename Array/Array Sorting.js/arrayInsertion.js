let array = [12, 28, 32, 16, 25];
function insertionSort(data) {
    for (let i = 1; i < data.length; i++) {
        let j;
        let temp = data[i];
        j = j - 1;
        while (j >= 0 && data[j] > temp) {
            data[j + 1] = data[j];
            j--;
        }
        data[j + 1] = temp
    }
}
insertionSort(array);
console.log(array);