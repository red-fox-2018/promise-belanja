function beli(uang, obj){
  
    console.log(`Saya pergi membeli ${obj.item}`)
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let kembalian = uang - obj.harga
        if (kembalian > 0) {
          console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
          resolve(kembalian)
        } else {
          console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
          reject(0)
        }
    }, obj.waktu);
  })
  return promise
    
}

module.exports = beli;
