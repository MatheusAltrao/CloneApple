const productImage = document.getElementById('product-image')


const green = document.getElementById('green')
const silver = document.getElementById('silver')
const golden = document.getElementById('golden')
const grafite = document.getElementById('grafite')
const blue = document.getElementById('blue')

const imagesPhoneArray = [
  'img/iphone_green.jpg',
  'img/iphone_silver.jpg',
  'img/iphone_golden.jpg',
  'img/iphone_grafite.jpg',
  'img/iphone_blue.jpg'
]


let buttons = document.querySelectorAll('#listbutton li button')

function removeChecked() {
  let buttons = document.querySelectorAll('#listbutton li button')

  buttons.forEach((ev) => {
    ev.classList.remove('focus')
  })
}


green.addEventListener('click', () => {
  productImage.src = imagesPhoneArray[0]

  removeChecked()
  buttons[0].classList.add('focus')

})

silver.addEventListener('click', () => {
  productImage.src = imagesPhoneArray[1]

  removeChecked()
  buttons[1].classList.add('focus')
})

golden.addEventListener('click', () => {
  productImage.src = imagesPhoneArray[2]

  removeChecked()
  buttons[2].classList.add('focus')

})

grafite.addEventListener('click', () => {
  productImage.src = imagesPhoneArray[3]

  removeChecked()
  buttons[3].classList.add('focus')
})

blue.addEventListener('click', () => {
  productImage.src = imagesPhoneArray[4]

  removeChecked()
  buttons[4].classList.add('focus')
})



const menu = document.getElementById('menu')
const links = document.getElementById('links')
const body = document.querySelector('body')

menu.onclick = function () {
  menu.classList.toggle('openmenu')
  links.classList.toggle('active')
  body.classList.toggle('hidden')
}

