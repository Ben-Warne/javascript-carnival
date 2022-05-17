// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

document.onkeydown = checkKey
//asigns the checkKey function the onkeydown method

//asigns the arrow keys to the checkkey function and when pressed cycles the vertical and horizontal parts of the clown
function checkKey(e) {
  if (e.keyCode == '38') {
    //up key changes vertical upwards
    changeVertical(-1)
  } else if (e.keyCode == '40') {
    //down key changes vertical downwards
    changeVertical(1)
  } else if (e.keyCode == '37') {
    //left key changes horizontal left
    changeHorizontal(-1)
  } else if (e.keyCode == '39') {
    //right key changes horizontal right
    changeHorizontal(1)
  }
}

// variable "indexes" = 0, 0, 0 in an array
let indexes = [0, 0, 0]

// variable "mainIndex" = 0
let mainIndex = 0

// variables are grabing the HTML images using the ID tags
let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

// variable "imgs" holds the head, body and shoes variables in an array
let imgs = [head, body, shoes]
// variable "strings" hold the head, body and shoes variables as strings
let strings = ['head', 'body', 'shoes']

// function changeHorizontal with the parameter of shift
function changeHorizontal(shift) {
  let index = indexes[mainIndex] // variable "index" holds the variable of "indexes" which contains the array of [mainIndex]
  let image = imgs[mainIndex] // variable "image" holds the variable of "imgs" which contains the array of [mainIndex]
  let str = strings[mainIndex] // variable "str" holds the variable of "strings" which contains the array of [mainIndex]
  index += shift // index and shift have the += method assigned shift will = index

  // if "index" = less than 0 "index" will = 5
  if (index < 0) index = 5

  // if "index" = greater than 5 "index" will = 0
  if (index > 5) index = 0
  // these work with the "checkKey" function and will change the horizontal clothes

  // "index" assigned to "indexes and mainIndex" variable
  indexes[mainIndex] = index

  // this sources the images for the clowns clothes "image.src" sources the images ""./images" is the file "str" = "strings" which ges the body parts in strings.
  // "index" so it can switch clothing parts, and .png is added at the end to find the images
  image.src = './images/' + str + index + '.png'
}

// function to change the verical body parts up and down with parameter of shift again
function changeVertical(shift) {
  mainIndex += shift // mainIndex and shift have the += method assigned shift will = mainIndex

  // if "mainIndex" = less than 0 "mainIndex" = 2
  if (mainIndex < 0) mainIndex = 2
  // if "mainIndex" = less than 2 "mainIndex" = 0
  if (mainIndex > 2) mainIndex = 0
}
