// 2-masala. kataHarfarSoni(s) — Satrda harflar sonini qaytaring.
function kataHarfarSoni(s) {
  let son = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char >= 'A' && char <= 'Z') {
      son++;
    }
  }
  return son;
}

console.log(kataHarfarSoni("Web Dasturlash UrDU"));  // 5
console.log(kataHarfarSoni("salom"));                // 0
console.log(kataHarfarSoni("JavaScript"));           // 2
console.log(kataHarfarSoni(""));                     // 0
console.log(kataHarfarSoni("ABCdefGHI"));            // 6
