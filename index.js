const express = require('express');
const app = express();
const path = require('path'); // Modulni qo'shish
const os = require('node:os');

let datas = os.networkInterfaces();
console.log(datas);

app.get('/', (req, res) => {
  // HTML faylini yuborish
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/data', (req, res) => {
  // JSON ma'lumotlarni yuborish
  res.json(datas);
});


app.listen(1968, () => {
  console.log('Server ishlayapti', 1968);
});








// for (let item of datas) {
//   console.log(item);
// }
// const wirelessNetworkInfo = datas['Беспроводная сеть'];
// const loopbackInfo = datas['Loopback Pseudo-Interface 1'];

// console.log('Беспроводная сеть:', wirelessNetworkInfo);
// console.log('Loopback Pseudo-Interface 1:', loopbackInfo);