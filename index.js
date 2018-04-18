const beli = require('./beli');

class Product {
  constructor(nameParam, priceParam, timeParam) {
    this.item = nameParam;
    this.harga = priceParam;
    this.waktu = timeParam;
  }
}

class Permen extends Product {
  constructor(nameParam, priceParam, timeParam) {
    super(nameParam, priceParam, timeParam)
  }
}

class NasGor extends Product {
  constructor(nameParam, priceParam, timeParam) {
    super(nameParam, priceParam, timeParam)
  }
}

class BurYam extends Product {
  constructor(nameParam, priceParam, timeParam) {
    super(nameParam, priceParam, timeParam)
  }
}

class SotoAyam extends Product {
  constructor(nameParam, priceParam, timeParam) {
    super(nameParam, priceParam, timeParam)
  }
}

class EstehManis extends Product{
  constructor(nameParam, priceParam, timeParam) {
    super(nameParam, priceParam, timeParam)
  }
}

let items = ['permen', 'nasi goreng', 'bubur ayam', 'soto ayam', 'es teh manis'];
let itemsObj = []
for (var i = 0; i < items.length; i++) {
  if (items[i] === 'permen') {
    itemsObj.push(new Permen(items[i], 500, 1000))
  } else if (items[i] === 'nasi goreng') {
    itemsObj.push(new NasGor(items[i], 14000, 10000))
  } else if (items[i] === 'bubur ayam') {
    itemsObj.push(new BurYam(items[i], 8000, 4000))
  } else if (items[i] === 'soto ayam') {
    itemsObj.push(new SotoAyam(items[i], 12000, 8000))
  } else {
    itemsObj.push(new EstehManis(items[i], 4000, 2000))
  }
}

// console.log(itemsObj);

let initMoney = 20000;

beli(initMoney, itemsObj[0])
.then((kembalian) => {
  return beli(kembalian, itemsObj[1])
  .then((kembalian) => {
    return beli(kembalian, itemsObj[2])
    .then((kembalian) => {
      return beli(kembalian, itemsObj[3])
      .then((kembalian) => {
        return beli(kembalian, itemsObj[4])
        .then(kembalian)
      })
    })
  })
})
.catch((message) => {
  console.log(message);
})




// beli(20000, itemsObj[0], function (kembalianParam) {
//   beli(kembalianParam, itemsObj[1], function (kembalianParam){
//     beli(kembalianParam, itemsObj[2], function (kembalianParam) {
//       beli(kembalianParam, itemsObj[3], function (kembalianParam) {
//         beli(kembalianParam, itemsObj[4], function (kembalianParam) {
//
//         })
//       })
//     })
//   })
// });
