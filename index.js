"use strict"
const beli = require('./beli');

class Belanjaan {
    constructor(item, harga, waktu) {
        this.item = item;
        this.harga = harga;
        this.waktu = waktu;
    }
}

let permen = new Belanjaan('permen', 5000, 500);
let bubur = new Belanjaan('bubur', 5000, 1000);
let mie = new Belanjaan('mie ayam', 10000, 1100);
let yogurt = new Belanjaan('yogurt', 6000, 500);
let nasgor = new Belanjaan('nasi goreng', 10000, 800);

beli(13000, permen)
.then(kembalian1 => {
  return beli(kembalian1, bubur)
  .then(kembalian2 => {
    return kembalian2;
  })
})
.then(kembalian2 => {
  return beli(kembalian2, mie)
  .then(kembalian3 => {
    return kembalian3;
  })
})
.then(kembalian3 => {
  return beli(kembalian3, yogurt)
  .then(kembalian4 => {
    return kembalian4;
  })
})
.then(kembalian4 => {
  return beli(kembalian4, nasgor)
  .then(kembalian5 => {
    return kembalian5;
  })
})
.catch(message => {
  console.log(message);
})