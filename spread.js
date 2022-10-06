const hobby = ['membaca', 'bermain']
const hobby2 = [...hobby, 'berenang', 'gaming']

const semuaHobby = [...hobby, ...hobby2]
console.log(hobby2)
//Destructuring object
var objectData = {
    nama: 'Ridhwan',
    umur: 19
}

const { nama, umur } = objectData
console.log(nama, umur)
//Destructuring array
const rgb = [250, 140, 0]
const [red, green, blue] = rgb
console.log(red, green, blue)