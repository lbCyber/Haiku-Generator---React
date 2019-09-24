let counter = 0
const Rippler = (e) => {
  counter++
  let xCoord = e.clientX
  let yCoord = e.clientY
  const ripple = document.createElement("div")
  ripple.setAttribute('class', 'ripple')
  ripple.setAttribute('id', `ripple${counter}`)
  ripple.setAttribute('style', `left:${xCoord}px;top:${yCoord}px`)
  document.getElementById("pond").appendChild(ripple)
  const setRipple = document.getElementById(`ripple${counter}`)
  setTimeout(function () { setRipple.setAttribute('class', 'ripple rippleExpand') }, 50)
  setTimeout(function () { document.getElementById("pond").removeChild(setRipple) }, 2000)
}

export default Rippler