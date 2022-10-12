// sorting of an array by bubble sort method
let array = [1,5,4,7,3,6,8,9,2,0,10];
let temp;
// Sorting of an array in asending order by bubble short method 
for(let i =0; i<array.length; i++){
    for(let j =0; j<array.length; j++){
        if (array[j] > array[i]) {
             temp = array[i];
             array[i] = array[j];
             array[j] = temp;
        }
    }
}
console.log(array);

// Sorting of an array in desending order by bubble sort method

for(let i =0; i<array.length; i++){
    for(let j =0; j<array.length; j++){
        if (array[i] > array[j]) {
             temp = array[i];
             array[i] = array[j];
             array[j] = temp;
        }
    }
}
console.log(array);

// 
 for(let i =0; i<array.length; i++){
    for(let j =0; j<array.length; j++){
        if (array[j] > array[j+1]) {
             temp = array[i];
             array[j] = array[j+1];
             array[j+1] = temp;
        }
    }
}
console.log(array);
// 
for(let i =0; i<array.length; i++){
    for(let j =0; j<array.length; j++){
        if (array[j+1] > array[j]) {
             temp = array[j];
             array[j] = array[j+1];
             array[j+1] = temp;
        }
    }
}
console.log(array);