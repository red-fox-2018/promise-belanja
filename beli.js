function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  return new Promise(function(res, rej) {
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      res(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      rej(0)
    }
  }, obj.waktu);
}

module.exports = beli;
