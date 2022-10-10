// 
function deleteElement() {
    let array = [10, 45, 25, 15, 85, 30, 22];
    let position = parseInt(document.getElementById("positionElement").value);
    for (let i = position; i < array.length - 1; i++) {
        array[i] = array[i + 1]
    }
    array.length = array.length - 1;
    console.log(array);
}

// deletion by for loop
let arr = [10, 45, 25, 15, 85, 30, 22];
let position = 3;
for (let i = position; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]
}
 arr.length = arr.length - 1;
console.log(arr);