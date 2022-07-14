
const taimeOn = document.getElementById('taimeOn')
const taimeOff = document.getElementById('taimeOff')
const lamp = document.getElementById('lamp')

function lampOn () {
  lamp.src = './imagmm/ligada.png'
}

function lampOff () {
  lamp.src = './imagmm/desligada.jpg'
}

function lampBroken () {
  lamp.src = './imagmm/quebrada.jpg'
}

taimeOn.addEventListener('click',lampOn)
taimeOff.addEventListener('click',lampOff)
lamp.addEventListener('dblclick', lampBroken)
