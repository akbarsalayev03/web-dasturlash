// 4-masala. harflarChastotasi(s) — Satrda harflar chastotasini obyekt qaytaring.
function harflarChastotasi(s) {
  const chastotalar = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char >= 'A' && char <= 'Z') {
      chastotalar[char] = (chastotalar[char] || 0) + 1;
    } else if (char >= 'a' && char <= 'z') {
      chastotalar[char] = (chastotalar[char] || 0) + 1;
    }
  }
  return chastotalar;
}

console.log(harflarChastotasi("banana"));       // { b: 1, a: 3, n: 2 }
console.log(harflarChastotasi("veb"));          // { v: 1, e: 1, b: 1 }
console.log(harflarChastotasi("Hello World"));   // { H: 1, e: 1, l: 2, o: 2, W: 1, r: 1, d: 1 }
console.log(harflarChastotasi(""));             // {}
console.log(harflarChastotasi("AaAAaa"));       // { A: 3, a: 3 }
