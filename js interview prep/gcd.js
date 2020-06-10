function gcd(firstValue,secondValue){
    var name  = 'mehdi';
        reve = name.split('').reverse().join('');
    console.log(reve);
    var divisor = 2;
        greatestDivisor = 1;
    while(firstValue>=divisor && secondValue>=divisor){
        if(firstValue%divisor==0 && secondValue%divisor==0){
            greatestDivisor=divisor;
        }
        else{
            divisor++;
        }
    }
    return greatestDivisor;
}

console.log(gcd(33,22));