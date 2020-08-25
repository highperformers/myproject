window.onload = function(){

  
    var can = document.getElementById('canvas_wrap'); //캔버스 자바스크립트 코딩을 한다.
    var ctx = can.getContext('2d'); //캔버스에 콘텍스트 가져온다. 사용 가능
       

        //드로잉
        //컨텍스트변수명.색이 채워진 사각형(x,y,너비,높이);
        ctx.fillStyle='#ff3333';
        ctx.fillRect(0,0,50,50);

        ctx.fillStyle='#3388aa';
        ctx.fillRect(52,0,50,50);

        ctx.fillStyle='#ffff33';
        ctx.fillRect(104,0,50,50);

        ctx.fillStyle='#ff33ff';
        ctx.fillRect(156,0,50,50);

        ctx.fillStyle='#33ffff';
        ctx.fillRect(208,0,50,50);

        ctx.fillStyle='#ff3333';
        ctx.fillRect(0,52,50,50);

        ctx.fillStyle='#3388aa';
        ctx.fillRect(52,52,50,50);

        ctx.fillStyle='#ffff33';
        ctx.fillRect(104,52,50,50);

        ctx.fillStyle='#ff33ff';
        ctx.fillRect(156,52,50,50);

        ctx.fillStyle='#33ffff';
        ctx.fillRect(208,52,50,50);

        ctx.fillStyle='#ff3333';
        ctx.fillRect(0,104,50,50);

        ctx.fillStyle='#3388aa';
        ctx.fillRect(52,104,50,50);

        ctx.fillStyle='#ffff33';
        ctx.fillRect(104,104,50,50);

        ctx.fillStyle='#ff33ff';
        ctx.fillRect(156,104,50,50);

        ctx.fillStyle='#33ffff';
        ctx.fillRect(208,104,50,50);
       
        
        
    var canvas = document.getElementById('canvas_wrap2');
	var context = canvas.getContext('2d');

		context.font ='20px Arial';
        context.fillText('Javascript & jQuery',0,100);
            
        context.strokeRect(0,90,50,50);
        context.strokeStyle='#00c';
        context.strokeRect(55,90,50,50);

    //Line
    var canvasLine = document.getElementById('canvas_wrap3');
    var contextLine = canvasLine.getContext('2d');


        // contextLine.moveTo(0,0);
        // contextLine.lineTo(50,0); //x에서 50이동
        // contextLine.lineTo(50,50); //x에서 50이동 y에서 50이동
        // contextLine.lineTo(0,50); 
        // contextLine.lineTo(0,10);
        // contextLine.lineTo(40,10);
        // contextLine.lineTo(40,40);
        // contextLine.lineTo(10,40);
        // contextLine.lineTo(10,20);
        // contextLine.lineTo(30,20);
        // contextLine.lineTo(30,30);
        // contextLine.lineTo(20,30);
        // contextLine.lineTo(20,25);
        // contextLine.lineTo(25,25);
        // contextLine.stroke();

        contextLine.moveTo(0,0);
        contextLine.lineTo(100,0);
        contextLine.lineTo(100,100);
        contextLine.lineTo(0,100);
        contextLine.lineTo(0,10);
        contextLine.lineTo(90,10);
        contextLine.lineTo(90,90);
        contextLine.lineTo(10,90);
        contextLine.lineTo(10,20);
        contextLine.lineTo(80,20);
        contextLine.lineTo(80,80);
        contextLine.lineTo(20,80);
        contextLine.lineTo(20,30);
        contextLine.lineTo(70,30);
        contextLine.lineTo(70,70);
        contextLine.lineTo(30,70);
        contextLine.lineTo(30,40);
        contextLine.lineTo(60,40);
        contextLine.lineTo(60,60);
        contextLine.lineTo(40,60);
        contextLine.lineTo(40,50);
        contextLine.stroke();




}

    
//canvas.js