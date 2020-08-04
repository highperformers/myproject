(function($){

    //요소 중 .p1 내용을 읽어 들여서
    //선택하는 제어문 
    //switch() 문 활용
    //결과물은 .p1-result 출력
    //정규표현식(정규형)으로도 공백 제거 가능 함.
    var txt = '';
    var a =' 자바스크립트 ';
        txt = $('.p1').text(); //읽어오기  '자바스크립트'

            console.log( txt ); //결과 : 자바스크립트
            console.log( a ); //결과 : 자바스크립트
            console.log( a.trim() + '트림trim() 메서드 사용결과'); //결과 : 자바스크립트


            if( txt == a.trim() ){  //양쪽 끝에 공백제거 
                //내보내기
                $('.p1-result').text( txt + '       제이쿼리는 라이브러리 입니다.');
            }
            else{
                $('.p1-result').text('웹퍼블리셔, 프론트앤드, 백앤드 모두 필수 과목입니다.');
            }


            switch(txt){
                case '자바스크립트':
                    txt = '<em>' + txt + '</em>' + '의 라이브러리 대표는 제이쿼리 이다.';
                    break; //사용안하면 아래 조건들도 같이 수행 된다.
                    //조건이 끝임을 알리고 빠져나간다. 탈출
                default :
                    txt +='<strong>자바스크립트는 웹사이트제작시 필수 웹-프로그래밍입니다.</strong>';
            }

                $('.p1-answer').html(txt);




            //반복문 while()
            //.p2 숫자를 읽어서 그 숫자 범위에 
            //숫자를 1씩 증가하여 .p2-result출력하는 반복문 내용..
            
            var x = Number($('.p2').text()); //문자형 숫자를  수치형으로 변환
            // var x = $('.p2').text(); //문자형 숫자

                $('.p2-result').text( x ); //989 문자열

                //console.log( x === 989 ); //false
                //console.log( x == 989 ); //true
                var i = 0; //증감하는 변수는 반드시 선언하고 초기 값을                 
                var b = '';

                while( i < x ){ //i변수가 989 미만까지 반복문
                    i++; //1 2 3 ... 989
                    if( i % 2 === 0 ){ //짝수(even)
                        b += '<span style="font-size:' + i + 'px">' + i + '</span><br>';
                    }   
                }
                $('.p2-answer').html( b );



                //홀수만 
                var j = 0; 
                var y ='';
                while( j < 100 ){
                    j++; //1 3 5 7 9 ....
                    if( j % 2 !=0 ){ //j변수값을 2로 나누어 나머지가 0이 아니면  출력
                       y += j + '<br>';
                    }
                   
                }

               // $('.p2-answer').html( y );  //홀수만 출력

                var k=0;
                var z='';
                //do{} ~ while()
                do{
                    k++;
                    z += k + '<br>';
                }while(k<50)

              //  $('.p2-answer').html( z ); 

})(jQuery);
//script.js