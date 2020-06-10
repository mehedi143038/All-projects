function getArraySum(numbers){
    var sum=0;
    for(var i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum;
}
var numbers=[3,5,7,8,94,8];
console.log(getArraySum(numbers));
console.log(getArraySum([33,35,7,2,344,6,8]));