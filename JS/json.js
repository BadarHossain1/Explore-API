const user = {id:1, name: 'John', age: 25};
// console.log(user);
// json stands for JavaScript Object Notation

const stringified = JSON.stringify(user);
// console.log(stringified);

//stringified is a string

const shop = {
    owner: 'John',
    address: {
        city: 'Berlin',
        street: 'Friedrichstrasse'
    },
    products: ['Laptop', 'Phone', 'TV', 'Tablet'],
    revenue: 1000000,
    isOpen: true,
    isNew: false
};

// console.log(shop);
const stringifiedShop = JSON.stringify(shop);
// console.log(stringifiedShop);
const shopObj = JSON.parse(stringifiedShop);
// console.log(shopObj);