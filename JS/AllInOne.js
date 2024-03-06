// 1: JSON

const student = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
}

const json = JSON.stringify(student);

const studentJSON = JSON.parse(json);

// 2: Fetch

fetch('url')
    .then(response => response.json())
    .then(data => console.log(data));



// Keys and values

const keys = Object.keys(student);
const values = Object.values(student);

// for

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);


// Add or Remove from an array

const products = [
    { name: "laptop", price: 1000 },
    { name: "phone", price: 500 },
    { name: "tablet", price: 300 },
    
]

const newProduct = { name: "watch", price: 200 };

// copy products array and then add new product

const newProducts = [...products,newProduct];

// Create a new array without one specific item

const filteredProducts = products.filter(product => product.name !== "phone");