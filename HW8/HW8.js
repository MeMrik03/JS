// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function userr(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let User = [
    new userr(1, 'Dmitry', 'Vaskin', 'mannu.ch@gmail.com', '38032141543'),
    new userr(2, 'Kolya', 'Pupkin', 'hero2231@gmail.com', '380321312121'),
    new userr(3, 'Nastya', 'Cymbal', 'karanboka@gmail.com', '38035347867'),
    new userr(4, 'Sasha', 'Shan', 'bokachoodatui@gmail.com', '38034960636'),
    new userr(5, 'Vadim', 'Evlah', 'dekholoduniya.yaha@gmail.com', '38012381984'),
    new userr(6, 'Maksim', 'Karp', 'jojo.okl1@yahoo.com', '38094650560'),
    new userr(7, 'Polina', 'Bandr', 'amit234@yahoo.com', '38065489356'),
    new userr(8, 'Antony', 'Bek', 'noonecando-1@yahoo.com', '38085493096'),
    new userr(9, 'Vika', 'Osad', 'yoyohoney-1@outlook.com', '38005349678'),
    new userr(10, 'Nazar', 'Voevodin', 'chaloca-le@yahoo.com', '38083540637')
]
console.log(User)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = User.filter(user => user.id % 2 === 0);
console.log(filteredUsers)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUsers = User.sort((a, b) => (a.id - b.id))
console.log(sortUsers)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Clients {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let Client = [
    new Clients(1, 'Dmitry', 'Vaskin', 'mannu.ch@gmail.com', '38032141543', ['Bread', 'Eggs', 'Chicken', 'Ice cream', 'Eggs']),
    new Clients(2, 'Kolya', 'Pupkin', 'hero2231@gmail.com', '380321312121', ['Salt', 'Chicken', 'Ice cream', 'Eggs', 'Chicken', 'Tomato']),
    new Clients(3, 'Nastya', 'Cymbal', 'karanboka@gmail.com', '38035347867', ['Chicken', 'Ice cream', 'Eggs', 'Chicken', 'Tomato']),
    new Clients(4, 'Sasha', 'Shan', 'bokachoodatui@gmail.com', '38034960636', ['Coffe']),
    new Clients(5, 'Vadim', 'Evlah', 'dekholoduniya.yaha@gmail.com', '38012381984', ['Ice cream']),
    new Clients(6, 'Maksim', 'Karp', 'jojo.okl1@yahoo.com', '38094650560', ['Beer', 'Eggs', 'Chicken', 'Tomato']),
    new Clients(7, 'Polina', 'Bandr', 'amit234@yahoo.com', '38065489356', ['Eggs']),
    new Clients(8, 'Antony', 'Bek', 'noonecando-1@yahoo.com', '38085493096', ['Tomato']),
    new Clients(9, 'Vika', 'Osad', 'yoyohoney-1@outlook.com', '38005349678', ['Potato', , 'Tomato', 'Pepper']),
    new Clients(10, 'Nazar', 'Voevodin', 'chaloca-le@yahoo.com', '38083540637', ['Pepper'])
]
console.log(Client)

// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientsorted = Client.sort((a, b) => (a.order.length - b.order.length))
console.log(clientsorted)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Carr(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function (dr) {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function () {
        for (const prop in this) {
            if (this.hasOwnProperty(prop) && typeof this[prop] !== 'function') {
                console.log(`${prop.toUpperCase()} - ${this[prop]}`);
            }
        }
    }
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Максимальна швидкість тепер: ${this.maxSpeed}`)
    }

    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(`Рік випуску змінено на: ${this.year}`);
    }
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(`Водій доданий: ${driver.name}`)
    }
}

let car1 = new Carr('E63', 'Mercedes-Benz', 2019, 280, 5)
car1.drive();
car1.info();
car1.increaseMaxSpeed(50);
car1.changeYear(2023);
car1.addDriver({name: 'Sanya'});

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Carss {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (let carKey in this) {
            console.log(`${carKey.toUpperCase()}`, this[carKey])
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Максимальна швидкість тепер: ${this.maxSpeed}`);
    }

    changeYear(newValue) {
        this.year = newValue;
        console.log(`Рік випуску змінено на: ${this.year}`);
    }

    addDriver(driver) {
        this.driver = driver;
        console.log(`Водій доданий: ${driver.name}`)
    }

}

let car2 = new Carss('Camry', 'Toyota', 1997, 220, 2)
car2.drive();
car2.info();
car2.increaseMaxSpeed(100);
car2.changeYear(2013);
car2.addDriver({name: 'Kolya'});

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let Cinders = [
    new Cinderella('Cinderella 1', 18, 32),
    new Cinderella('Cinderella 2', 21, 33),
    new Cinderella('Cinderella 3', 22, 34),
    new Cinderella('Cinderella 4', 23, 35),
    new Cinderella('Cinderella 5', 24, 36),
    new Cinderella('Cinderella 6', 25, 37),
    new Cinderella('Cinderella 7', 26, 38),
    new Cinderella('Cinderella 8', 27, 39),
    new Cinderella('Cinderella 9', 28, 40),
    new Cinderella('Cinderella 10', 29, 41)
]

class Prince {
    constructor(name, age, foundSize) {
        this.name = name
        this.age = age
        this.foundSize = foundSize
    }

    findCinderella(cinderellas) {
        for (const cinderella of cinderellas) {
            if (cinderella.size === this.foundSize) {
                return cinderella;
            }
        }
        return null
    }
    findCinder(cinderellas){
    return cinderellas.find(cinderella => cinderella.size === this.foundSize)}
}

let prince = new Prince('Prince', 30, 33)

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
console.log(prince.findCinderella(Cinders))

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(prince.findCinder(Cinders))