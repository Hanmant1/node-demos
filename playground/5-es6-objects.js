// object property shorthand
const name = 'Hanmant';
const userAge = 27;

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// object destructuring syntax 
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 203,
    salePrice: undefined,
    rating: 4.2
}

// const { label: productLabel, stock, rating = 5 } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating)

const trascation = (type, { label, stock}) => {
  console.log(type, label, stock);
}

trascation('order', product);