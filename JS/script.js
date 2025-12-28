console.log("JS Learning")
var a =1;
const b=2;
let c=3;
console.log(a);
console.log(b);
console.log(c);
function btn()
{
console.log("Hello");
}
console.log(Date());
/*
for( var d=0; d<=10; d++){ 
    console.log(d);
}
    */
var i=10;
while(i>1){
    console.log(i);
    i--;
}
//jb code dobara use krna hoo
// jb code direct na chalana hoo 
function Tea(){
    console.log("Buy Milk")
    console.log("Use Cattele")
    console.log("Make Tea")
}
Tea();
Tea();
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
const student = {
  name: "Sultan",
  age: 21,
  isStudent: true
};

console.log(student);
console.log(student.name);   
console.log(student.age);
document.getElementById("btn").addEventListener("click", function () {
    alert("Button clicked!");
});
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const numbers = [5, 2, 9, 1, 5, 6];
console.log("Sorted:", bubbleSort(numbers));
console.log('Date');
