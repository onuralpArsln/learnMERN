let walls = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let maxVol = 0;

for (let i = 1; i < walls.length; i++) { // ön duvar
    let currentVol = i * Math.min(walls[0], walls[i]);
    maxVol = Math.max(currentVol, maxVol);
}

console.log(maxVol)

// tüm duvarlar için bakmak 


for (let i = 0; i < walls.length; i++) { // arka duvar
    for (let j = i + 1; j < walls.length; j++) { // ön duvar
        let betterCurrentVol = (j - i) * Math.min(walls[j], walls[i])
        maxVol = Math.max(betterCurrentVol, maxVol);


    }
}

console.log(maxVol)


console.log("o(n) sol")

let leftPoint = 0
let rightPoint = walls.length - 1

while (rightPoint > leftPoint) { }

