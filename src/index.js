var $ = require('jquery');
var str = require('./constant');

var App = function() {
    this.met = function() {
        // console.log(str);
        $('body').html('<h1>' + str + '</h1>');
    };
};

var user = new App();
user.met();
