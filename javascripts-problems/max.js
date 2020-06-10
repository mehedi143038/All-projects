var arnob = 124;
var sigat =96;
var irfan =88;
if(arnob>sigat){
    if(arnob>irfan){
        console.log("arnob is bigger");
    }
    else
    {
        console.log("irfan is  bigger");
    }
}
else
{
    if(sigat>irfan){
        console.log("sigat is biger");
    }
    else 
    {
        console.log("irfan is bigger");
    }
}


var maximum=Math.max(sigat,irfan,arnob);
console.log(maximum);