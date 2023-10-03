// - створити блок
let block = document.createElement('div')

// - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap', 'collapse', 'alpha', 'beta')

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.style.backgroundColor = 'lightblue'
block.style.color = 'darked'
block.style.fontSize = '20px'
block.textContent = 'Привіт'

// - додати цей блок в body.
document.body.appendChild(block)

// - клонувати його повністю, та додати клон в body.
let clon = block.cloneNode(true)
doco = document.body.appendChild(clon)

//- Є масив:
//['Main','Products','About us','Contacts']
//Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let ulli=['Main','Products','About us','Contacts']
let ul=document.createElement('ul')
for (let ulem of ulli) {
    let li=document.createElement('li')
    li.innerText=ulem
    ul.appendChild(li)
}
document.body.appendChild(ul)

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
