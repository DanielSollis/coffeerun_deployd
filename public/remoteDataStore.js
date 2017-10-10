(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function RemoteDataStore(url) {
        if (!url) {
            throw new Error('No remote URL supplied');
        }
        this.serverUrl = url;
    }

    RemoteDataStore.prototype.add = function(key, val) {
        dpd.coffeeorders.post({
            'email': val.Email,
            'coffee': val.Coffee,
            'size': val.size,
            'flavor': val.flavor,
            'strength': val.strength
        }, function(result, err) {
            if (err) return console.log(err);
            console.log(result, result.id);
        });
    };
    RemoteDataStore.prototype.getAll = function() {
        dpd.coffeeorders.get(function (result, err) {
            if(err) return console.log(err);
            return result;
        });
    };

    RemoteDataStore.prototype.get = function(key, cb) {
        $.get(this.serverUrl + '/' + key, function(val, serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };

    RemoteDataStore.prototype.remove = function(key) {
        dpd.coffeeorders.get(function (result, err) {
            if(err) return console.log(err);
            for (var ord in result) {
                console.log(result[ord].email);
                console.log(result[ord].id);
                if (result[ord].email === key){
                    dpd.coffeeorders.del(result[ord].id, function (err) {
                        if(err) console.log(err);
                    });
                }
            }
        });
    };

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);
