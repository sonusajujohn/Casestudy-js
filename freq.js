let arr=[1,2,2,3,2,4,2,6];
let freq=[];
let maxcount=0;
for (let i = 0; i < arr.length; i++) {
    var count=0;
  for (let j = 0; j < arr.length; j++) {
    if(arr[i]==arr[j]){
        count++;
        }   
    }   
    if (count > maxcount) {
        maxcount=count;
        mostfreq=arr[i];
        
    }
}
console.log("The frequent element is "+mostfreq+" that occurs "+maxcount+ " times in the array");