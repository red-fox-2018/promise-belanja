function beli(uang, obj){
  console.log(`Saya pergi membeli ${obj.item}`)

  let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        let object = {
           'kembalian' : kembalian
        }
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(object)
      }else{
        reject(`uang gk cukup nih buat beli ${obj.item} uangnya kurang ${kembalian}`);
      }
    }, obj.waktu);
  });

  return promise
}

module.exports = beli;
