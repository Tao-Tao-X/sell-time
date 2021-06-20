$(function(){
  //随机改变颜色
  // function getcolor(){
  //   let color='#';
  //   for(i=0;i<6;i++){
  //     color+=parseInt(Math.random()*6).toString(16);
  //   }
  //   return color;
  // }
  // setInterval(() => {
  //   $('.water').css('background',getcolor());
  //   console.log(getcolor())
  // }, 500);
  //tab栏
  $('.tab>span').click(function(){
    $(this).addClass('act').siblings().removeClass('act');
    $('.big').eq($(this).index()).show().siblings().hide();
  })
  //打字效果
  var dtime;
  $('.btn').click(function(){
    clearInterval(dtime);
    // 循环创建小球上树
  let content=['制作网页','一起LOL','帮忙遛狗','找个保姆','一起LOL','帮忙遛狗','找个保姆','','','','',]
  for(let i=0;i<20;i++){
    $('.offer').append('<div class="s-water">'+content[i]+'</div>')
  }
  // 设置小球出现的随机位置
  $('.s-water').each(function(index,ele){
    let x=parseInt(Math.random()*$('.offer').width());
    let y=parseInt(Math.random()*$('.offer').height());
    let time=index*0.1;
    $(ele).css({top:y,left:x,'animation':'move 3s '+time+'s infinite linear'})
  })
    $('.chen').show();
    let st="..."
    let i=0;
    dtime=setInterval(() => {
      // console.log()
      $('.texts').text(st.substr(0,i))
      i++;
      if(i>3){
        i=1;
      }
    }, 500);
    $('html,body').animate({scrollTop:$('.tab-item').offset().top},300);
    return false
  })
  //获取悬赏任务
  let getdata=new Date();
  let data={
    1:{item:"LOL寻找大神带飞",time:getdata.getFullYear()+'/'+getdata.getMonth()+'/'+getdata.getDay(),city:'来自云南玉溪的男士'},
    2:{item:"LOL寻找大神带飞",time:getdata.getFullYear()+'/'+getdata.getMonth()+'/'+getdata.getDay(),city:'来自云南玉溪的男士'},
    3:{item:"LOL寻找大神带飞",time:getdata.getFullYear()+'/'+getdata.getMonth()+'/'+getdata.getDay(),city:'来自云南玉溪的男士'},
    4:{item:"LOL寻找大神带飞",time:getdata.getFullYear()+'/'+getdata.getMonth()+'/'+getdata.getDay(),city:'来自云南玉溪的男士'},
    5:{item:"LOL寻找大神带飞",time:getdata.getFullYear()+'/'+getdata.getMonth()+'/'+getdata.getDay(),city:'来自云南玉溪的男士'},
    6:{item:"LOL寻找大神带飞",time:getdata.getFullYear()+'/'+getdata.getMonth()+'/'+getdata.getDay(),city:'来自云南玉溪的男士'},
    7:{item:"LOL寻找大神带飞",time:getdata.getFullYear()+'/'+getdata.getMonth()+'/'+getdata.getDay(),city:'来自云南玉溪的男士'}
  }
      // console.log(Object.keys(data).length)
    let it=1;
    // console.log(data[1].item)
    let request=setInterval(() => {
        $('.renwu ul').prepend('<li><span>'+data[it].item+'</span><span>'+data[it].time+'</span><span>'+data[it].city+'</span></li>');
        it+=1;
        if(it>=Object.keys(data).length){
          it=1;
        }
        if($('.renwu ul li').length>=12){
          $('.renwu ul li').eq($('.renwu ul li').length-1).remove();
        }
        
    }, 1000);
  
  
})