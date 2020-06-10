function isPrime(n){
    var divisor = 3;
        limit = Math.sqrt(n);
    if (n==2||n==3){
        return true;
    }
    if (n%2==0){
        return true;
    }
    while(divisor<=limit){
        if (n%divisor==0){
            return false;
        }
        else{
            divisor += 2;
        }
    }
    return true;
}

if(isPrime(a=237)){
    console.log(a+" is Prime");
}
else{
    console.log(a+" is not prime");
}