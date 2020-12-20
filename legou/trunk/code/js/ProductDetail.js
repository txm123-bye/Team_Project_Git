$(function(){

    magnifier({
        magnifier : "#magnifier1",//最外层的大容器
		width : 365,//承载容器宽
		height : 469,//承载容器高
        zoom : 2//缩放比例
    })
    /* 换一批 */	
     //定一个索引
	 //上下滑动版本
	 var index = 0;
     $('.change').click(function(){
        //自增
		index++;
		//边界判断
		index = index > 3 ? 0 :index;
		//让里面的 inner - box 运动
		$('.inner-box').animate({
			top: -index * 410
		})
     })
	 //左右滑动版本
	//  var index = 0;
	//  $('.change').click(function(){
	//     //自增
	//  		index++;
	//  		//边界判断
	//  		//让里面的 inner - box 运动
	//  		$('.inner-box').stop(true).animate({
	//  			left: -index * 1200
	//  		},function(){
	// 			if(index === 3){
	// 				index = 0;
	// 				$('.inner-box').css('left',0);
	// 			}
	// 		})
	//  })

		
})