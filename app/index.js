import css from './app.css'
import menuHighlight from './components/menuHighlight'
import menuScroll from './components/menuScroll'
import toggleProjectInfo from './components/toggleProjectInfo'

const scrollPositionElements = Array.from(document.querySelectorAll('.js-scroll-pos'))
const scrollTriggers = Array.from(document.querySelectorAll('.js-scroll-nav'))
const projectButtons = document.querySelectorAll('.project')
const projectsContainer = document.querySelector('.projects-container')
const backButton = document.querySelector('.back-button')

// Get margin of scroll position Elements
const scrollPositionMargin = parseInt(window.getComputedStyle(scrollPositionElements[0]).marginTop)

// Create array of scroll positions + element margin
const scrollPositionsWithMargins = scrollPositionElements.map(sp => sp.offsetTop - scrollPositionMargin)
const scrollPositions = scrollPositionElements.map(sp => sp.offsetTop)

menuHighlight(scrollPositionsWithMargins, scrollTriggers)
menuScroll(scrollPositions, scrollTriggers)

// Toggle Project info on project click
for(let pb of projectButtons) {
  pb.addEventListener('click', () => {
    projectsContainer.classList.add('project-info-is-open')
    toggleProjectInfo(pb.id)
  })
}

backButton.addEventListener('click', () => {
  projectsContainer.classList.remove('project-info-is-open')
})
