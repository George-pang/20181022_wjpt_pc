$(function(){
    // tab切换
    $(".tab").on("click",function(){
        $(this).removeClass("tab-current").siblings().addClass("tab-current");
        var index=$(this).index();
        $(".tab-item").eq(index).show().siblings().hide();
    });

    //初始化 swipper
    var aboutSwiper = new Swiper ('.about-us-swiper', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.about-swiper-pagination',
          clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, //设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });   

          //鼠标移入轮播图暂停自动播放、显示滑块控制
    $(".about-us-swiper").on("mouseenter", function (event) {
      aboutSwiper.autoplay.stop();
      $(".about-us-swiper .swiper-button-next").fadeIn(1000);
      $(".about-us-swiper .swiper-button-prev").fadeIn(1000);
      return false;
  });
  $(".about-us-swiper").on("mouseleave", function (event) {
      aboutSwiper.autoplay.start();
      $(".about-us-swiper .swiper-button-next").fadeOut(1000);
      $(".about-us-swiper .swiper-button-prev").fadeOut(1000);
      return false;
  });



});