window.addEventListener("DOMContentLoaded", function () {
  const swiperEl = document.querySelector("swiper-container");
  const swiper = swiperEl.swiper; // Swiper 11: shadow DOM 내부 객체

  const prevBtn = document.querySelector(".dot-prev");
  const nextBtn = document.querySelector(".dot-next");

  // prev 버튼
  prevBtn.addEventListener("click", () => {
    swiper.slidePrev();
  });

  // next 버튼
  nextBtn.addEventListener("click", () => {
    swiper.slideNext();
  });

  // ✅ 첫 슬라이드에서는 Prev 숨기기
  swiper.on("slideChange", () => {
    if (swiper.activeIndex === 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
    }
  });

  // 초기 상태
  prevBtn.style.display = "none";
});
