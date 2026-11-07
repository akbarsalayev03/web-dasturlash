// 1 ekuk(a, b) — Ikki musbat butun sonning eng kichik umumiy karralini (EKUK) qaytaring.
function ekuk(a, b) {
  let x = a;
  let y = b;
  while (y !== 0) {
    let qolgan = x % y;
    x = y;
    y = qolgan;
  }
  let gcd = x;
  return (a * b) / gcd;
}

console.log(ekuk(4, 6));     // 12
console.log(ekuk(7, 5));     // 35
console.log(ekuk(12, 18));   // 36
console.log(ekuk(1, 100));   // 100
console.log(ekuk(17, 13));   // 221
