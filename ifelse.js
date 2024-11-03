var age=25;
var ticketprice;

if(age<12){
    ticketprice=15;
}
else if(age>=12 && age<18){
    ticketprice=25;
}
else{
    ticketprice=40;
}

console.log("Ticket Price:₹" +ticketprice)


var purchase=150;
var discount;

if(purchase>=100){
    discount=30;
}

else if(purchase>=50){
    discount=10;
}
else{
    discount=0;
}

console.log("Discount:₹"+discount)