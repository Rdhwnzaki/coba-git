const tambah = (num1,num2) => num1 + num2
console.log(tambah(5,5))

//Method
const aritmatika = {
    pengurangan : function(num1,num2){
        total = num1 - num2
        return total
    },
    perkalian : (num1,num2) => {
        total = num1 * num2
        return total
    }
}
console.log(aritmatika.pengurangan(10,5))
console.log(aritmatika.perkalian(5,5))

//Method sort
let angka = [5,6,4,2,3,1,8,9];
let sortingAngka = angka.sort();

console.log(sortingAngka);
//Method map
let mappingAngka = angka.map(x => x%2==0 ? `${x} adalah genap` : `${x} adalah ganjil`)
console.log(mappingAngka)