var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function (Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(800);
		hole_obj.scaleToHeight(600);
		hole_obj.set({
			top : 0,
			left : 40
		});
		canvas.add(hole_obj);
	});	
}

function playSound(){
x.play();	
}
