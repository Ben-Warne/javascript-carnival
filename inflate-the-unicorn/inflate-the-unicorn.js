// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')
//create onlick function for unicorns
let corns = document.getElementsByClassName('inflate-an-image')

for (let i = 0; i < corns.length; i++) {
  corns[i].onclick = cornsClick
}

let balloonInflate = 0
//change unicorn image when clicked upon
function cornsClick(e) {
  let corns = e.target

  if (corns.id == 'unicorn1') {
    balloonInflate++

    corns.src = './images/unicorn-' + balloonInflate + '.png'
    console.log(corns)

    if (balloonInflate > 3) {
      balloonInflate = 0
      corns.src = './images/unicorn-' + balloonInflate + '.png'
      console.log('thanks')
      alert('Thank you!')
    }
  }

  if (corns.id == 'unicorn-2') {
    balloonInflate++

    corns.src = './images/unicorn-' + balloonInflate + '.png'
    console.log(corns)

    if (balloonInflate > 3) {
      balloonInflate = 0
      corns.src = './images/unicorn-' + balloonInflate + '.png'
      console.log('thanks')
      alert('Thank you!')
    }
  }
  console.log('click me again!')
  if (corns.id == 'unicorn-3') {
    balloonInflate++

    corns.src = './images/unicorn-' + balloonInflate + '.png'
    console.log(corns)

    if (balloonInflate > 3) {
      balloonInflate = 0
      corns.src = './images/unicorn-' + balloonInflate + '.png'
      console.log('thanks')
      alert('Thank you!')
    }
  }
}
