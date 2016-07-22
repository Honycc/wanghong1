
var id=location.href.split("?")[1];


var arr=json.list[id];
var add=arr.pic
for(var i=0;i<add.length;i++){
	$dl=$("<dl><dt><img src=\""+add[i]+"\"/></dt><dd class='row'><div class='col-xs-6'><h2>"+arr.mz+"</h2><p class='time'></p></div><div class='col-xs-6 icons'><span class='love glyphicon glyphicon-heart hx'></span><span class='glyphicon glyphicon-envelope'></span></div></dd></dl>");
	$("article").append($dl)
}
$(".tx").attr("src",arr.tx);
$(".xm").html(arr.mz);
$(".qm").html(arr.xm)
$(".hx").click(function(){
	if($(this).css("color")=="rgb(159, 159, 159)"){
		$(this).css("color","rgb(255,0,0)")
	}
	else{
		$(this).css("color","rgb(159, 159, 159)")
	}
	
})
$(".ax").click(function(){
	alert($(this).css("color"))
	if($(this).css("color")=="rgb(51, 51, 51)"){
		$(this).css("color","rgb(255,0,0)")
	}
	else{
		$(this).css("color","rgb(51, 51, 51)")
	}
	
})
var date=new Date();
var h=null;
if(date.getHours()>=0&&date.getHours()<=12) h="AM";
else h="PM";
var d=date.getFullYear()+"-"+parseInt(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+h;
$(".time").html(d);

