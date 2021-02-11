/*********/
/*Global Variables*/
let isGameActive = true
let gameCard = [
  {
    name: 'bfwse',
    img: '/game_images/bfwse.JPEG',
    flipped: false
  },
  {
    name: 'bfwse',
    img: '/game_images/bfwse.JPEG',
    flipped: false
  },
  {
    name: 'halo',
    img: '/game_images/halo.JPEG',
    flipped: false
  },
  {
    name: 'halo',
    img: '/game_images/halo.JPEG',
    flipped: false
  }
]

/*********/
/*Functions*/
const handleClick = (event) => {
  console.log('handle click')
  const cardIndex = event.target.id

  flipCard(cardIndex)
}

let cardsPicked = []
let cardIndexes = []

const flipCard = (cardIndex) => {
  console.log('flip card')
  cell = document.getElementById(cardIndex)
  card = document.createElement('img')

  /*Style of Card */
  card.id = cardIndex
  card.style.width = '100%'
  card.style.height = '100%'
  card.style.borderRadius = '10px solid white'

  if (gameCard[cardIndex].flipped === false) {
    gameCard[cardIndex].flipped = true
    card.src = gameCard[cardIndex].img
    cell.appendChild(card)
    cardsPicked.push(gameCard[cardIndex].img)
    cardIndexes.push(cardIndex)
    if (cardsPicked.length === 2) {
      setTimeout(() => {
        checkMatch()
      }, 900)
    }
  } else if (gameCard[cardIndex].flipped === true) {
    cardsPicked.pop()
    cardIndexes.pop()
    cell.removeChild(cell.lastElementChild)
    gameCard[cardIndex].flipped = false
  }
  
}

cardsWonArr = []

const checkMatch = () => {
  console.log('check match')
  let card1 = document.getElementById(cardIndexes[0])
  let card2 = document.getElementById(cardIndexes[1])

  if (cardsPicked[0] === cardsPicked[1]) {
    console.log('its a match!')
    cardsWonArr.push(cardsPicked)
    cardsPicked = []
    // card1.style.opacity = '1000'
    // card2.style.opacity = '0'
    card1.removeEventListener('click', handleClick)
    card2.removeEventListener('click', handleClick)
  } else {
    console.log('try again')
    cardsPicked = []
    card1.removeChild(card1.childNodes[0])
    card2.removeChild(card2.childNodes[0])
    gameCard[cardIndexes[0]].flipped = false
    gameCard[cardIndexes[1]].flipped = false
  }
  cardIndexes = []
}

/*********/
/*Event Listeners*/
document.querySelectorAll('.cell').forEach(function (cell) {
  cell.addEventListener('click', handleClick)
})
