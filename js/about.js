$(function(){
  //页面滚动
    var off=true;
  $(window).scroll(function(){
    if($(this).scrollTop()>=$('.xianzhuang').offset().top-300 && off){
      let num1=0,
          num2=0,
          num3=0,
          num4=0;
      var time
      time=setInterval(()=>{
        num1++;
        num2++;
        num3++;
        num4++;
        if(num2>96){
          num2--;
        }
        if(num1>=99){
          clearInterval(time)
        }
        if(num3>85){
          num3--;
        }
        if(num4>87){
          num4--;
        }
        $('.addsj').eq(0).text(num1);
        $('.addsj').eq(1).text(num2);
        $('.addsj').eq(2).text(num3);
        $('.addsj').eq(3).text(num4);
       
      },10)
      return off=false
    }
    $('.news-item').each(function(index,ele){
      if($(window).scrollTop()>$(ele).offset().top-400){
        $(ele).css({'opacity':'1','transform':'rotateX(360deg)'});
      }
    })
    
  })
  //点击时切换图片
  $('.good').click(function(){
    var st=$(this).children('img').prop('src').slice(-15)
    if(st=='/images/dz2.svg'){
      $(this).children('img').prop('src','./images/dd1.svg');
      $(this).children('span').text(parseInt($(this).children('span').text())+1);
    }
    else{
      $(this).children('img').prop('src','./images/dz2.svg');
      $(this).children('span').text(parseInt($(this).children('span').text())-1);
    }
    })
  $('.stars').click(function(){
    var st=$(this).children('img').prop('src').slice(-16)
    // console.log(st)
     if(st=='/images/good.svg'){
      $(this).children('img').prop('src','./images/goods.svg');
      $(this).children('span').text(parseInt($(this).children('span').text())+1);
    }
    else{
      $(this).children('img').prop('src','./images/good.svg');
      $(this).children('span').text(parseInt($(this).children('span').text())-1);
    }
  })
  //点击按钮
  $('.page>span').click(function(){
    $(this).addClass('action').siblings().removeClass('action')
  })
})