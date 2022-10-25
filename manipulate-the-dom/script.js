let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

//=============Part 1===================

document.querySelector('#main-title').innerHTML = 'My DOM manipulation'

//==============Part 2=================

document.body.style.backgroundColor = 'pink'

//==============Part 3=================

let removeLi = document.getElementById("favorite-things")
removeLi.removeChild(removeLi.lastElementChild)

//==============Part 4=================
// Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements

let specialTitle= document.querySelector('.special-title')
specialTitle.style.fontSize = '2rem'

//==============Part 5=================
// Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.

let pastRace = document.querySelector("#past-races")
removeChicago = pastRace.getElementsByTagName ('li')[3]
pastRace.removeChild(removeChicago)

// ==============Part 6=================
// Let's add to DOM's Past Races list. Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list.

let addSilverSpring = document.createElement('li')
addSilverSpring.appendChild(document.createTextNode('Silver Spring'))
pastRace.appendChild(addSilverSpring)

//==============Part 7=================
//You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text. Think about what order you want to create the elements, and what order you want to append them in.

//addSilverSpring.classList.add('blog-post')


const newDiv = document.createElement('div')
newDiv.classList.add('blog-post', 'purple')

let mainBlog = document.querySelector('.main')
mainBlog.append(newDiv)

const newH2 = document.createElement('h1')
newH2.textContent = "Silver Spring";

const newPar = document.createElement('p')
newPar.textContent = "Family is the most important thing in this world!"
newDiv.append(newH2,newPar)


