// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')
//Make click function
let cells = document.getElementsByTagName('td')
let moleImage = document.createElement('img')
moleImage.classList.add('mole')
moleImage.src = 'mole.PNG'
moleImage.onclick = whackedMole

//Make random mole generator
function moleHome() {
  let randomIndex = Math.floor(Math.random() * 24)
  let randomCell = cells[randomIndex]

  randomCell.appendChild(moleImage)
}
moleHome()

//remove mole after click
function whackedMole() {
  console.log('Boing!')
  moleHome()
  new Audio('whack-audio.wav').play()
}
