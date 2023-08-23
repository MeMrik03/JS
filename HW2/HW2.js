let filmGenres = [
    "Action",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Thriller",
    "Western",
    "Crime thriller"]
console.log(filmGenres[0]);
console.log(filmGenres[1]);
console.log(filmGenres[2]);
console.log(filmGenres[3]);
console.log(filmGenres[4]);
console.log(filmGenres[5]);
console.log(filmGenres[6]);
console.log(filmGenres[7]);
console.log(filmGenres[8]);
console.log(filmGenres[9]);


let book = [
    {title: `A Place of Execution`, pagecount: '624', genre: 'Detective'},
    {title: `Tao Te Ching`, pagecount: '208', genre: `Philosophy`},
    {title: `Harry Potter and the Philosopher's Stone`, pagecount: 352, genre: `Adventure, Modern, Fantasy`}
]
console.log(book)


let books = [
    {title: `A Place of Execution`, pagecount: '624', genre: 'Detective', authors: [{name: 'Val McDermid', age: 68}]},
    {title: `The Outsiders`, pagecount: '208', genre: `Philosophy`, authors: [{name: 'S. E. Hinton', age: 75}]},
    {
        title: `Harry Potter and the Philosopher's Stone`,
        pagecount: 352,
        genre: `Adventure, Modern, Fantasy`,
        authors: [{name: ' J. K. Rowling', age: 57}]
    }
]
console.log(books)


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
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)


let x = 6;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

let time = 25;
if (time > 45 && time <= 59) {
    console.log('першу частину години')
} else if (time > 30 && time <= 45) {
    console.log('другу частину години')
} else if (time > 15 && time <= 30) {
    console.log('третю частину години')
} else if (time > 0 && time <= 15) {
    console.log('четверту частину години')
}


let day = 23;
if (day > 0 && day <= 10) {
    console.log(`Перша половина`)
} else if (day > 10 && day <= 20) {
    console.log(`Друга половина`)
} else if (day > 20 && day <= 31) {
    console.log(`Третя половина`)
}

let plans = 4
switch (plans) {
    case 1:
        console.log('Фарм')
        break;
    case 2:
        console.log('Дз')
        break;
    case 3:
        console.log('Робота')
        break;
    case 4:
        console.log('Гулять')
        break;
    case 5:
        console.log('Читать')
        break;
    case 6:
        console.log('Писать')
        break;
    case 7:
        console.log('Зустріч')
        break;
}


let numberA = 100
let numberB = 100
if (numberA > numberB) {
    console.log(numberA)
} else if (numberA < numberB) {
    console.log(numberB)
} else if (numberA === numberB) {
    console.log('Equal')
}


let x1 = NaN
let result = x1 || 'default';
console.log(result)


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер')
}if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер')
}if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер')
}if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер')
}if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер')
}if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер')
}