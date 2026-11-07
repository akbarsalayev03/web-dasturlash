// 3-masala. takrorlanishSoni(arr, x) — Massivda x qiymatining takroranishini qaytaring.
function takrorlanishSoni(massiv, x) {
  let son = 0;
  for (let i = 0; i < massiv.length; i++) {
    if (massiv[i] === x) {
      son++;
    }
  }
  return son;
}

console.log(takrorlanishSoni([1, 2, 2, 3, 2], 2));  // 3
console.log(takrorlanishSoni(["a", "b"], "c"));     // 0
console.log(takrorlanishSoni([1, 1, 1], 1));        // 3
console.log(takrorlanishSoni([], 5));               // 0
console.log(takrorlanishSoni(["a", "a", "b", "a"], "a"));  // 3
