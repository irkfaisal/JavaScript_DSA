// search element index 
function getElementIndex() {
    let array = [10,75,60,45,80,95,25,20];
    let searchElement = parseInt(document.getElementById("elementIndex").value);
    let elementIndex ;
    for(let i=0; i<array.length; i++){
        if(searchElement == array[i]){
            elementIndex = i;
            break;
        }
    }
    console.log(elementIndex);
}

// Search element index by for loop
let arr = [10,75,60,45,80,95,25,20];
let element = 20;
let index ;
for(let i=0; i<arr.length; i++){
    if(element == arr[i]){
        index =i;
           break;
    }
}
console.log(index);