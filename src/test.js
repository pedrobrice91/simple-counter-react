let counter = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;

setInterval(() => {
  if (counter === 10) {
    counter = 0;
    counter2++;
    if (counter2 == 10) {
      counter2 = 0;
      counter3++;
    }
  }
  console.log(`${counter}${counter2}${counter3}`)
  counter ++ 
}, 1000);
