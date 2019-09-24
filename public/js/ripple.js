const Rippler = (e) => {
  let xCoord = e.clientX
  let yCoord = e.clientY
  const ripple = document.createElement("div")
  ripple.setAttribute('class', `ripple ripple${xCoord}${yCoord}`)
  ripple.setAttribute('style', `left:${xCoord - 250}px;top:${yCoord - 75}px`)
  this.appendChild(ripple)
  let setRipple = document.getElementsByClassName(`ripple${xCoord}${yCoord}`)
  setRipple.className += " rippleExpand"
  const removeRipple = (r) => {
    document.getElementsByClassName("pond").removeChild(r)
  }
  setTimeout(removeRipple(setRipple), 3000)
}

export default Rippler