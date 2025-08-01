
AOS.init({
    duration: 1000,
});

//.banner
const banner_list = new Swiper(".banner_list",{
    loop: true,//슬라이드 반복
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar", //* 버튼 종류 설정 'bullets'/ 'fraction' / 'progressbar' 
    },
});

const menu_list = new Swiper(".menu_list",{
    slidesPerView: 1.5,
    breakpoints: {
        750: {
            slidesPerView: 2.5,
        },
        1200: {
            slidesPerView: 4,
        },
    },
  
    centeredSlides: true, //false 기본값
    loop: true,
    autoplay: {
        delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
        disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
})