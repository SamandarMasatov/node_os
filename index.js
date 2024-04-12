const express = require('express');
const { log } = require('node:console');
const app = express();
const os = require('node:os');

let datas = os.networkInterfaces();
console.log(datas);
// for (let item of datas) {
//   console.log(item);
// }
// const wirelessNetworkInfo = datas['Беспроводная сеть'];
// const loopbackInfo = datas['Loopback Pseudo-Interface 1'];

// console.log('Беспроводная сеть:', wirelessNetworkInfo);
// console.log('Loopback Pseudo-Interface 1:', loopbackInfo);


app.listen(3030, () => {
  console.log('Server ishlayapti', 1968);
});
