// var s=34;
// function demo(){
   
//    var y=23;
   
// }
// demo();
// console.log(s);
// console.log(y);
var paycheck=900;
var balance=10000;
var bill=400;
var status_bill=false;

if(paycheck>bill){
   paycheck=paycheck-bill;
   status_bill=true
}
else if(paycheck<bill){
   balance=balance-bill;
   status_bill=true
   
}
else{
   console.log("nothing");
}

console.log(paycheck);
console.log(balance);