
// array merge with for loop
let arr = [28,54,31];
let arr2 = [5,7,6,2];
let arr3 = [];
for(let i =0; i<arr.length; i++){
    arr3[i] = arr[i];
}
for(i=0; i<arr2.length; i++){
    arr3[arr.length+i] = arr2[i]
}
 console.log(arr3);

//  two array  merge with spread operator
let arr4 = [...arr,...arr2]
console.log(arr4);