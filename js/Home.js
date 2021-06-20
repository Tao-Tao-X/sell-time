$(()=>{
  //轮播图
  var swiP1 = new Swiper('.swiP1', {
    // autoplay: {
    //   delay: 3000,
    //   stopOnLastSlide: false,
    //   disableOnInteraction:false
    // },
    // loop : true,
    pagination :{
      el: '.swiper-pagination',
      clickable :true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      slideChangeTransitionEnd: function(){
        // alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
        if(this.activeIndex==0){
            $('.an').addClass('page1');
        }else{
          $('.an').removeClass('page1');
        }
        if(this.activeIndex==1){
          $('.an2').addClass('page2');
        }else{
          $('.an2').removeClass('page2');
        }
        if(this.activeIndex==2){
          $('.an3').addClass('page3');
        }else{
          $('.an3').removeClass('page3');
        }
      },
    }
  });
  //当页面滚动到中部第一部分时
  $(window).scroll(e=>{
    if($(this).scrollTop()>=$('.main1').offset().top-300){
      $('.fwjs').css('transform','rotateY(0deg)')
    }
    if($(this).scrollTop()>=$('.main2').offset().top-300){
      $('.tab').css('animation','tabtop .8s forwards')
      $('.tab-content').css('animation','tabtop .8s .3s forwards')
    }
    if($(this).scrollTop()>=$('.main3').offset().top-300){
      $('.case').css('animation','casean .8s forwards')
    }
  })
  // tab栏
  $('.tab-item').mouseover(function(){
    // console.log($('.tab').offset().left)
    $('.move').animate({left:($(this).offset().left-$('.tab').offset().left)+'px'},300)
    $('.tab-details').eq($(this).index()-1).show().siblings().hide();
    $(this).css('color','#fff').siblings().css('color','#666')
  })
})