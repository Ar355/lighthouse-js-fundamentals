let total = 0;
const amounts = [61.00, 52.25, 112.99, 5.00];
for(let i = 0; i < amounts.length; i++){
  total += amounts[i];
}
console.log('Order toatl is: ', total);

total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);