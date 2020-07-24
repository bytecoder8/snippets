const scrollUpButton = document.querySelector('.scrollup-button')
const circle = document.querySelector('.progress-ring__circle')

const radius = circle.r.baseVal.value
const circleLength = 2 * Math.PI * radius

const triggerOffset = 100

circle.style.strokeDasharray = `${circleLength} ${circleLength}`
circle.style.strokeDashoffset = circleLength

const setProgress = (percent) => {
  const offset = circleLength - circleLength * percent / 100
  circle.style.strokeDashoffset = offset
}

scrollUpButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

window.addEventListener('scroll', () => {
  const percent = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight) * 100
  setProgress(percent)

  if (window.pageYOffset > triggerOffset) {
    scrollUpButton.classList.add('scrollup-button--active')
  } else {
    scrollUpButton.classList.remove('scrollup-button--active')
  }
})
