let number = 91;
let count=0;
for(let i=1; i<=number; i++){
    if( num%i == 0 ){
        count++;
    }
}
if(count==2){
    console.log("It's a prime number.");
}
else{
    console.log("It's not a prime number.");
}