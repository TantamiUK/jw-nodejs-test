var events = require('events');
var utils = require('util');

var Person = function(name){
    this.name = name;
};

utils.inherits(Person, events.EventEmitter);

var james = new Person('James');
var mary = new Person('Mary');
var ryan = new Person('ryan');

var people = [james, mary, ryan];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' said: ' + msg)
    });
});

james.emit('speak', 'hey dudes');
james.emit('speak', 'I want a curry');
