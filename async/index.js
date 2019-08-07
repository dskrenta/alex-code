'use strict';

/*
function someCoolFunction() {

}

async function someReallyCoolAsyncFuncion() {

}

function waitAndThenDo(ms, func) {
  setTimeout(func, ms);
}

waitAndThenDo(3000, function() {
  console.log('hello');
});

setTimeout(() => {
  // do something
}, 1000)
*/

function makename(nameFunc, name) {
  nameFunc(name);
}

makename((name) => {
  console.log(`Hi, ${name}`);
}, 'Alex');

makename((somePersonThatIHate) => {
  console.log(`Fucking fuck you some person that I hate: ${somePersonThatIHate}`);
}, 'Haha')
