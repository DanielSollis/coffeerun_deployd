myTruck.createOrder({
    emailAddress: 'me@goldfinger.com',
    coffee: 'double mocha'
});
myTruck.createOrder({
    emailAddress: 'dr@no.com',
    coffee: 'decaf'
});
myTruck.createOrder({
    emailAddress: 'm@bond.com',
    coffee: 'earl grey'
});
console.log(myTruck.printOrders());
myTruck.deliverOrders('dr@no.com');
myTruck.deliverOrders('m@bond.com');
console.log(myTruck.printOrders());
