var beli = require('./beli.js')

class item{
  constructor(name,harga,waktu){
    this.item = name
    this.harga = harga
    this.waktu = waktu
  }
}

let permen = new item('permen',300,200)
let batu = new item('batu',500,300)
let gula = new item('gula',200,150)
let soda = new item('soda',700,200)
let kacang = new item('kacang',600,200)
var uang = 2300

beli(uang,permen)
.then(kembalianPermen=>{
   if(kembalianPermen > 0){
    return beli(kembalianPermen, batu)
    .then(kembalianBatu=>{
      return kembalianBatu
    })
  }
})
.then(abisBatu=>{
  if(abisBatu > 0){
    return beli(abisBatu,gula)
    .then(kembalianGUla=>{
      return kembalianGUla
    })
  }
})
.then(abisGula=>{
  if(abisGula > 0){
    return beli(abisGula,soda)
      .then(kembalianSoda=>{
        return kembalianSoda
      })
  }
})
.then(abisSoda=>{
  if(abisSoda){
    return beli(abisSoda,kacang)
    .then(kembalianKacang=>{
      console.log(`belanja selesai sisa uang ${kembalianKacang}`)
    })
  }
})
