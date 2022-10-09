// Accessing array element by input text and button 
let array = [9, 5, 2, 8, 4, 3, 7, 1, 0, 6, 0, 10];
function getElement() {
    let elem = document.getElementById("element").value;
    if(elem<array.length && elem >=0 && typeof parseInt(elem)=== "number"){
        alert(array[elem])
    } else{
        alert("Please enter valid input");
    }
}

// Traversing araay element and accessing elemnent
let arr = [9, 5, 2, 8, 4, 3, 7, 1, 0, 6, 0, 10];
for (let i = 0; i < arr.length; i++) {
    console.log(`Array ${i} is ${arr[i]}` );
}
console.log(arr[5]);

