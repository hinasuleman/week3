const displayKey = document.querySelector('.key h2');
const displayKeyCode = document.querySelector('.keyCode');
const keyCodeDiv = document.querySelector('.keyCode');
const overlay = document.querySelector('.overlay'); 

const eventKey = document.getElementById('eventKey') 
const eventWhich = document.getElementById('eventWhich') 
const eventCode = document.getElementById('eventCode') 
const eventLocation = document.getElementById('eventLocation') 


document.addEventListener('keypress', (event) => { /*here i have targetted the event in the parameter and selected the keypress event/
  /*keyCode.textContent = ${event.keyCode} in text content i can change what is stated in the p tag by using temperol literals*/
  overlay.classList.add("hide")
  eventKey.textContent = event.key
  eventLocation.textContent = event.location
  eventWhich.textContent = event.which
  eventCode.textContent = event.code

  console.log(event)
})












