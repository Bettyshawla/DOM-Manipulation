let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

//=============Part 1===================
function mainTitle(x) {
  document.querySelector('#main-title').innerHTML = x
}
mainTitle('Welcome to my page')
//==============Part 2=================
function backgroundColor(color) {
  document.body.style.backgroundColor = color
}
backgroundColor('pink')
//==============Part 3=================
function removeList() {
  let removeLi = document.getElementById("favorite-things")
  removeLi.removeChild(removeLi.lastElementChild)
}
removeList()
//==============Part 4=================
// Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements
function specialFont(size) {
  document.querySelectorAll('.special-title').forEach((title) => {
    title.style.fontSize = size
  });
}
specialFont('2rem')
//==============Part 5=================
// Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.

let pastRace = document.querySelector("#past-races")
removeChicago = pastRace.getElementsByTagName('li')[3]
pastRace.removeChild(removeChicago)

// ==============Part 6=================
// Let's add to DOM's Past Races list. Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list.

function addCity(str) {
  let addNewCity = document.createElement('li')
  addNewCity.textContent = str
  pastRace.prepend(addNewCity)
}
addCity("Silver Spring")

//==============Part 7=================
//You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text. Think about what order you want to create the elements, and what order you want to append them in.

//addSilverSpring.classList.add('blog-post')

function newBlogPost(h1, p) {

  const newDiv = document.createElement('div')
  newDiv.classList.add('blog-post', 'purple')

  const mainBlog = document.querySelector('.main')
  mainBlog.append(newDiv)

  const newH2 = document.createElement('h1')
  newH2.textContent = h1;

  const newPar = document.createElement('p')
  newPar.textContent = p

  newDiv.append(newH2, newPar)

}
newBlogPost("Silver Spring", "SILVER SPRING IS TOO CROWDED TO DRIVE WITH OVER SPEED!")


//==============Part 8=================
//Query select the #quote-title ID element and add a click event handler. That event handler should use the function randomQuotewhenever #quote-title is clicked.

const randomQuote = function () {
  document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
};
// randomQuote()

function chosenQuote(random) {
  const selectQuote = document.querySelector(random);
  selectQuote.addEventListener('click', function () {
    randomQuote()
  })
}
chosenQuote("#quote-title")

//==============Part 9=================
// Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. The first event handler should be listening for mouseout events while the second handler should be listening for mouseenter events.

// The mouseouthandler should toggle the class .purple
// The mouseenterhandler should toggle the class .red

function blogEventListner() {
  const blogPost = document.getElementsByClassName('blog-post')
  for (let i = 0; i < blogPost.length; i++) {
    console.log(blogPost.item(i));
    blogPost.item(i).onmouseout = function () {
      if (blogPost.item(i).classList.contains('purple')) {
        blogPost.item(i).classList.remove('purple');
        blogPost.item(i).classList.add('red');
      }
    }
    blogPost.item(i).onmouseenter = function () {
      if (blogPost.item(i).classList.contains('red')) {
        blogPost.item(i).classList.remove('red');
        blogPost.item(i).classList.add('purple');
      }
    }

  }
}
blogEventListner()