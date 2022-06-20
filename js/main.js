'use strict'

let sum = 0;

for (let i = 1; i <= 10; i++) {
    
}

//const container = document.getElementById('container');

////////////////////
/*
var employeeId = '1234abe';
(function(){
        console.log(employeeId);
        var employeeId = '122345';
})();

/////////////////

var foo = function bar() {
  return 1;
};
//console.log(typeof bar());
console.log(foo);
//////////////////////


setTimeout(() => console.log(2), 0);
 
console.log(1);
 
new Promise(res => {
    console.log(5);
    res();
}).then(() => console.log(4));
 
console.log(3);
///////////////////////////
*/
/*
Promise.resolve(1)
     .then(x => x + 1)
     .then(x => { throw x })
     .then(x => console.log(x))
     .catch(err => console.log(err))
     .then(x => Promise.resolve(1))
     .catch(err => console.log(err))
     .then(x => console.log(x));
/*


/////////////////////////////////////////////
function foo() {
     console.log(this.name);
}
 
function doFo(fn) {
     fn();
}
 
var a = {
    foo: foo,
    name: 'Bob',
};
var b = {
    foo: foo, 
     name: 'Bob2',
};
doFo(a.foo.bind(a).bind(b));
Marina Krivel15:40
__________________
var foo = 1;
 
(function f() {
    
    if (foo) {
        var foo = 2
    }
    console.log(foo)
})()
*/