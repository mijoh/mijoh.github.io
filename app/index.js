import css from './app.css'
import menuHighlight from './components/menuHighlight'
import menuScroll from './components/menuScroll'

const scrollPositionElements = Array.from(document.querySelectorAll('.js-scroll-pos'))
const scrollTriggers = Array.from(document.querySelectorAll('.js-scroll-nav'))

// Get margin of scroll position Elements
const scrollPositionMargin = parseInt(window.getComputedStyle(scrollPositionElements[0]).marginTop)

// Create array of scroll positions + element margin
const scrollPositionsWithMargins = scrollPositionElements.map(sp => sp.offsetTop - scrollPositionMargin)
const scrollPositions = scrollPositionElements.map(sp => sp.offsetTop)

menuHighlight(scrollPositionsWithMargins, scrollTriggers)
menuScroll(scrollPositions, scrollTriggers)

const projectButtons = document.querySelectorAll('.project')
const projectsContainer = document.querySelector('.projects-container')
const projectList = document.querySelector('.project-list')
const projectInfo = document.querySelector('.project-info')
const backButton = document.querySelector('.back-button')

backButton.addEventListener('click', () => {
  projectsContainer.classList.remove('project-info-is-open')
})

for(let pb of projectButtons) {
  pb.addEventListener('click', () => {
    projectsContainer.classList.add('project-info-is-open')
  })
}
