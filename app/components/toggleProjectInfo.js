const projectInfo = document.querySelectorAll('.project-info')

const toggleProjectInfo = (id) => {
  for(let pi of projectInfo) {
    if(pi.classList.contains(`${id}-info`)) {
      pi.style.display = 'block'
    } else {
      pi.style.display = 'none'
    }
  }
}

export default toggleProjectInfo
