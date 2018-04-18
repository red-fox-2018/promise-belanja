const beli = require ('./beli.js')

class Item {
    constructor(item, harga, waktu){
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}

let kopi = new Item('Kopi', 15000, 400)
let roti = new Item('Roti', 10000, 300)
let martabak = new Item('Martabak', 30000, 500)
let permen = new Item('Permen', 5000, 100)
let aqua = new Item('Aqua', 5000, 200)

let uang = 70000

beli(uang, kopi)
.then(kembalian_kopi =>{
    return beli(kembalian_kopi, roti)
    .then(kembalian_roti =>{
        return kembalian_roti
    })
})
.then(kembalian_roti =>{
    return beli(kembalian_roti, martabak)
    .then(kembalian_martabak =>{
        return kembalian_martabak
    })
})
.then(kembalian_martabak =>{
    return beli(kembalian_martabak, permen)
    .then(kembalian_permen =>{
        return kembalian_permen
    })
})
.then(kembalian_permen =>{
    beli(kembalian_permen, aqua)
    .then(kembalian_aqua =>{
        console.log('bersambung..');
    })
})
.catch((uang_kurang)=>{
    console.log(uang_kurang);
})