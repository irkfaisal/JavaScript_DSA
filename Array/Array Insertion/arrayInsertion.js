
let array = [9, 5, 2, 8, 4, 1, 10];
function insertElement() {
    let newElem = parseInt(document.getElementById("element").value);
    let newPosition = parseInt(document.getElementById("position").value);
    for (let i = array.length - 1; i >= 0; i--) {
        if (i >= newPosition) {
            array[i + 1] = array[i]
            if (i == newPosition) {
                array[i] = newElem;
            }
        }
    }
    console.log(array);

}

// // adding new element by for loop
let arr = [9, 5, 2, 8, 4, 1, 10];
let newElem1 = 0;
let position1 = 4;
for (let i = arr.length - 1; i >= 0; i--) {
    if(i >= position1){
        arr[i+1] = arr[i]
        if (i === position1) {
            arr[i] = newElem1
        }
    }
}
console.log(arr);

// by array methods 
let arr2 = [9, 5, 2, 8, 4, 1, 10];
console.log(arr2.splice(4,0,0));

