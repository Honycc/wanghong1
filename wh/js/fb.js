document.addEventListener("deviceready", onDeviceReady,false)

//设备的初始化
var _this=""
function onDeviceReady(argument) {
	$(".pc").click(function(argument){
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50 ,
          	//sourceType: Camera.PictureSourceType.PHOTOLIBRARY, //相册
          	sourceType: Camera.PictureSourceType.CAMERA, //相机
          	correctOrientation:true  //照片方向
          });
          _this=this;
	})
}
function onSuccess(imageData) {//成功的时候
   //var k1 = document.getElementById('k1');
   _this.style.background = "url("+imageData+")";
   _this.style.backgroundSize="cover"
}

function onFail(message) {//失败的时候
   alert("不好意思娇娇犯2了");
}