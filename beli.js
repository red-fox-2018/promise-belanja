function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      cb(0)
    }
  }, obj.waktu);
}

//melakukan sesuatunya tuh dalem new promisenya 
//then itu buat munculin hasil kalo berhasil
//then setelah then nangkep parameter dr returnan then sebelomnya
//catch itu buat nangkep errornya
module.exports = beli;

function beli(uang, obj){
  let promise = new Promise( (resolve, reject) => {
    
    if(obj == {} || obj == undefined){
      reject("Harus ada barang yang di beli")
    }else{
      let sisaUang = uang - obj.harga
      var array=[sisaUang,obj]
      resolve(array)
    }
  })
  return promise
}


    