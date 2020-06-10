var marks = [34,26,94,78,85,93];
var max=0, sum=0;
for(var i=0;i<marks.length;i++){
    sum+=marks[i];
    if(marks[i]>max){
        max=marks[i];
    }
}
console.log("Maximum is = ",max, "and sum = ",sum);


