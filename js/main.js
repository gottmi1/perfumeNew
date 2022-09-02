const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "Search");
});

searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.value = "";
  searchInputEl.setAttribute("placeholder", "");
  if (scrollY > 0) {
    searchEl.style.opacity = "0.5";
  }
});

new Swiper(".visual .swiper", {
  autoplay: true,
  loop: true,
});

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach((el) => {
  new ScrollMagic.Scene({
    triggerElement: el,
    triggerHook: 0.7,
  })
    .setClassToggle(el, "show")
    .addTo(new ScrollMagic.Controller());
});

const innerSpyEls = document.querySelectorAll(".inner.scroll-spy");
innerSpyEls.forEach((el) => {
  new ScrollMagic.Scene({
    triggerElement: el,
    triggerHook: 0.6,
  })
    .setClassToggle(el, "show")
    .addTo(new ScrollMagic.Controller());
});

const header = document.querySelector("header");

window.addEventListener("wheel", () => {
  if (scrollY > 0) {
    header.style.backgroundColor = "rgba(246, 245, 240, 0.8)";
    if (searchEl.classList.contains("focused")) {
      searchInputEl.style.opacity = "1";
    } else {
      searchInputEl.style.opacity = "0.5";
    }
  } else {
    header.style.backgroundColor = "rgba(246, 245, 240, 1)";
    searchEl.style.opacity = "1";
  }
});

header.addEventListener("mouseover", () => {
  header.style.backgroundColor = "rgba(246, 245, 240, 1)";
  searchEl.style.opacity = "1";
});
header.addEventListener("mouseout", () => {
  if (scrollY === 0) {
    searchEl.style.opacity = "1";
  } else {
    if (searchEl.classList.contains("focused")) {
      searchEl.style.opacity = "1";
    } else {
      searchEl.style.opacity = "0.5";
    }
  }

  header.style.backgroundColor = "rgba(246, 245, 240, .8)";
});
searchEl.addEventListener("mouseover", () => {
  searchEl.style.opacity = "1";
  searchInputEl.style.opacity = "1";
});
