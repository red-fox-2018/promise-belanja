const beli = require('./beli')

let obj = {
    item:'sabun',
    harga: 15000
}
let obj2 = {
    item:'sikat gigi',
    harga: 5000
}
let obj3 = {
    item:'durian',
    harga: 70000
}
let obj4 = {
    item:'cilok',
    harga: 1000
}

beli(100000,obj)
.then(kembalian => {
    // console.log(kembalian)
    return beli(kembalian, obj2)
    .then(kembalian2 => {
        return beli(kembalian2, obj3)
    })
})
.then(kembalian3 =>{
    return beli(kembalian3, obj4)
    .then(kembalian4 => {
        // console.log(kembalian4)
    })
})
.catch(function(err){
    console.log(err)
})
