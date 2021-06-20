$(function(){
  // 设置开关按钮
  var button=true;
  $('.open').click(function(){
    if(button){
     $(this).addClass('action');
     button=false;
     $(this).text('关闭');
    }else{
      $(this).removeClass('action');
      button=true;
      $(this).text('开启');
    }
  })
  //tab栏效果
  $('.left li').click(function(){
    $('.right>div').eq($(this).index()).show().siblings().hide();
    $(this).addClass('acti').siblings().removeClass('acti')
  })
})