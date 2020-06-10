let n= 5;
    k= 2;
    max = 0;
for(let i=1;i<=n-1;i++){
    for(let j = i+1;j<=n;j++){
        if((i&j)>max && (i&j)<k){
            max = i&j;
        }
    }
}

console.log(max);