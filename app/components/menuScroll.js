require('smoothscroll-polyfill').polyfill();

const menuScroll = (scrollPositions, scrollTriggers) => {

  for(let i = 0; i < scrollTriggers.length; i ++) {
    scrollTriggers[i].addEventListener('click', () => {
      window.scroll({
        'left': 0,
        'top': scrollPositions[i],
        'behavior': 'smooth'
      })
    })
  }
}

export default menuScroll
