function beli(uang, obj){
  let promise = new Promise((resolve, reject) => {
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      }else{
        reject(`uang gk cukup nih buat beli ${obj.item} kembaliannya ${kembalian}`);
        // reject(0)
      }
    }, obj.waktu);
  })
  return promise;
}

module.exports = beli;
