function beli(uang, obj){
  return new Promise ((resolve,reject)=>{
    console.log(`uang saya ${uang}, Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
      if (uang >= obj.harga) {
        let kembalian = uang - obj.harga
        console.log(`Saya sudah membeli ${obj.item} dengan harga ${obj.harga} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      }
      if (uang < obj.harga) {
        console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`);
        resolve(uang)
      }
    }, obj.waktu);
  })
}
module.exports = beli;
