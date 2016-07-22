
var arr=json.list;
var add=arr.pic
for(var i=0;i<arr.length;i++){
	//$dl=$("<dl><dt><img src=\""+arr[i].pic[0]+"\"/></dt><dd class='row'><div class='col-xs-6'><h2>"+arr[i].mz+"</h2><p class='time'></p></div><div class='col-xs-6 icons'><span class='love glyphicon glyphicon-heart hx'></span><span class='glyphicon glyphicon-envelope'></span></div></dd></dl>");
	$dl=$("<dl><dt><img src=\""+arr[i].pic[0]+"\"/><h1 class='tx'><a href=\"zl.html?"+arr[i].id+"\"><img src=\""+arr[i].tx+"\"/></a></h1></dt><dd class='row'><div class='col-xs-6'><h2>"+arr[i].mz+"</h2><p class='time'></p></div><div class='col-xs-6 icons'><span class='love glyphicon glyphicon-heart hx'></span><span class='glyphicon glyphicon-envelope'></span></div></dd></dl>")
	$("article").append($dl)
}

$(".hx").click(function(){
	if($(this).css("color")=="rgb(159, 159, 159)"){
		$(this).css("color","rgb(255,0,0)")
	}
	else{
		$(this).css("color","rgb(159, 159, 159)")
	}
	
})


