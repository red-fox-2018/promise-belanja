const beli = require('./beli');

class Item{
    constructor(name,price,time){
        this.item = name
        this.harga = price
        this.waktu = time
    }
}

let ayam = new Item ("ayam",10000,1000)
let sate = new Item ("sate",50000,1000)

beli(100000,ayam)
.then(result => {
    return beli(result.kembalian,sate)
})
.then(result =>{
    return beli(result.kembalian,ayam)
})
.then(result =>{
    return beli(result.kembalian,sate)
})
.then(result =>{
    return beli(result.kembalian,ayam)
})
.catch(err =>{
    console.log(err)
})