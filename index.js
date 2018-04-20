/*jshint esversion:6*/
const beli = require('./beli.js');

let obj = [{
    item: 'Somay',
    harga: 5000,
    waktu: 1000
  },
  {
    item: 'Bakso',
    harga: 10000,
    waktu: 1000
  }, {
    item: 'Torabika',
    harga: 3000,
    waktu: 2000
  }, {
    item: 'Gorengan',
    harga: 1500,
    waktu: 200
  }, {
    item: 'Beng-Beng',
    harga: 2000,
    waktu: 100
  }
];

let uang = 75000;


  beli(uang, obj[0], function(kembalian) {
    beli(kembalian, obj[1], function(kembalian) {
      beli(kembalian, obj[2], function(kembalian) {
        beli(kembalian, obj[3], function(kembalian) {
          beli(kembalian, obj[4], function(kembalian) {
          });
        });
      });
    });
  });
