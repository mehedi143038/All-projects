var a=5;
var b=7;
console.log("Before swap a = ", a, "b = ", b);
var temp = a;
a = b;
b = temp;
console.log("After swap a = ", a, "b = ", b);
console.log("\nwithout temp ");

a = a + b;
b = a - b;
a = a - b;
console.log("swapping without temp a = ", a, "b = ", b);

console.log("with array");
[a,b]=[b,a];
console.log("swapping with array a = ", a, "b = ", b);