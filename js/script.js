// array alfabet
const alfabet = ["Z", "B", "C", "A", "Y"];

// array nomor
const nomor = [10, 8, 5, 4, 1];

// bandingkan elemen array nomor
function bandingkanNomor(a, b) {
  return a - b;
}

// a(10) - b(8) = 8, 10
// a(8) - b(5) = 5, 8
// a(5) - b(4) = 4, 5
// a(4) - b(1) = 1, 4
// 1, 4, 5, 8, 10

console.log(alfabet.sort());
console.log(nomor.sort(bandingkanNomor));
