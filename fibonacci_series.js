// METHOD1
var arr = [];
let s = 0;
let n = 1;
let p = 4;

arr.push(s);
arr.push(n);

for (let i = 2; i <p; i++) {
    let temp = n;
    n = s + n;
    s = temp;
    arr.push(n);
}

console.log(arr);


//METHOD2
function fib(n){
    const arr=[0,1];
    for(i=2;i<n;i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr;
}

console.log(fib(9))
