(function($){
    
    //요소중 .p1 내용을 읽어 들여서
    //선택하는 제어문 switch()문 활용
    //결과물은 .p1-result 출력
    //정규표현식(정규형)으로도 공백 제거 
    var txt = '';
    var a = ' 자바스크립트 ';

        txt = $('.p1').text();

            console.log( txt );
            console.log( a );
            console.log( a.trim() + 'trim 메서드 사용결과' )

            if( txt == a.trim() ){ //양쪽 끝에 공백 제거
                //내보내기 
                $('.p1-result').text( txt + ' 제이쿼리는 라이브러리 입니다.');
            }
            else {
                $('.p1-result').text(' 웹퍼블리셔, 프론트앤드, 백앤드 모두 필수 과목입니다.')
            }

            switch(txt){
                case '자바스크립트':
                    $('.p1-answer').html('<em>' + txt + '</em>' + '의 라이브러리 대표는 제이쿼리이다.')
                    break; //조건이 끝임을 알리고 빠져나간다. 탈출한다.
                default :
                    $('.p1-answer').html('<strong>자바스크립트는 웹사이트제작시 필수 웹프로그래밍입니다.</strong');
            }

            // switch(txt){
             //   case '자바스크립트':
            //        txt = '<em>' + txt + '</em>' + '의 라이브러리 대표는 제이쿼리입니다.';
            //        break;
             //   default :
             //       txt += '<strong>자바스크립트는 웹사이트제작시 필수 웹프로그래밍입니다.</strong>'
             // }

            //    $('p1-answer').html(txt);


            //반복문 while()
            //.p2 숫자를 읽어서 그 숫자 범위에 숫자를 1씩 증가하여 .p2-result 출력하는 반복문
            var x = Number($('.p2').text());
            // var x = ($('.p2').text()); //문자형 숫자

                $('.p2-result').text ( x ) ;



                var i = 0; //증감하는 변수는 반드시 선언하고 초기 값을
                var b = ''
                while( i < x ){ //i변수가 989 미만까지 반복문
                    i++;
                    if( i % 2 === 0 ){ //결국 짝수를 의미(even)
                        b += '<span style= " font-size:' + i + 'px ">' + i + '</span><br>';
                    }
                }
                $('.p2-answer').html( b );


                //홀수만 출력
                var j = 0;
                var y = '';
                while( j < 100){
                    j++
                    if ( j % 2 !=0 ){
                        y += j + '<br>'
                       
                    }
                }

                //$('.p2-answer').html( y );


                //do{} while()
                var k = 0;
                var z = '';
                do {
                        k++;
                        z += k + '<br>';
                } while ( k < 50 )
                
               // $('.p2-answer').html( z );
               






})(jQuery);