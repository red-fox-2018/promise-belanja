const beli = require('./beli.js')


let hewan = {
  item: 'Cat',
  harga: 500000,
  waktu: 1000
}
let money = 10000000
// let promise = new Promise(function(resolve,reject){

beli(money, hewan).then(kembalian=>{
  beli(kembalian, hewan).then(kembalian=>{
    beli(kembalian, hewan).then(kembalian=>{
      beli(kembalian, hewan).then(kembalian=>{
        beli(kembalian, hewan).then(kembalian=>{
        }).catch((err)=>{console.log('error')})
      }).catch((err)=>{console.log('error')})
    }).catch((err)=>{console.log('error')})
  }).catch((err)=>{console.log('error')})
}).catch((err)=>{console.log('error')})