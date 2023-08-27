function triangle(a, b) {
    console.log(a * b)
}

triangle(19, 23)

function kolo(r) {
    console.log(Math.PI * r * r)
}

kolo(4)

function celindr(h, r) {
    let visota = 2 * Math.PI * r * h
    let radius = 2 * Math.PI * r * r
    return visota + radius
}

let visota = 5;
let radius = 2;
let plosha = celindr(visota, radius);
console.log(`${plosha}`);


let users = [
    {name: 'Sasha', username: 'Uname1', password: '513a423'},
    {name: 'Vadya', username: 'Uname2', password: 'x3142'},
    {name: 'Antonyi', username: 'Uname3', password: 'c123'},
    {name: 'Dmytro', username: 'Uname4', password: `zcxv34zx`},
    {name: 'Ilya', username: 'Uname5', password: 'vzcx87zxvc'},
    {name: 'Nastya', username: 'Uname6', password: 'vcxzkd7'},
    {name: 'Masha', username: 'Uname7', password: 'vczxbf9'},
    {name: 'Dasha', username: 'Uname8', password: 'fasdw21sa'},
    {name: 'Polya', username: 'Uname9', password: 'adsv91'},
    {name: 'Valera', username: 'Uname10', password: 'adop1ads'}
]

function masiv(arr) {
    for (let item of arr) {
        console.log(item)
    }
}

masiv(users)

function parag(kk) {
    for (let kkElement of kk) {
        document.write(kkElement)
    }
}

parag(`<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptatem.</p>`)

function spi(aa) {
    for (let i = 0; i < 1; i++) {
        document.write(`<ul><li>${aa}</li><li>${aa}</li><li>${aa}</li></ul>`)
    }
}

spi('lorem')

let tabl = [
    {name: 'Sasha', age: 21, password: true},
    {name: 'Vadya', age: 20, password: true},
    {name: 'Antonyi', age: 19, password: true},
    {name: 'Dmytro', age: 20, password: true},
]

function tablica(arr) {
    for (let tablElement of tabl) {
        document.write(`<ul><li>${tablElement.name} ${tablElement.age} ${tablElement.password}</li></ul>`)
    }
}

tablica(tabl)

let tab = [
    {name: 'Sasha', age: 21, id: 251},
    {name: 'Vadya', age: 20, id: 321},
    {name: 'Antonyi', age: 19, id: 419},
    {name: 'Dmytro', age: 20, id: 012},
]

function idish(arr) {
    for (let i = 0; i < tab.length; i++) {
        const tabElement = tab[i];
        document.write(`<ul><li>ID: ${tabElement.id} Ім'я: ${tabElement.name} Вік: ${tabElement.age}</li></ul>`)
    }
}

idish(tab)


let zero = [20, 21, 2, 1, 4, 6, 7, 43, 12]

function findMinNumber(arr) {
    let min = zero[0]
    for (let i = 1; i < zero.length; i++) {
        if (zero[i] < min) {
            min = zero[i]
        }
    }
    return min
}

console.log(findMinNumber(zero))

function sum(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total
}
let num = [23, 12, 4, 6]
let result = sum(num)
console.log(`${result}`)

let aar=[21,312,11]
function swap(arr,index1,index2){
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr
}
let index1 = 0;
let index2 = 1;
let swappedArray = swap(aar, index1, index2);
console.log(swappedArray);

function exchange(sumUAH,currencyValues,exchangeCurrency){
}
