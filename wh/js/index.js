var sx=0;
touch.on('#hy', 'touchstart', function(ev){
	ev.preventDefault();
});
var target = document.getElementById("hy");
touch.on(target, 'swipeleft', function(ev){
	target.style.display="none";
	$("#tl").css("display","block")
	$(".k2").addClass("animated bounceInUp")
	
});
//$("input").focus(function(){
//	$(this).siblings(".sp1").fadeIn()
//})
$("input").keyup(function(){
	if($(this).val()!=""){
		$(this).siblings(".sp1").fadeIn()
	}
})
$(".sp1").click(function(){
	$(this).siblings("input").val("")
	$(this).fadeOut()
})
$(".p2").click(function(){
	$(".k2").css("display","none")
	$(".k3").css("display","block")
})
//返回 判断
$(".a1").click(function(){
	
	sx--;
	var ds=$(".x1").find("div");
	for(var i=0;i<ds.length;i++){
		ds[i].style.color="#3e3e3e"
	}
	if(sx==1){
		ds[sx].style.color="#fc9292"
		$(".bian3").css("display","none")
		$(".bian2").css("display","block")
	}
	if(sx==0){
		ds[sx].style.color="#fc9292";
		$(".bian2").css("display","none")
		$(".bian1").css("display","block")
	}
	if(sx<0){
		$(".k2").css("display","block")
		$(".k3").css("display","none")
		sx=-1;
	}
})
//协议勾选
var x=true;
$("#img11").click(function(){
	if(x){
		$("#img11").attr("src","img/icon/icon_02.png");
		x=false;
	}
	else{
		$("#img11").attr("src","img/icon/icon_01.png");
		x=true;
	}
	
})
//判断账号
var ar=/^1[0-9]{10}$/;
var flag=false;
$(".shouj").find("input").keyup(function(){
	if(ar.test($(this).val())){
		$(".shoub").find("button").css("background","#fb6e6e");
		flag=true;
	}
	else{
		$(".shoub").find("button").css("background","#CCCCCC");
		flag=false;
		
	}
})



//判断密码
var flag1=false;
var ar1=/^[0-9a-zA-Z]{6,8}$/
$("#ma1").blur(function(){
	if(ar1.test($(this).val())){
	}
	else{
		alert("请输入真确的密码格式")
		flag1=false;
	}
})
$("#ma2").keyup(function(){	
	if(ar1.test($(this).val())){
		if($("#ma1").val()==$("#ma2").val()){
			$(".btn4").css("background","#fb6e6e")
			flag1=true;
		}
		else{
			$(".btn4").css("background","#CCCCCC")
			flag1=false;
		}
	}
})
// 存账号
$(".shoub").find("button").click(function(){
	var ds=$(".x1").find("div");
	for(var i=0;i<ds.length;i++){
		ds[i].style.color="#3e3e3e"
	}
	if(flag){
		ds[1].style.color="#fc9292"
		$(".bian1").css("display","none")
		$(".bian2").css("display","block")
		window.localStorage.zh=$(".shouj").find("input").val();
		sx=1;
	}else{
		alert("请输入正确的手机号")
	}
	
})
//判断 进入 账号 密码页
$(".a2").click(function(){
	sx++;
	var ds=$(".x1").find("div");
	for(var i=0;i<ds.length;i++){
		ds[i].style.color="#3e3e3e"
	}
	if(sx==1){
		ds[sx].style.color="#fc9292"
		$(".bian1").css("display","none")
		$(".bian2").css("display","block")
	}
	if(sx>2&&flag1==true){
		$(".k2").css("display","block")
		$(".k3").css("display","none")
		window.localStorage.ma=$("#ma2").val();
		sx=-1;
	}
	if(sx>=2){
		ds[2].style.color="#fc9292";
		$(".bian2").css("display","none")
		$(".bian3").css("display","block")
		sx=2;
	}
	

})
$(".btn3").click(function(){
	var ds=$(".x1").find("div");
	sx=2;
	for(var i=0;i<ds.length;i++){
		ds[i].style.color="#3e3e3e"
	}
	ds[sx].style.color="#fc9292"
	$(".bian2").css("display","none")
	$(".bian3").css("display","block")
	
	
})
//存密码
$(".btn4").click(function(){
	var ds=$(".x1").find("div");
	if(flag1){
		window.localStorage.ma=$("#ma2").val();
		$(".k2").css("display","block")
		$(".k3").css("display","none")
		sx=-1;
	}
	else{
		alert("请确认账号密码")
		
	}
})
//登录账号密码验证
$(".btn1").click(function(){
	var zh=$("#zh").val()
	var ma=$("#ma").val()
	if(zh==localStorage.zh&&ma==localStorage.ma){
		location.href="html/zl.html?0"
	}else{
		alert("请输入正确的账号密码")
	}
})

var mySwiper = new Swiper ('.swiper-container', {
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
 }) 

