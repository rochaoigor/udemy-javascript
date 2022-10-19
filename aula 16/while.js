function random (max, min) {
    const r = Math.random()* (max-min) + min;
    return Math.floor(r)
}

const min = 1;
const max = 50;
let rand = random(1,50) 
while (rand !== 10) {
    rand = random(min,max)
   
}
console.log('###')
do {
   rand = random(min,max)
   console.log(rand)
}while(rand !==10) {
    
}

/*let controle = 0;

while(controle <= 10) {
    console.log(controle)
    controle++
}*/