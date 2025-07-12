// # Akhirnya Logic dengan Array | Ujian

// ## Soal 1

/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  const oIndex = []
  const xIndex = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') oIndex.push(i)
    if (arr[i] === 'x') xIndex.push(i)
  }

  if (xIndex.length === 0) return 0

  let minDistance = Infinity

  for (let i = 0; i < oIndex.length; i++) {
    for (let j = 0; j < xIndex.length; j++) {
        const distance = Math.abs(oIndex[i] - xIndex[j])
        if (distance < minDistance) {
            minDistance = distance
        }
    }
  }
  return minDistance
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1

// ## Soal 2

/*
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
*/
function mengelompokkanAngka(arr) {
  const ganjil = []
  const genap = []
  const kelipatan3 = []

  for (let i = 0; i < arr.length; i++) {
    const angka = arr[i]

    if (angka % 3 === 0) {
        kelipatan3.push(angka)
    } else if ( angka % 2 === 0) {
        genap.push(angka)
    } else {
        ganjil.push(angka)
    }
  }
  return [genap, ganjil, kelipatan3]
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]


// ## Soal 3
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  animals.sort()
  const hasil = []

  for (let i = 0; i < animals.length; i++) {
    const hurufAwal = animals[i][0]
    let ditemukan = false

    for (let j = 0; j < hasil.length; j++) {
        if (hasil[j][0][0]===hurufAwal) {
            hasil[j].push(animals[i])
            ditemukan = true
            break
        }
    }
    if (!ditemukan) {
        hasil.push([animals[i]])
    }
  }
  return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

//  soal no 1 dan 3 itu menjadi obstacle tersulit wkwk