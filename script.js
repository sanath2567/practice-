var paycheck=100
var paystatus=false
var balance=1000
var car_rent=400
if(paycheck>=car_rent){
    paycheck=paycheck-car_rent
    paystatus=true
}
else if(balance>=car_rent){
    balance=balance-car_rent
    paystatus=true
}

if(paystatus){
    console.log("Car payment successfully ");
}

console.log(balance);
console.log(paycheck);
