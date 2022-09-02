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

const spyEls = document.querySelectorAll("section.scroll-spy"); //scroll-spy라는 클래스가 붙은 section들 중
spyEls.forEach((el) => {
  new ScrollMagic.Scene({
    triggerElement: el, // 보여질지 감시할 요소를 지정
    triggerHook: 0.7, // triggerEl이 걸렸을 때 애니메이션 실행될 시기지정  뷰포트기준으로 맨위가 0, 맨 아래가 1
  })
    .setClassToggle(el, "show") // toggle할 요소 , "클래스명" == replace
    .addTo(new ScrollMagic.Controller());
});

const innerSpyEls = document.querySelectorAll(".inner.scroll-spy"); //scroll-spy라는 클래스가 붙은 section들 중
innerSpyEls.forEach((el) => {
  new ScrollMagic.Scene({
    triggerElement: el, // 보여질지 감시할 요소를 지정
    triggerHook: 0.6, // triggerEl이 걸렸을 때 애니메이션 실행될 시기지정  뷰포트기준으로 맨위가 0, 맨 아래가 1
  })
    .setClassToggle(el, "show") // toggle할 요소 , "클래스명" == replace
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
