//METHOD1
function fact(n){
    let result=1;
    for(let i=2;i<=n;i++){
        result=result*i;
    }
    return result;
}
console.log(fact(5));

// using recursion
function fact(n){
    let result;
    if(n==0 || n==1){
        result=1;
    }
    else{
        result=n*fact(n-1)
    }
    return result
}
console.log(fact(4));
