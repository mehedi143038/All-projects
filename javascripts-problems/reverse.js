var speech ="My name is Mehedi Hasan I am 20 year old";
var reverse = "";
len=speech.length;
var j=0;
for(var i=len-1;i>=0;i--){
    reverse=reverse+speech[i];
    
}
console.log(reverse);