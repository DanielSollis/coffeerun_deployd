(function(window){
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function RemoteDataStore(url){
        if (!url) {
            throw new Error('No remote URL supplied');
        }
        this.serverUrl = url;
    }

    RemoteDataStore.prototype.add = function(key, val){
        dpd.coffeeorders.post({
            'email' : val.Email,
            'coffee' : val.Coffee,
            'size' : val.size,
            'flavor' : val.flavor,
            'strength' : val.strength
        }, function(result, err) {
            if(err) return console.log(err);
            console.log(result, result.id);
        });
    };
    RemoteDataStore.prototype.getAll = function(){
        $.get(this.serverUrl, function(serverResponse){
            console.log(serverResponse);
        });
    };

    RemoteDataStore.prototype.get = function(key, cb){
        $.get(this.serverUrl + '/' + key, function (val, serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };

    RemoteDataStore.prototype.remove = function(key){
        dpd.coffeeorders.del(key, function (err) {
            if(err) console.log(err);
        });
    };

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);
