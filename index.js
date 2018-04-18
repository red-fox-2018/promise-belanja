const beli = require('./beli');
class Item {
  constructor(name, price, time) {
    this.item = name,
    this.harga = price,
    this.waktu = time
  }
}
let item1 = new Item('permen', 1000, 1000);
let item2 = new Item('coklat', 5000, 1000);
let item3 = new Item('roti', 6000, 1000);
let item4 = new Item('susu', 7000, 1000);
let item5 = new Item('kopi', 9000, 1000);
let item6 = new Item('ice cream', 9000, 1000);
let modal = 30000;

beli(modal, item1)
.then(kembalian => {
  return beli(kembalian, item2)
})
.then(kembalian => {
  return beli(kembalian, item3)
})
.then(kembalian => {
  return beli(kembalian, item4)
})
.then(kembalian => {
  return beli(kembalian, item5)
})
.then(kembalian => {
  return beli(kembalian, item6)
})
.catch(kembalian => {
  return kembalian;
})
