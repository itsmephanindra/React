var userName='Phanindra'

var userDetails={
    name:'Phanindra',
    age:35
}

var personalDetails={
    name:'',
    age:'',
    gender:''    
}

var eOrder={
    orderId:1001,
    orderName:'Laptoponeplus',
    orderPrice:45000,
    orderQty:1
}
personalDetails.name='Kumar';
personalDetails.age=30;
personalDetails.gender='Male';
personalDetails['name']='Phanindra Kumar';
userDetails.city='Bangalore';


console.log(eOrder);

eOrder.orderPrice=45000;
eOrder.orderQty=2;
eOrder.orderName='SmartPhone';

console.log(eOrder);