const beli = require('./beli.js')

beli(20000, {item: "telor" ,harga: 100})
  .then((array)=>{
    if(array[0]>0){
      console.log(`Saya sudah membeli barang ${array[1].item}, kembaliannya ${array[0]}`)
      return array[0]
    }
    else{
      console.log(`uang gk cukup nih buat beli ${array[1].item}  kembaliannya cuma ${array[0]}`)
      return 0
    }
  })
  .catch((reject)=>{
    console.log(reject)
  })