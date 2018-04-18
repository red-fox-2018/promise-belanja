/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/


'use strict';
const beli = require('./beli.js');

class Item {
   constructor(item, harga, waktu) {
      this.item = item;
      this.harga = harga;
      this.waktu = waktu;
   }
}

let kopiItem = new Item('kopiItem', 50000, 1000);
let permen = new Item('permen', 5000, 1000);
let roti = new Item('roti', 10000, 2000);
let susu = new Item('susu', 7500, 2000);
let kacang = new Item('kacang', 3000, 1000);


beli(60000, kopiItem)
   .then(kembalianKopiItem => {
      if (kembalianKopiItem > 0) {
         return beli(kembalianKopiItem, permen)
            .then(kembalianPermen => {
               return kembalianPermen;
            });
      }
   })
   .then(kembalianPermen => {
      if (kembalianPermen > 0) {
         return beli(kembalianPermen, roti)
            .then(kembalianRoti => {
               return kembalianRoti;
            });
      }
   })
   .then(kembalianRoti => {
      if (kembalianRoti > 0) {
         return beli(kembalianRoti, susu)
            .then(kembalianSusu => {
               return kembalianSusu;
            });
      }
   })
   .then(kembalianSusu => {
      if (kembalianSusu) {
         return beli(kembalianSusu, kacang)
            .then(kembalianKacang => {
               console.log(`${kembalianKacang}`);
            });
      }
   }).catch((err) =>{
      console.log(err);
   });
