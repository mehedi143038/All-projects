var value=[3,5,2,8,3,6,8,6,6,8,86,54,3];
var uniqueValue=[];
for(var i=0;i<value.length;i++){
    var element=value[i];
    var result=uniqueValue.indexOf(element);
    if(result==-1){
        uniqueValue.push(element);
    }
}
console.log(uniqueValue);