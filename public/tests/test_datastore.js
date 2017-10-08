var ds = new App.Datastore();
ds.add('m@bond.com', 'tea');
ds.add('james@bond.com', 'espresso');
console.log(ds.getAll());
ds.remove('james@bond.com');
console.log(ds.getAll());
console.log(ds.get('m@bond.com'));
console.log(ds.get('james@bond.com'));
