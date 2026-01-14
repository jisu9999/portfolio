window.addEventListener("DOMContentLoaded", function(){
    // go-top btn
  const goTopBtn = document.querySelector('.go-top');

  // 스크롤 시 버튼 표시
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300){
      goTopBtn.classList.add('show');
    }else{
      goTopBtn.classList.remove('show');
    }
  })
  // 클릭시 맨 위로 이동
  goTopBtn.addEventListener("click", ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
})