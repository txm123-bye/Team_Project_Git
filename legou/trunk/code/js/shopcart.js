/*  购物车文件  */
$(function(){
	//1.全选
	/*
	   1.点击表头的全选框 获取表头全选框的选中状态
	   2.表格中的单选框状态需要一致
	   3.结算中的全选状态一致
	*/
   //定义三个变量
   var $theadInput = $('table thead input[type=checkbox]');
   var $bodyInput = $('table tbody input[type=checkbox]');
   var $allPriceInput = $('.totalPrice input[type=checkbox]');
   
   $theadInput.change(function(){
	   //获取选中状态
	   var state = $(this).prop('checked');
	   //表格中的选择框状态一致 且 结算中的选择框状态保持一致
	   $('table tbody input[type=checkbox],.totalPrice input[type=checkbox]').prop('checked',state);
   })
   //结算中的选择框，也需要有相同的选择功能
   $allPriceInput.change(function(){
	   //获取选中状态
	   var state = $(this).prop('checked');
	   
	   //上面的全选 和 表格中的input 需要状态一致
	   $('table tbody input[type=checkbox],table thead input[type=checkbox]').prop('checked',state);
   })
   //表单中的选中状态 反过来影响全选
   $bodyInput.change(function(){
	   //顶一个标杆
	   var flag = true;
	   //循环表格中所有选择框的选中状态
	   $bodyInput.each(function(i,input){
		   if(!$(input).prop('checked')){//只要有一个选择框没有被选中 那么状态就变为false
			   flag = false;
		   }
	   })
	   
	   //把状态用来改变全选框
	   $theadInput.prop('checked',flag)
	   $allPriceInput.prop('checked',flag)
   })
   //数量的加减功能
   //加
  $('.add').on('click',function(){
      //下一个input节点
      var $nextInput = $(this).next();
      //获取输入框的值
      var oldVal = parseInt($(this).next().val());
      //自增
      oldVal++;
      //重新赋值给这个框
      $nextInput.val(oldVal);
  
      //小计
      subTotalPrice(oldVal,$(this));
  })
  
  //减
  $('.reduce').on('click',function(){
      //上一个input节点
      var $prevInput = $(this).prev();
      //获取输入框的值
      var oldVal = parseInt($(this).prev().val());
      //自增
      oldVal--;
      oldVal = oldVal < 1 ? 1 :oldVal; //如果小于1 那么就等于1 否则就等于自己
      //重新赋值给这个框
      $prevInput.val(oldVal);
  
       //小计
      subTotalPrice(oldVal,$(this));
  })
  
  //抽取一个小计的函数
  function subTotalPrice(val, dom){
      var subtotal = val * parseFloat( dom.closest('tr').find('.price').text() );
     //把小计的结果 放入dom对应的位置
     dom.closest('tr').find('.subprice').text(subtotal.toFixed(2)); 
  }
  
  //删除
  $('.del').click(function(){
      //删除整行
      $(this).closest('tr').remove();
  })
  
  //计算总价
  $bodyInput.each(function(i, input){
      var totalPrice = 0;
  
      //判断选中状态 如果被选中的 那么就需要计算总价
      if($(input).prop('checked')){
          totalPrice += parseFloat( $(this).closest('tr').find('.subprice').text());
      }
  })
})