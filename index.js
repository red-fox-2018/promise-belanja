const beli = require('./beli');



            var  obj1 =  {item: 'Permen', harga: 20000, waktu: 500}
            var  obj2 = { item: 'Roti', harga: 15000, waktu: 400}
            var  obj3 = { item: 'Gula', harga: 10000, waktu: 300}
            var  obj4 = { item: 'Kopi', harga: 50000, waktu: 200}
            var  obj5 = { item: 'susu', harga: 50000000, waktu: 100}



  beli(80000,obj1)
    .then(function(data1){
      return beli(data1,obj2)
        .then (function(data2){
          return beli (data2,obj3)
        })
    })
    .then(function(data3){
      return beli(data3,obj4)
        .then (function(data4){
          return beli (data4,obj5)
        })
    })
  .then(function(data4){
    return beli(data4,obj1)
  })
.catch(function(err){
  console.log(err);
})
