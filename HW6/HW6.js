let btr1 = 'hello world';
let btr2 = 'lorem ipsum';
let btr3 = 'javascript is cool';
console.log(`${btr1.length}`);
console.log(`${btr2.length}`);
console.log(`${btr3.length}`);


let a1 = 'hello world'
let a2 = 'lorem ipsum'
let a3 = 'javascript is cool'
let f1 = a1.toUpperCase()
let f2 = a2.toUpperCase()
let f3 = a3.toUpperCase()
console.log(f1)
console.log(f2)
console.log(f3)


let b1 = 'HELLO WORLD'
let b2 = 'LOREM IPSUM'
let b3 = 'JAVASCRIPT IS COOL'
let n1 = b1.toLowerCase()
let n2 = b2.toLowerCase()
let n3 = b3.toLowerCase()
console.log(n1)
console.log(n2)
console.log(n3)


let bstr = ' dirty string   '
let dirt = bstr.replaceAll(' ', '')
console.log(dirt)


let str = 'Ревуть воли як ясла повні';

function stringToarray(str) {
    let words = str.split(' ');
    return words;
}

let arr = stringToarray(str);
console.log(arr);


let numb = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
let rts = numb.map(numb => numb.toString())
console.log(rts)


let nums = [11, 21, 3];

function sortNums(nums, direction) {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        return nums.sort((a, b) => b - a)
    }
}

console.log(sortNums(nums, 'ascending'))
console.log(sortNums(nums, 'descending'))

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
let month = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
console.log(month)
let filt = coursesAndDurationArray.filter(arr => arr.monthDuration > 5)
console.log(filt)
let mapi = coursesAndDurationArray.map((u, index) => {
    return {
        id: index + 1,
        title: u.title,
        monthDuration: u.monthDuration
    }
})
console.log(mapi)

let deck = []
let suits = ['spade', 'diamond', 'heart', 'clubs']
let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king']
let color = ['red', 'black']
for (const suit of suits) {
    for (const value of values) {
        let color = (suit === 'heart' || suit === 'diamond') ? 'red' : 'black';
        deck.push({cardSuit: suit, value, color});
    }
}
console.log(deck)
let ace = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace')
console.log(ace)
let six = deck.filter(six => six.value === '6')
console.log(six)
let redd = deck.filter(red => red.color === 'red')
console.log(redd)
let diamond = deck.filter(diamob => diamob.cardSuit === 'diamond')
console.log(diamond)
let club = deck.filter(club => club.cardSuit === 'clubs' && values.indexOf(club.value) >= values.indexOf('9'))
console.log(club)

let bysuits = deck.reduce((accumulator, card) => {
    accumulator[card.cardSuit].push(card);
    return accumulator;
}, {
    spade: [],
    diamond: [],
    heart: [],
    clubs: []
});
console.log(bysuits)

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let sssas=coursesArray.filter(cours=>cours.modules.includes('sass'))
console.log(sssas)
let dok=coursesArray.filter(cours=>cours.modules.includes('docker'))
console.log(dok)