ar=[2,37,211,1642,31245];
len=ar.length;
if(ar[0]==2 || ar[0]==3 || ar[0]==5){
        console.log(ar[0]+" is a Prime Number")
    }
else{
    if(ar[0]%2==0 || ar[0]%3==0 || ar[0]%5==0){
             console.log(ar[0]+" is not a Prime Number.It is a composite number");
    }
    else{
    console.log(ar[0]+" is a Prime Number");
    }
}
