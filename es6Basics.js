console.log(productId1);
var productId1 = 12;

console.log(productId2);
let productId2 = 12;

let productId3 = 12;
{
  let productId3 = 2000;
  console.log(productId3);
}
console.log(productId3);

let productId4 = 42;
for (productId4 = 0; productId4 < 10; productId4++) {
  console.log(productId4);
}

const MARKUP_PCT = 100;
console.log(MARKUP_PCT);

const MARKUP_PCT = 100;
MARKUP_PCT = 10;
console.log(MARKUP_PCT);

const MARKUP_PCT = 100;
if (MARKUP_PCT > 0) {
  const MARKUP_PCT = 10;
}
console.log(MARKUP_PCT);

var getPrice = () => 5.99;
console.log(typeof getPrice); // function

var getPrice = (count) => count * 4.0;
console.log(getPrice(2));

var getPrice = (count, tax) => {
  var price = count * 4.0;
  price *= 1 + tax;
  return price;
};
console.log(getPrice(2, 0.07));

var getPrice = (count, tax) => {
  var price = count * 4.0;
  price *= 1 + tax;
  return price;
};

console.log(getPrice2, (2, 0.07));

var invoice = {
  number: 123,
  process: () => console.log(this),
};
invoice.process();

var prices = [12, 20, 18];
var maxPrice = Math.max(...price);
console.log(maxPrice);

var codes = "ABCDEF";
var count = 0;
for (var code of codes) {
  count++;
}
console.log(count);

var codes = "ABCD";
var count = 0;
for (var code of codes) {
  count++;
}

var value = 0o10;
console.log(value);

let salary = {
  low: "20000",
  average: "30000", // 50000
  high: "50000",
};
let { low, average, high } = salary;
console.log(high);

let saalary = {
  low: "10000",
  avarage: "20000",
  high: "30000",
};
let { low, average, high } = salary;
console.log(average);

let [maxCode, minCode] = "AZ";
console.log(`min:${minCode},max:${maxCode}`);
