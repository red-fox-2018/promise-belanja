function beli(uang, obj){

  return new Promise((resolve, reject) => {
    setTimeout(function(){

      console.log(`Saya pergi membeli ${obj.item}`)
      let kembalian = uang - obj.harga
      if (uang >= obj.harga) {
  
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      }else{
  
        console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
        resolve(kembalian)
      }
  
    }, obj.waktu);
  })

}

module.exports = beli;