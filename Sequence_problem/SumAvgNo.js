// Generate 5 Random two digit Numbers and find sum and avrage
let random1 = Math.floor((Math.random() * 90)+10);
let random2 = Math.floor((Math.random() * 90)+10);
let random3 = Math.floor((Math.random() * 90)+10);
let random4 = Math.floor((Math.random() * 90)+10);
let random5 = Math.floor((Math.random() * 90)+10);
let n=5;
let sum = random1 + random2 + random3 + random4 + random5;
console.log("The Sum of Random Numbers is = "+sum);
let average=sum/n;
console.log("The Average Of Random Numbers is = "+average);

