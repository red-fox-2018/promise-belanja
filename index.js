let beli = require('./beli')

let uang = 5000

let objPermen = {item:'permen',harga:200,waktu:700}
let objKopi = {item:'kopi',harga:500, waktu:500}
let objIphone = {item:'iphone', harga:700, waktu:800}
let objGelas = {item:'gelas', harga:800, waktu:900}
let objLaptop = {item:'laptop', harga:900, waktu:600}


beli(uang,objPermen)
.then(kembaliannya =>{
    if(kembaliannya > 0){
        return beli(kembaliannya, objLaptop)
        .then(kembaliannya => {
            return kembaliannya
        })
    }
})
.then(kembaliannya =>{
    if(kembaliannya > 0){
        return beli(kembaliannya, objIphone)
        .then(kembaliannya => {
            return kembaliannya
        })
    }
})
.then(kembaliannya =>{
    if(kembaliannya > 0){
        return beli(kembaliannya, objGelas)
        .then(kembaliannya => {
            return kembaliannya
        })
    }
})
.then(kembaliannya => {
    if(kembaliannya > 0){
        return beli(kembaliannya, objKopi)
        .then(kembaliannya => {
            return kembaliannya
        })
    }
})