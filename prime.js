function checkprime(num){
    let count=0;
    for (i=1;i<=num;i++){
      if(num%i==0){
        count++;
      }
    }
    if(count==2){
      return true;
    }
      return false;
    }
  
  let a=checkprime([1,2,3,4,5,6,7,8,9]);
if(a==true){
  console.log("prime");
}else {
  console.log("not prime")
}