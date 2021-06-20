$(function(){
  $('.float>ul>li').click(function(event){
    $(this).children('span').show();
    $(this).children('ul').slideDown();
    $(this).siblings().children('ul').slideUp();
    $(this).siblings().children('span').hide();
    event.stopPropagation();
  })
  $('.float>ul>li li').click(function(){
    let index=$(this).index('.float>ul>li li');
    let distans=$('.scrindex').eq(index).offset().top;
    // console.log()
    $('html,body').animate({scrollTop:distans},500)
    
  })
  //监听滚动
  let topoffset=$('.left').offset().top;
  let topfoot=$('footer').offset().top-$('.float').height()-100;
  console.log(topfoot)
  $(window).scroll(function(){
    if($(this).scrollTop()>=topoffset){
      $('.float').addClass('fixed');
    }
    else if($(this).scrollTop()<topoffset){
      // console.log('33')
      $('.float').removeClass('fixed');
    }
    // else if($(this).scrollTop()>=topfoot){
    //   console.log('22')
    //   $('.float').removeClass('fixed');
    //   $('.float').addClass('fixedfoot');
    // }
    // else if($(this).scrollTop()>=topoffset){
    //   console.log('22')
    //   $('.float').addClass('fixed');
    //   $('.float').removeClass('fixedfoot');
    // }
  })
})