// Get all DOM elements
const roll = document.querySelector('.roll')

const typeOfDice = document.querySelector('.typeOfDice')
const numberOfThrow = document.querySelector('.numberOfThrow')
const output = document.querySelector('.output')
const output2 = document.querySelector('.output2')
const output3 = document.querySelector('.output3')
const output4 = document.querySelector('.output4')
const output5 = document.querySelector('.output5')
const button = document.querySelector('.button')
const textresult = document.querySelector('.textResult')
const title = document.querySelector('.title')




// Function for the number of faces
const faces = () =>
{
  const typeOfDiceValue = typeOfDice.value || 6
  const formulaRandom = (Math.floor(Math.random()* (typeOfDiceValue) + 1))
  const outputValue = window.eval(formulaRandom)

  const outputValue2 = (Math.floor(Math.random()* (typeOfDiceValue) + 1))
  const outputValue3 = (Math.floor(Math.random()* (typeOfDiceValue) + 1))
  const outputValue4 = (Math.floor(Math.random()* (typeOfDiceValue) + 1))
  const outputValue5 = (Math.floor(Math.random()* (typeOfDiceValue) + 1))
  
  output.value = outputValue
  output2.value = outputValue2
  output3.value = outputValue3
  output4.value = outputValue4
  output5.value = outputValue5
  
}

button.addEventListener('click',faces)


// Function for the number of throw
const howmany = () =>
{
  const numberOfThrowValue = numberOfThrow.value || 1
  textresult.style.display = ('block')

  if (numberOfThrowValue >= 1)
  {
    output.style.display = ('block')
  }
  if (numberOfThrowValue < 1)
  {
    output.style.display = ('none')
  }
  if (numberOfThrowValue >= 2)
  {
    output2.style.display = ('block')
  }
  if (numberOfThrowValue < 2)
  {
    output2.style.display = ('none')
  }
  if (numberOfThrowValue >= 3)
  {
    output3.style.display = ('block')
  }
  if (numberOfThrowValue < 3)
  {
    output3.style.display = ('none')
  }
  if (numberOfThrowValue >= 4)
  {
    output4.style.display = ('block')
  }
  if (numberOfThrowValue < 4)
  {
    output4.style.display = ('none')
  }
  if (numberOfThrowValue >= 5)
  {
    output5.style.display = ('block')
  }
  if (numberOfThrowValue < 5)
  {
    output5.style.display = ('none')
  }
}

button.addEventListener('click',howmany)


// Hover on the roll button 
const overButton = () => 
{
  button.style.backgroundColor = '#FFFFFF'
  button.style.color = '#dfcbc3'
}

const leaveButton = () => 
{
  button.style.backgroundColor = '#dfcbc3';
  button.style.color = '#FFFFFF'
}
button.addEventListener('mouseover',overButton)
button.addEventListener('mouseleave',leaveButton)


//Color of the title 

const titleColor = () => 
{
  const tab = 
  ['#FFC0CB',
  '#FFB6C1',
  '#FF69B4',
  '#FF1493',
  '#fc6c85'
  ]

  window.setInterval(function()
  {
    title.style.color = tab[Math.floor(Math.random() * tab.length)]
  }, 200)
}

title.addEventListener('mouseover',titleColor)


