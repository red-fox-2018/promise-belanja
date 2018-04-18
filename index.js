const beli = require('./beli')

class Item{
    constructor(name,harga,waktu){
        this.item = name
        this.harga = harga
        this.waktu = waktu
    }
}

let item1 = new Item('permen', 1500, 1000)
let item2 = new Item('roti', 4500, 1000)
let item3 = new Item('uc1000', 6500, 1000)
let item4 = new Item('susu', 5500, 1000)
let item5 = new Item('tebs', 4500, 1000)
let uang = 40000

beli(uang,item1)
.then(kembalian => {
    return beli(kembalian, item2)
})
.then(kembalian =>{
    return beli(kembalian, item3)
})
.then(kembalian =>{
    return beli(kembalian, item4)
})
.then(kembalian =>{
    return beli(kembalian, item5)
})
.catch(kembalian =>{
    console.log(kembalian)
})

