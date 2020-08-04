//array.js
(function($){

    var a = [1,2,3,4,5,6,7,8,9,10];    //1차원 배열
    var imsi;

    /*
        console.log( a ); //배열 선언 내용을 확인 한다.
        //6번째 배열 가져오기
        console.log( a[5] ); //배열의 인덱스 번호(배열첨자)는 0 이 첫번째 

        //첫번째 배열 값을 - 0번 방 데이터를 마지막 배열 위치로 이동
        //a = [1,2,3,4,5,6,7,8,9,10] >> 결과 : [2,3,4,5,6,7,8,9,10,1]

        //맨앞 배열 값 삭제 메서드 - shift()
        //1.
        imsi = a.shift(); //삭제된 맨앞 배열값을 imsi 기억 시킨다.
        
        //2.
        //맨끝에 삽입 하는 메서드 - push()
        a.push(imsi);   
        console.log( a ); 

        //3. 반복 연습
        imsi = a.shift(); //1회
        a.push(imsi);    
        imsi = a.shift(); //2회
        a.push(imsi);    
        imsi = a.shift(); //3회
        a.push(imsi);    
        imsi = a.shift(); //4회
        a.push(imsi);    
        imsi = a.shift(); //5회
        a.push(imsi);    

        //확인
        console.log( a ); 

 

        console.log( a ); //배열 확인    
        
        //반복문 활용 앞에서 뒤로 이동하는 메서드
        //for(i=1; i<=9; ){  //9회
        //for(i=10; i<=18; ){ //9회
        for(i=0; i<=2; i++){  //9회
            imsi = a.shift(); //쉬피팅
            a.push(imsi);     //푸슁
        }
        console.log( a ); //배열 확인



        //맨끝의 배열값을 삭제 pop()
        //맨앞에 삭제된 배열값 삽입 unshift()
        console.log( a );

        for(i=0; i<3; i++){  //3회 반복
            imsi = a.pop();  //팝핑
            a.unshift(imsi); //언쉬피팅    
        }

        console.log( a );

   */

        var str ='Javascript&jQeuryFrontend';
        var txt = '';

            //console.log(str);
            
            //substr(); 글자의 위치를 이용하여 글자를 추출
            //txt = str.substr(0,1); //1글자만 출력 0 ~ 1미만까지
            //console.log( txt );

            //txt = str.substr(1,2); //2글자만 출력 1 ~ 2미만까지
            //console.log( txt );

            //console.log(str.length);

            for(i=0; i<str.length; i++){
                a[i] = str.substr(i,1); //i는 글자위치 1글자수 추출할 글자
                console.log( a[i] );  //0 ~~ 24
            } 
            

            //테이블에 배열값 출력하기
            var cnt = -1;
            for(i=0; i<5; i++){ //행(줄)증가 5
                txt += '<tr>';
                for(j=0; j<5; j++){ //열(칸)증가 5
                    cnt++; //0 1 2 3 4 .. 24(25회 반복)
                   txt += '<td>' +  a[cnt] + '</td>' 
                }
                txt += '</tr>';
            }
            $('.table').html(  txt );


 /*
            //테이블에 있는 글자칸을 확대하여 사라지는 형태의 
            //글자단위로 애니메이션

            //테스트는 표의 3(2)줄의 3(2)칸의 글자 색상을 빨강
            var i=-1;
            var setId = 0;
            var setId2 = 0;

           function timer(){
            setId = setInterval(txtFn,200);
           } 
           timer();

            function txtFn(){
                clearInterval(setId);
                i++; //0 1 2 .... 
                if(i>4){
                    i=4;
                }

                j=-1;
                function colFn(){                
                    setId2 = setInterval(txtFn2,100);
                }
                colFn();

                function txtFn2(){
                    j++; //0 1 2 3 4
                    if(j>4){
                       clearInterval(setId2); 
                       timer();
                    }
                    $('.table').find('tr').eq(i).find('td').eq(j).css({ transition:'all 1s', opacity:1, transform:'scale(1)' }).fadeIn(0, function(){
                        $(this).css({ opacity:0, transform:'scale(10)' });
                    });                        
                }
                    
            }

*/


        var j=-1;    

        setInterval(fn, 200); 

        function fn(){ 
            j++;
            $('.table').find('tr').eq(0).find('td').eq(j).css({ transition:'all .8s', opacity:1, transform:'scale(1)' }).fadeIn(0, function(){
                $(this).css({ opacity:0, transform:'scale(20)' });
            });  
        }

})(jQuery);
