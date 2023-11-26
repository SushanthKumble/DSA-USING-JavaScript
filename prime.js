function checkprime(n){
    if(n<2){
        return false
    }
    else
    {
        for(i=2;i<n;i++){
            if(n%i ==0){
                return false
            }
        }
    }
    return true
}
console.log(checkprime(72))



//optimized code
function checkprime(n){
    if(n<2){
        return false
    }
    else
    {
        for(i=2;i<=Math.sqrt(n);i++){
            if(n%i ==0){
                return false
            }
        }
    }
    return true
}
console.log(checkprime(4))
