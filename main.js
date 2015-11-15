var notes = ['-','-','-','-','-','-'];
var red=70;
var green=70;
var blue=70;
path1 ="JohnCena.png";
var write = function(){
		$(".e").append(notes[0]+"-");
		$(".B").append(notes[1]+"-");
		$(".G").append(notes[2]+"-");
		$(".D").append(notes[3]+"-");
		$(".A").append(notes[4]+"-");
		$(".Ee").append(notes[5]+"-");
		notes = ['-','-','-','-','-','-'];
	
};

var fun = function(){
	console.log("y0");
	for (var i = 1; i <= 200; i++) {
    var tick = function(i) {
        return function() {
            write();
        }
    };
    setTimeout(tick(i), 1000 * i);
}
};


var image = function() {
              var img = new Image();
              img.src = path1;
              img.crossOrigin="Anonymous";
              var c=document.getElementById("layer1");
              var ctx=c.getContext("2d");
              ctx.clearRect(0, 0, 1100, 500);
              img.addEventListener("load", function() {
                 // execute drawImage statements here
                 ctx.drawImage(img,0,0,  img.naturalWidth, img.naturalHeight, 
                                  0,0,679,               799);
              }, false);
          

    };

var color = function(){
			var img = new Image();
            img.src = path1;
            img.crossOrigin="Anonymous";
            var num1= red;
            var num2= green;
            var num3= blue;
            console.log(red, green, blue);
            var color = "rgba("+num1+","+num2+","+num3+", .2)";
            var c=document.getElementById("layer1");
            var ctx=c.getContext("2d");
           ctx.clearRect(0, 0, 1100, 500);
            img.addEventListener("load", function() {
                // execute drawImage statements here
                ctx.drawImage(img,0,0,  img.naturalWidth, img.naturalHeight, 
                                  0,0, 679,               799);
            }, false);
            ctx.globalCompositeOperation = "multiply";
            ctx.fillStyle = color;
            for (var i =0; i<5; i++){
            
                 ctx.fillRect(0,0,679,500);
            }
}
var scale = function(value1, value2, valuex, valuey){
			var img = new Image();
            img.src = path1;
		var c=document.getElementById("layer1");
		var ctx=c.getContext("2d");
		//ctx.translate(valuex,valuey);
		ctx.clearRect(0, 0, 1100, 500);
            img.addEventListener("load", function() {
                // execute drawImage statements here
                ctx.drawImage(img,0,0,  img.naturalWidth, img.naturalHeight, 
                                  0,0, 679,               799);
            }, false);
            ctx.scale(value1, value2);
            img.addEventListener("load", function() {
                // execute drawImage statements here
                ctx.drawImage(img,0,0,  img.naturalWidth, img.naturalHeight, 
                                  0,0, 679,               799);
            }, false);

}

var rotate = function(value){
			var img = new Image();
            img.src = path1;
			var c=document.getElementById("layer1");
			var ctx=c.getContext("2d");
			ctx.clearRect(0, 0, 1100, 500);
			ctx.rotate(value * Math.PI / 180);
            img.addEventListener("load", function() {
                // execute drawImage statements here
                ctx.drawImage(img,0,0,  img.naturalWidth, img.naturalHeight, 
                                  0,0, 700,               500);
            }, false);

}
$(document).ready(image);