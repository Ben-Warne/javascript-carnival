// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let headIndex = 0

document.addEventListener('keydown', function (e) {
  switch (e.key) {
    case e.key:
      changeClownHead()
      changeClothes()
      break
  }
})
//function for changing the head
//make option for multiple heads
function changeClownHead() {
  console.log(changeClownHead)
  let head = document.getElementById('head')
  let headSrc = './images/head' + headIndex + '.png'
}

function changeClothes() {
  if (headIndex > 5) {
    headIndex = 0
  } else if (headIndex < 0) {
    headIndex = 5
  }
}
