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


green.addEventListener('click', () => {
  productImage.src = imagesPhoneArray[0]
})

silver.addEventListener('click', () => {
  productImage.src = imagesPhoneArray[1]
})

golden.addEventListener('click', () => {
  productImage.src = imagesPhoneArray[2]
})

grafite.addEventListener('click', () => {
  productImage.src = imagesPhoneArray[3]
})

blue.addEventListener('click', () => {
  productImage.src = imagesPhoneArray[4]
})



const menu = document.getElementById('menu')
const links = document.getElementById('links')
const body = document.querySelector('body')

menu.onclick = function () {
  menu.classList.toggle('openmenu')
  links.classList.toggle('active')
  body.classList.add('hidden')
}

