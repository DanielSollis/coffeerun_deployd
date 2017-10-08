(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('no selector provided');
        }
        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('could not find element with name ' + selector);
        }
    }

    FormHandler.prototype.addSubmitHandler = function(fn) {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function(event) { //grab form element on submit event
            event.preventDefault();   //stop normal submit event

            var data = {};
            $(this).serializeArray().forEach(function(item){
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });
            console.log(data);
            fn(data);
            this.reset();
            this.elements[0].focus();
        });
    };

    FormHandler.prototype.addInputHandler = function(fn) {
        console.log('setting input handler for form');
        this.$formElement.on('input', '[name="Email"]', function(event){
            var emailAddress = event.target.value;
            var message = '';
            if (fn(emailAddress)) {
                event.target.setCustomValidity('');
            } else {
                message = emailAddress + 'is not an authorized email address'
                event.target.setCustomValidity(message)
            }
        console.log(fn(emailAddress));
        });
    };
    App.FormHandler = FormHandler;
    window.App = App;
})(window);
