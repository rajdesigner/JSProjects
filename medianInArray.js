/*
* Complete the 'findMedian' function below. *
* The function is expected to return an INTEGER.
* The function accepts INTEGER_ARRAY arr as parameter. */

function findMedian(arr: number[]): number {
    // Write your code here
let middle = Math.floor(arr.length/2);
arr = [...arr].sort((a,b) => a-b);
return arr.length%2!==0?arr[middle]:(arr[middle-1]+arr[middle])/2;
}
