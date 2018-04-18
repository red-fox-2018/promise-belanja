let beli = require('./beli')

class Cemilan{
    constructor(){
        this.item = 'Cemilan'
        this.harga = 4000
        this.waktu = 5000
    }
}

class MakananUtama{
    constructor(){
        this.item = 'Makanan Utama'
        this.harga = 15000
        this.waktu = 5000
    }
}

class Minuman{
    constructor(){
        this.item = 'Minuman'
        this.harga = 10000
        this.waktu = 5000
    }
}

class Baju{
    constructor(){
        this.item = 'Baju'
        this.harga = 50000
        this.waktu = 5000
    }
}

class Celana{
    constructor(){
        this.item = 'Ceana'
        this.harga = 20000
        this.waktu = 5000
    }
}

let cemilan = new Cemilan()
let makananutama = new MakananUtama()
let minuman = new Minuman()
let baju = new Baju()
let celana = new Celana()

let uang = 10000

beli(uang, cemilan).then(function(value){
    return beli(value,makananutama)
})
.then(function(value){
    return beli(value, minuman)
})
.then(function(value){
    return beli(value, baju)
})
.then(function(value){
    return beli(value, celana)
})
.catch(function(err){
    console.log('uang gak cukup bro')
})


// beli(uang, cemilan, function(value){
//     beli(value, makananutama, function(value){
//         beli(value, minuman, function(value){
//             beli(value, baju, function(value){
//                 beli(value, celana, function(){
    
//                 })
//             })
//         })
//     })    
// })




