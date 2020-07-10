const sayHello = function (name) {
  console.log('Hello ' + name);
}
sayHello('caliba');

const returnSayHello = function (nam) {
  return 'hello' + nam;
}
const greeting = returnSayHello('Jon');
console.log(greeting);
