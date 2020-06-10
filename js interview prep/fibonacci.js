// fibonacci with recursion
function fibonacci(n){
    if(n<=1){
        return n;
    }
    else{
        return fibonacci(n-1)+fibonacci(n-2);
    }
}

function fibWithoutRecursion(n){
    var fib = [0,1];
    if(n<=2){
        return 1;
    }
    for(var i = 2; i <= n; i++){
        fib[i] = fib[i-1]+fib[i-2];
    }
    return fib;
}

console.log(fibWithoutRecursion(10));

console.log(fibonacci(11));