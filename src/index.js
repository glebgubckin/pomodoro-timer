const body = document.querySelector('body')
const timer = document.querySelector('#timer')
const status = document.querySelector('#status')
const startTimer = document.querySelector('#startTimer')
const resTimer = document.querySelector('#resTimer')
const pauseBtn = document.querySelector('#pauseBtn')
var minutes = 25,
  seconds = 0,
  interval,
  work = true,
  pause = false

// Styles and content

timer.textContent = `${minutes} : ${seconds < 10 ? ('0' + seconds) : seconds}`
pauseBtn.style.display = 'none'
body.classList.add('work')

// Start timer

const setTimer = () => {
  interval = setInterval(() => {
    if (seconds == 0) {
      minutes -= 1
      seconds = 59
    } else seconds--
    if (minutes == 0 && seconds == 0) {
      fetch(`/notify/${work ? 'Break' : 'Work'}`)
      start()
    }
    timer.textContent = `${minutes} : ${seconds < 10 ? ('0' + seconds) : seconds}`
  }, 1000)
}

// Controls

const start = () => {
  startTimer.style.display = 'none'
  clearInterval(interval)
  minutes = work ? 25 : 5
  seconds = 0
  timer.textContent = `${minutes} : ${seconds < 10 ? ('0' + seconds) : seconds}`
  status.textContent = work ? 'Work time' : 'Break time'
  body.classList = work ? 'work' : 'break'
  setTimer()
  work = !work
  pauseBtn.style.display = 'block'
}

const pauseTimer = () => {
  if (!pause) {
    clearInterval(interval)
    pauseBtn.textContent = 'Continue'
  } else {
    setTimer()
    pauseBtn.textContent = 'Pause'
  }
  pause = !pause
}

const resetTimer = () => {
  if (status.textContent) work = !work
  body.classList.replace('break', 'work')
  clearInterval(interval)
  minutes = 25
  seconds = 0
  timer.textContent = `${minutes} : ${seconds < 10 ? ('0' + seconds) : seconds}`
  status.textContent = ''
}

// Listeners

startTimer.addEventListener('click', () => start())
pauseBtn.addEventListener('click', () => pauseTimer())
resTimer.addEventListener('click', () => resetTimer())