const possibleColors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];

function randomColor() {
	const randomIndex = Math.floor(Math.random() * possibleColors.length)
	return possibleColors[randomIndex]
}

const assembleHex = () => {
	let hex = "#"
  for (let i = 0; i < 6; i++) {
  	hex += randomColor()
  }
  return hex
}

const changeBackground = () => {
	const color = assembleHex()
  const backgroundContainer = document.getElementById('background')
  backgroundContainer.style.background = color
  
  const selectValue = document.getElementById("identify")
  selectValue.innerHTML = `Background color: ${color}`
}

changeBackground()