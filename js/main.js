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
  searchInputEl.setAttribute("placeholder", "");
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
