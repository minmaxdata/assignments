window.addEventListener('DOMContentLoaded', () => {
  for (const i of Array(300)) {
    const p = document.createElement('p')
    p.innerText = 'Test'
    document.querySelector('body').appendChild(p)
  }
})

window.addEventListener('scroll', event => {
  console.log(`It's scrolling! ${window.scrollY} ${window.scrollX}`)
})

let cached = null
window.addEventListener('scroll', event => {
  if (!cached) {
    setTimeout(() => {
      console.warn(`It's scrolling THROTTLED! ${window.scrollY} ${window.scrollX}`)
      cached = null
    }, 1000)
  }
  cached = event
})
