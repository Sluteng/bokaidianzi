      
    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay:true,
      delay:500,
      effect : 'fade',
    //分页器
    pagination: {
      el: '.swiper-pagination',
    },
    //前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})        