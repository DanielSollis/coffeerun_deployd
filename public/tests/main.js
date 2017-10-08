var window = {};
eval(require('fs').readFileSync('./scripts/datastore.js', 'utf-8'));
console.dir(window)
eval(require('fs').readFileSync('./scripts/truck.js', 'utf-8'));
console.dir(window)

var App = window.App;
var ds = new App.Datastore();
ds.add('m@bond.com', 'tea');
ds.add('james@bond.com', 'espresso');
console.log(ds.getAll());
ds.remove('james@bond.com');
console.log(ds.getAll());
console.log(ds.get('m@bond.com'));
console.log(ds.get('james@bond.com'));

var myTruck = new App.Truck('ncc-1701', new App.Datastore());
myTruck.createOrder({emailAddress: 'me@goldfinger.com', coffee: 'double mocha'});
myTruck.createOrder({emailAddress: 'dr@no.com', coffee: 'decaf'});
myTruck.createOrder({emailAddress: 'm@bond.com', coffee: 'earl grey'});
console.log(myTruck.printOrders());
myTruck.deliverOrders('dr@no.com');
myTruck.deliverOrders('m@bond.com');
console.log(myTruck.printOrders());
