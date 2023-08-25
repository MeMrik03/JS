let peoples = [
    {name: 'vasya',},
    {name: 'petya',},
    {name: 'kolya',},
    {name: 'olya',},
    {name: 'max',},
    {name: 'anya',},
    {name: 'oleg',},
    {name: 'andrey'},
    {name: 'masha'},
    {name: 'olya'}
]
for (let i = 0; i < peoples.length; i++) {
    const person = peoples[i];
    document.write(`<div>${person.name}</div>`)
}
for (let i = 0; i < peoples.length; i++) {
    const person = peoples[i];
    document.write(`<div>${person.name} ${i}</div>`)
}
let x = 0
while (x < 20) {
    document.write(`<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>`)
    x++
}
let y = 0
while (y < 20) {
    document.write(`<h1>${y}Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>`)
    y++
}

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`)
}

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    document.write(`
 <div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="" class="product-image">
</div>`)
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.status)
        document.write(`<div>${user.name} ${user.age} ${user.status}</div>`)
}
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (!user.status)
        document.write(`<div>${user.name} ${user.age} ${user.status}</div>`)
}
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.age > 30)
        document.write(`<div>${user.name} ${user.age}</div>`)
}

