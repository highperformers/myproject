

(function($){
   
    var a=76;
        //변수 a에 있는 값을 짝수Even와 홀수Odd 판단
        //if(){} 제어문-조건문
        //% 나머지 연산자
        // == 비교연산자
        if( a % 2 == 0){
            console.log( a + 2);
            console.log( a - 2);
            console.log( a * 2);
            console.log( a / 2);
            console.log( a / 2);
            console.log( a % (2 + 5) * 7 - 3);
            console.log( a / 2 +'짝수입니다.');
            
        }

    var str = ''; //문자열 변수 선언
     
        str = '<h1>더조은컴퓨터아카데미</h1>';
        str += '<h2>자바스크립트&제이쿼리</h2>';
        str = str + '<h3>Vue.js</h3>';
        str += '<h4>Node.js</h4>';

        
        $('.txt1').html( "" ); //내용삭제
        $('.txt1').text( "" ); //내용삭제
        $('.txt1').empty(); //내용삭제
        $('.txt1').text( str ); //태그 사용 불가능-텍스트로 인식
        $('.txt1').html( str ); //태그 사용 불가능-텍스트로 인식
        //마지막 줄만 나타난다
        

        var txt = '';

            txt += '<div><img src="./image/avtar9.jpg"></div>';
            txt += '<div><img src="./image/avtar10.jpg"></div>';
            txt += '<div><img src="./image/avtar11.jpg"></div>';

            $('.gallery').html( txt );


        //비교연산자
        var a = 7;
        var b = '7';

            console.log( a == b );
            console.log( a === b );

        var c = 78;
        var d = 100;

            console.log( c != d );
            console.log( c == d );
            console.log( c > d );
            console.log( c < d );


        //논리연산자
        // || 파이프(or) 또는, 이거나, 어느 한개라도 만족하면 참
        // && 엠퍼샌드 (and) 그리고, 이면서, 모두 만족하면 참
        // ! (not) 부정, ~아니다

        var x = '자두';
        var y = '복숭아';
        var z = '수박';

            if( x === '포도' && y == '복숭아' && z == '수박'){
                console.log( '모두 만족하면' + x,y,z + '맛있겠다');
            }
            else{ //위 조건하고 다르면(아니면)
                console.log( '나는 과일이 먹고 싶다');
            }


        var kor = 90;
        var eng = 80;
        var mat = 59;

            if( kor>=90 || eng>90 || mat>90 ){
                console.log('상금 10000원을 드립니다');
            }
            else{
                console.log( '한과목이라도 열심히 공부하세요!!!');
            }


        var a = 10;
        var b = 5;
            //조건문 ? 참 : 거짓 - 삼항조건연산자
            console.log( a > b ? 'a가 크다' : 'b가 크다' );
                   a > b ? txt='a는 b보다 크다' : txt='b가 크다'
                   console.log(txt);


        //Prompt 입력창에 입력 받는다
        var a;
            a = prompt('당신의 체중은 얼마입니까?');
            if( a > 90 ){
                console.log('당신은 비만입니다. 운동하세요');
            }
            else{
             console.log('당신은 꾸준히 관리를 잘하셨습니다.');
            }


        //학점 판단 다중 조건문
        var avg = 98;
        var hakjum = '';
            if( avg > 95 ){
                hakjum = 'A+';
            }
            else if( avg >= 90 ){
                hakjum = 'A';
            }
            else if( avg >= 80 ){
                hakjum = 'B';
            }
            else if( avg >= 75 ){
                hakjum = 'C';
            }
            else if( avg >= 70 ){
                hakjum = 'D';
            }
            else if( avg >= 60 ){
                hakjum = 'E';
            }
            else { // 0~60미만
                hakjum = 'F';
            }

            console.log( hakjum );





















})(jQuery);


