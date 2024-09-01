arr=[1,2,5,7];
sum=0;
for (let i = 0; i < arr.length; i++) {
    x=arr[i]*arr[i];
    sum=sum+x;
}
console.log("The Sum of the Squares of the elements in the array ["+arr+"] is : " +sum);