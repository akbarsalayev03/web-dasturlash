/**
  5 - masala.guruhNatijasi(talabalar) — { ism, ball } obyektlaridan iborat massiv berilgan.
  Ortacha — balllar o‘rtachasi (1 xona aniqlikda, 1 xona decimal qoldir).
  engYaxshi — eng yuqori ball olgan talaba ismi.
**/
function guruhNatijasi(talabalar) {
  if (talabalar.length === 0) {
    return { ortacha: 0, engYaxshi: "" };
  }

  let jami = 0;
  for (let i = 0; i < talabalar.length; i++) {
    jami += talabalar[i].ball;
  }
  const ortacha = Math.round((jami / talabalar.length) * 10) / 10;
  let engYaxshiTalaba = talabalar[0].ism;
  let engYaxshiBall = talabalar[0].ball;
  for (let i = 1; i < talabalar.length; i++) {
    if (talabalar[i].ball > engYaxshiBall) {
      engYaxshiBall = talabalar[i].ball;
      engYaxshiTalaba = talabalar[i].ism;
    }
  }

  return { ortacha, engYaxshi: engYaxshiTalaba };
}

console.log(guruhNatijasi([
  { ism: "Ali", ball: 85 },
  { ism: "Vali", ball: 92 },
  { ism: "Gulnoza", ball: 78 }
])); // { ortacha: 85, engYaxshi: "Vali" }

console.log(guruhNatijasi([
  { ism: "A", ball: 95 },
  { ism: "B", ball: 88 },
  { ism: "C", ball: 75 }
])); // { ortacha: 86, engYaxshi: "A" }

console.log(guruhNatijasi([
  { ism: "X", ball: 100 },
  { ism: "Y", ball: 100 },
  { ism: "Z", ball: 100 }
])); // { ortacha: 100, engYaxshi: "X" } (engYaxshi engi kichik ism bo'lishi kerak)

console.log(guruhNatijasi([]));// { ortacha: 0, engYaxshi: "" }

console.log(guruhNatijasi([
  { ism: "Solo", ball: 92 }
])); // { ortacha: 92, engYaxshi: "Solo" }
