$(()=>{
  // console.log($('#Time').width)
  // $('#Time').css('height',$('#Time').width()+'px')
  // 设置时间
  function getTime(){
    var getDate=new Date();
    var Year=getDate.getFullYear();
    var Day=getDate.getDate(),
    Month=getDate.getMonth()+1,
    Week=getDate.getDay(),
    Hour=getDate.getHours(),
    Miu=getDate.getMinutes(),
    WK=['天','一','二','三','四','五','六'],
    Miao=getDate.getSeconds();
    return tm={
      Year,Month,Day,WK,Hour,Miu,Miao,Week
    }
  }
  getTime();
  
  $('.tt').text(tm.Year+'/'+tm.Month+'/'+tm.Day);
  //搜索框记录历史
  var his=[];
  var ser;
  try {
    if(localStorage.getItem('search')){
      ser=localStorage.getItem('search').split(',');
      his=his.concat(ser);
      for(let i=0;i<his.length;i++){
        if(his[i]!=''){
          $('.hh').after('<dl class="dl">'+his[i]+'</dl>');
        }
        
      }
    }
    
    // console.log(his)
    function ssr(){
      if($('.txt').val()!==''){
        his.push($('.txt').val());
        localStorage.setItem('search',his);
        ser=localStorage.getItem('search').split(',');
        // console.log(ser)
        $('.hh').after('<dl class="dl">'+$('.txt').val()+'</dl>');
        $('.txt').val('');
      }
    }
  } catch (error) {
    // console.log(error);
  }
  
  //点击搜素时
  $('.btn').click(()=>{
    ssr()
  })
  //回车时
  $('.txt').keydown(function(event){
    if(event.keyCode==13){
      ssr()
    }
  })
  //搜素框下拉
  $('.search').hover(()=>{$('.history').stop().slideToggle(300);})
  // 点击删除时删除当前字节
  $('.hh').on('click',()=>{
    $('.history').hide;
    var br=confirm('是否清除全部记录');
    if(br){
      his=[];
      localStorage.removeItem('search');
      $('.history .dl').remove();
    }
  })
  //热点搜素
  $('.tb').click(()=>{$('.hot').slideToggle()})
  
  //鼠标覆盖停止自动切换
  // swiP1.el.onmouseover = function(){
  //   swiP1.autoplay.stop();
  // }

  // //鼠标离开开始自动切换
  // swiP1.el.onmouseout = function(){
  //   swiP1.autoplay.start();
  // }
  //时钟轮盘
  // 创建节点上树
  // year
  $('.year').html('<span>'+tm.Year+'</span>');
  // month
  for(let i=1;i<=12;i++){
    i=i<10?"0"+i:i;
    $('.month').append('<span>'+i+"月"+'</span>')
  }
  // day
  var sumDay=[31,28,31,30,31,30,31,31,30,31,30,31];
  if(tm.Year%4==0||tm.Year%400==0){
    sumDay[1]=29;
  }
  for(let i=1;i<=sumDay[tm.Month-1];i++){
    i=i<10?"0"+i:i;
    $('.day').append('<span>'+i+"日"+'</span>');
  }
  // week
  for(let i=0;i<7;i++){
    $('.week').append('<span>'+"星期"+tm.WK[i]+'</span>');
  }
  //huor
  for(let i=1;i<=24;i++){
    i=i<10?"0"+i:i;
    $('.hour').append('<span>'+i+"时"+'</span>');
  }
  // 分秒
  for(let i=0;i<=59;i++){
    i=i<10?"0"+i:i;
    $('.miu').append('<span>'+i+"分"+'</span>');
    $('.miao').append('<span>'+i+"秒"+'</span>');
  }
  //定位span的位置

  setTimeout(() => {
    //月样式
  for(let i=1;i<12;i++){
      $('.month span').eq(i).css('transform',"rotate(-"+((360/12)*i)+"deg)") ;
    }
  }, 0);
  setTimeout(() => {
    // 日
    for(let i=1;i<=sumDay[tm.Month-1];i++){
      $('.day span').eq(i).css('transform',"rotate(-"+((360/sumDay[tm.Month-1])*i)+"deg)") ;
    }
  }, 100);
  setTimeout(() => {
    //星期
    for(let i=1;i<7;i++){
      $('.week span').eq(i).css('transform',"rotate(-"+((360/7)*i)+"deg)") ;
    }
  }, 200); 
  setTimeout(() => {
    // 时
    for(let i=1;i<24;i++){
      $('.hour span').eq(i).css('transform',"rotate(-"+((360/24)*i)+"deg)") ;
    }
  }, 300);
  setTimeout(() => {
    //分秒
    for(let i=1;i<60;i++){
      $('.miu span').eq(i).css('transform',"rotate(-"+((360/60)*i)+"deg)") ;
    }
  }, 400);
  setTimeout(() => {
    //分秒
    for(let i=1;i<60;i++){
      $('.miao span').eq(i).css('transform',"rotate(-"+((360/60)*i)+"deg)") ;
    }
  }, 500);
  //时钟运动
  setInterval(() => {
    getTime();
    $('.month').css('transform'," translateX(-50%) translateY(-50%) rotate("+((360/12)*(tm.Month-1))+"deg)") ;
    $('.day').css('transform'," translateX(-50%) translateY(-50%) rotate("+((360/sumDay[tm.Month-1])*(tm.Day-1))+"deg)") ;
    $('.week').css('transform'," translateX(-50%) translateY(-50%) rotate("+((360/7)*tm.Week)+"deg)") ;
    $('.hour').css('transform'," translateX(-50%) translateY(-50%) rotate("+((360/24)*(tm.Hour-1))+"deg)") ;
    $('.miu').css('transform'," translateX(-50%) translateY(-50%) rotate("+((360/60)*(tm.Miu))+"deg)") ;
    $('.miao').css('transform'," translateX(-50%) translateY(-50%) rotate("+((360/60)*(tm.Miao))+"deg)") ;
  
  }, 1000);
  //滚动一页后显示返回顶部按钮
  $(window).scroll(function(){
    if($(this).scrollTop()>=window.innerHeight){
      $('.callback').fadeIn()
    }else{
      $('.callback').fadeOut()
    }
  })
  //点击回到顶部
  $('.callback').click(function(){
    $('html,body').stop().animate({scrollTop:0},300)
  })
  //
}
)