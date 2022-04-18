//Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const valor = 2 * Math.PI;
  var newArray = [];

  arr.map((element) => {
    let a = Math.pow(earthRadius + element.avgAlt, 3);
    let periodOrb = Math.sqrt(a / GM);
    let multip = valor * periodOrb;
    let periodOrbRedon = Math.round(multip);

    newArray.push({ name: element.name, orbitalPeriod: periodOrbRedon });
  });

  return newArray;
}

//Test
console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);
