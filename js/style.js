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

  // 소개 멘트 스크롤
   const paragraphs = document.querySelectorAll('.introduction p');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');

          // ⭐ 한 번 실행 후 관찰 중단
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  paragraphs.forEach((p, index) => {
    p.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(p);
  });
});
