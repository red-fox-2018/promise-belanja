var beli = require('./beli.js')

class Item {
  constructor(objItem) {
    this.item = objItem.item
    this.harga = objItem.harga
    this.waktu = objItem.waktu
  }
}

var item1 = new Item({
  item: 'novel',
  harga: 150000,
  waktu: 2000
})

var item2 = new Item({
  item: 'topi',
  harga: 60000,
  waktu: 1500
})

var item3 = new Item({
  item: 'headset',
  harga: 50000,
  waktu: 1250
})

var item4 = new Item({
  item: 'pulpen',
  harga: 2000,
  waktu: 1000
})

var item5 = new Item({
  item: 'sendal',
  harga: 75000,
  waktu: 4000
})

beli(250000, item1)
.then((kembalian) => {
  return beli(kembalian, item2)
  .then((kembalian) => {
    return kembalian
  })
})

.then((kembalian) => {
  return beli(kembalian, item3)
  .then((kembalian) => {
    return beli(kembalian, item4)
    .then((kembalian) => {
      return kembalian
    })
  })
})

.then((kembalian) => {
  return beli(kembalian, item5)
  .then((kembalian) => {
    return kembalian
  })
})
.catch(function(err) {
  console.log(err);
})
