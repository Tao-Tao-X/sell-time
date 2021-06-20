$(function(){
  //封装数据发生改变时总计的数量
  function sums(){
    let count=0;
    let sum=0;
    $('.s-check:checked').each(function(i,ele){
      count+=parseInt($(ele).parent().siblings('.count').children('.shuliang').val());
      sum+=parseInt($(ele).parent().siblings('.subtotal').text().substring(1));
    })
    $('.sumcount').text(count);
    $('.zonjia').text('￥'+sum.toFixed(2));
  }
  //点击全选时所有小复选框选中
  $('.allcheck').change(function(){
    $('.s-check,.allcheck').prop('checked',$(this).prop('checked'))
    sums();
  })
  //所有小复选框选中时全选选中
  $('.s-check').change(function(){
    if($('.s-check:checked').length===$('.s-check').length){
      $('.allcheck').prop('checked',true);
    }else{
      $('.allcheck').prop('checked',false);
    }
    sums();
  })
  //点击按钮加减数量及小计
  //封装点击时计算小计的方法
  function subtotal(obj,value){
    let price=parseFloat(obj.parent().siblings('.price').text().substring(1));
    let subtotal=(price*value).toFixed(2);
    obj.parent().siblings('.subtotal').text('￥'+subtotal)
  }
  $('.add').click(function(){
    let value=parseInt( $(this).siblings('.shuliang').val())+1;
    subtotal($(this),value);
    // console.log(subtotal)
    $(this).siblings('.shuliang').val(value);
    sums();
  })
  $('.sub').click(function(){
    let value=parseInt( $(this).siblings('.shuliang').val())-1;
    if(value<=0){
      return
    }
    subtotal($(this),value);
    $(this).siblings('.shuliang').val(value);
    sums();
  })
  //当文本框内的值发生改变时
  $('.shuliang').change(function(){
    let value=parseInt($(this).val());
    if(!isNaN(value)){
      value=value;
    }else{
      value=1;
      $(this).val(1)
    }
    subtotal($(this),value);
    sums();
  })
  //点击操作删除当前商品
  $('.operation>a').click(function(){
    $(this).parents('.cart-item').remove();
    sums();
    //商品数量
  $('.allgoods').text('(共计'+($('.cart-item').length-1)+'件商品)');
  if($('.cart-item').length===1){
    $('.hide2').show();
  }
  })
  //商品数量
  $('.allgoods').text('(共计'+($('.cart-item').length-1)+'件商品)');
  //点击删除选中的商品
  $('.remove').click(function(){
    $('.s-check:checked').parents('.cart-item').remove();
    sums();
    if($('.cart-item').length===1){
      $('.hide2').show();
    }
    //商品数量
  $('.allgoods').text('(共计'+($('.cart-item').length-1)+'件商品)');
  })
  //点击删除全部商品
  $('.delet').click(function(){
    $('.yushan').empty();
    sums();
    if($('.cart-item').length===1){
      $('.hide2').show();
    }
    //商品数量
  $('.allgoods').text('(共计'+($('.cart-item').length-1)+'件商品)');
  })
})