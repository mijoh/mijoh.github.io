const menuHighlight = (scrollPositions, scrollTriggers) => {
  window.addEventListener("scroll", () => {
    let current = window.pageYOffset;

    if (current <= scrollPositions[1]) {
      handleClass(scrollTriggers[0]);
    } else if (current > scrollPositions[1] && current <= scrollPositions[2]) {
      handleClass(scrollTriggers[1]);
    } else if (current > scrollPositions[2]) {
      handleClass(scrollTriggers[2]);
    }
  });

  function handleClass(activeItem) {
    for (let st of scrollTriggers) {
      if (st == activeItem) {
        st.classList.add("is-active");
      } else {
        st.classList.remove("is-active");
      }
    }
  }
};

export default menuHighlight;
