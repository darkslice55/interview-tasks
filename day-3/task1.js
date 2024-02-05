console.log('foo');

setTimeout(() => {
  console.log('bar');
}, 0);

queueMicrotask(() => {
  console.log('baz');
  Promise.resolve().then().then(() => console.log('ban'));
});

new Promise((resolve) => {
  console.log('bla');
  resolve('baf');
}).then(console.log);

console.log('bak');


// Сначала синхронные по порядку: 
// foo 
// bla (екзекьютор в промисе синхронный) 
// bak
// Микротаски все:
// baz // потом резолв без лога из микротаски
// baf // потом then() от резолва из микротаски
// ban
// Макротаска одна
// bar