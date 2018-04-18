const Beli = require('./beli');

var permen = {
  item: "permen",
  harga: 200,
  waktu: 1000
}

var roti = {
  item: "roti",
  harga: 300,
  waktu: 1500
}

var pizza = {
  item: "pizza",
  harga: 200,
  waktu: 2000
}

var spagetti = {
  item: "spagetti",
  harga: 400,
  waktu: 1200
}

Beli(1000, permen)
.then(function(terimaData) {
  return Beli(terimaData, roti)
  .then(function(terimaData2) {
    return terimaData2;
  })
})
.then(function(terimaData3) {
  return Beli(terimaData3, pizza)
  .then(function(terimaData4) {
    return terimaData4
  })
})
.then(function(terimaData5) {
  return Beli(terimaData5, spagetti)
  return terimaData5
})
.catch(function(err) {
  console.log(err);
})
