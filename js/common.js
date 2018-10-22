$(function () {
    /* 顶部导航当前tab背景色切换*/
    $(".nav-item").on("mouseenter", function () {
        $(this).siblings().find(".item_link").removeClass("item-current");
        $(this).find(".item_link").addClass("item-current");
    });
    // 顶部导航服务菜单的显示隐藏
    $(".nav-item-fw").on("mouseenter", function () {
        $(".fw_menu").show();
        //服务菜单当前项背景色切换
        $(".fw_item").on("mouseenter", function () {
            $(this).siblings().find(".fw_item_link").removeClass("fw_item_cur");
            $(this).find(".fw_item_link").addClass("fw_item_cur");
        });

    });
    $(".nav-item-fw").on("mouseleave", function () {
        $(".fw_menu").hide();
        // 顶部导航服务菜单默认第一个选项为当前
        $(".fw_item_link").removeClass("fw_item_cur").eq(0).addClass("fw_item_cur");
    });


    // 初始化swipper      
    var mySwiper = new Swiper('#swiper1', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '#swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, //设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        },

    });

    //鼠标移入轮播图暂停自动播放、显示滑块控制
    $("#swiper1").on("mouseenter", function (event) {
        mySwiper.autoplay.stop();
        $("#swiper1 .swiper-button-next").fadeIn(1000);
        $("#swiper1 .swiper-button-prev").fadeIn(1000);
        return false;
    });
    $("#swiper1").on("mouseleave", function (event) {
        mySwiper.autoplay.start();
        $("#swiper1 .swiper-button-next").fadeOut(1000);
        $("#swiper1 .swiper-button-prev").fadeOut(1000);
        return false;
    });


});
