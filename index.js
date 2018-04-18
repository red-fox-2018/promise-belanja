const beli = require('./beli');

class Items {
  constructor(item, harga, waktu) {
    this.item = item
    this.harga = harga
    this.waktu = waktu
  }
}

class Akua extends Items {
  constructor() {
    super('Akua', 5000, 30)
  }
}

class Mijon extends Items {
  constructor() {
    super('Mijon', 8000, 50)
  }
}

class Pruti extends Items {
  constructor() {
    super('Pruti', 10000, 20)
  }
}

class Kacang extends Items {
  constructor() {
    super('Kacang', 4000, 60)
  }
}

class Kuaci extends Items {
  constructor() {
    super('Kuaci', 2000, 90)
  }
}

class Permen extends Items {
  constructor() {
    super('Permen', 8000, 70)
  }
}

const pruti = new Pruti()
const kacang = new Kacang()
const permen = new Permen()
const akua = new Akua()
const mijon = new Mijon()
const kuaci = new Kuaci()

let uang = 20000

beli(uang, pruti)

.then((kembalian_pruti) => {
  return beli(kembalian_pruti, kacang)

  .then((kembalian_kacang) => {
    return kembalian_kacang
  })

})

.then((kembalian_kacang) => {
  return beli(kembalian_kacang, kuaci)

  .then((kembalian_kuaci) => {
    return kembalian_kuaci
  })

})

.then((kembalian_kuaci) => {
  return beli(kembalian_kuaci, permen)

  .then((kembalian_permen) => {
    return kembalian_permen
  })

})

.then((kembalian_permen) => {
  console.log(kembalian_permen);
})
