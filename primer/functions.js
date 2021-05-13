/*
 * unintentional type coercion with a function
 */
function sumPrices (first, second, third) {
  return first + second + third;
}

totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // 100100undefined string

totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // 600 number

totalPrice = sumPrices(100, 200); // third value is set to undefined
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // NaN number


/*
 * avoid argument mismatch with default parameter
 */
sumPrices = function (first, second, third = 0) {
  return first + second + third;
}

totalPrice = sumPrices(100, 200); // third value is set to 0
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // 300 number


/*
 * avoid argument mismatch with rest parameter and filters
 */
sumPrices = function (...numbers) {
  let reducer = function (accumulator, currentValue) {
    currentValue = (Number.isNaN(Number(currentValue)) ? 0 : Number(currentValue));
    return accumulator + currentValue;
  }
  let initialValue = 0;
  
  return numbers.reduce(reducer, initialValue);
}

totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // 600 number

totalPrice = sumPrices(100, 200, undefined, false, "hello");
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // 300 number


/*
 * sumPrices as arrow functions
 */
sumPrices = (...numbers) => numbers.reduce((accumulator, currentValue) => accumulator + (Number.isNaN(Number(currentValue)) ? 0 : Number(currentValue)));

totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // 600 number

totalPrice = sumPrices(100, 200, undefined, false, "hello");
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // 300 number

