import menuHighlight from "./components/menuHighlight";
import menuScroll from "./components/menuScroll";

const scrollPositionElements = Array.from(
  document.querySelectorAll(".js-scroll-pos")
);
const scrollTriggers = Array.from(document.querySelectorAll(".js-scroll-nav"));

// Get margin of scroll position Elements
const scrollPositionMargin = parseInt(
  window.getComputedStyle(scrollPositionElements[0]).marginTop
);

// Create array of scroll positions + element margin
const scrollPositionsWithMargins = scrollPositionElements.map(
  (sp) => sp.offsetTop - scrollPositionMargin
);
const scrollPositions = scrollPositionElements.map((sp) => sp.offsetTop);

menuHighlight(scrollPositionsWithMargins, scrollTriggers);
menuScroll(scrollPositions, scrollTriggers);
