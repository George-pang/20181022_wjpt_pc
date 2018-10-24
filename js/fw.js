$(function () {
    // 服务—-教培机构页 左侧tab控制swipper切换
    $(".tab").on("click",function(){
        var tabIndex=$(this).index();
        console.log(tabIndex);
        functionSwiper.slideTo(tabIndex+1, 500, false);
    });



    //初始化 swipper
    var industrySwiper = new Swiper('.industrySwipper', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        slidesPerView: 3,
        spaceBetween: 60,
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
    var functionSwiper = new Swiper ('.function-swiper', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, //设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        },
        // 如果需要分页器
        pagination: {
          el: '.function-swiper-pagination',
          clickable :true,
        },
        on:{
            slideChange: function(){
              var index=this.realIndex;
              $(".tab").eq(index).addClass("tab-cur").siblings().removeClass("tab-cur");
            },
          },
      });

    //鼠标移入轮播图暂停自动播放
    $(".industrySwipper").on("mouseenter", function (event) {
        industrySwiper.autoplay.stop();
        return false;
    });
    $(".industrySwipper").on("mouseleave", function (event) {
        industrySwiper.autoplay.start();
        return false;
    });
    $(".function-swiper").on("mouseenter", function (event) {
        functionSwiper.autoplay.stop();
        return false;
    });
    $(".function-swiper").on("mouseleave", function (event) {
        functionSwiper.autoplay.start();
        return false;
    });

});