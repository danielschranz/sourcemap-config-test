var helper = require('./helper.js');

window.clickHandler = function (text) {
    alert(helper.shout(text ? text : "you forgot to provide a text"));
};
