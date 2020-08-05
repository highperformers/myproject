
(function($, window, document, undefined){

    var str = '더조은컴퓨터아카데미학원.';
    var result;  //undefined

        //indexOf();메서드
        result = str.indexOf('아카데미'); //7번째 위치 인덱스 값 : 6
        result = str.indexOf('바다'); //찾지 못한 글자 : -1
        result = str.indexOf('더조은'); //첫번째 위치 인덱스 값 : 0
        //console.log(result);

        //match();
        result = str.match('컴퓨터'); //네번째 위치 : 3
        result = str.match('IBM컴퓨터'); //찾지 못한 글자 : null
        //console.log(result);

        //search();
        result = str.search('학원'); //열한번째 위치 : 10
        result = str.search('문종학원'); //찾지 못한 글자 : -1
        result = str.search('.'); //찾지 못한 글자 : -1 >> 신뢰성 떨어진다 
        result = str.indexOf('.'); //열세번째 위치 : 12 >> search 보다 신뢰성이 높다
        //console.log(result);

        //문자열 추출
        result = str.substr(3,7);  //3번째 위치에서 ~ 7글자 추출
        result = str.slice(0,2);  //첫번째 위치에서 3번째 위치 전까지 추출
        result = str.substring(0,2);  //첫번째 위치에서 3번째 위치 전까지 추출
        result = str.slice(-2);  //끝에서 두글자 추출
        result = str.slice(0,-2);  //끝에서 두글자 제외하고 추출
        result = str.slice(0,-1);  //끝에서 한글자 추출
        result = str.slice(0);  //모두 추출
        //console.log(result);

        //문자열 추출
        str = 'THEJOEUN,COMPUTER,Academy';
        result = str.split(',');  //Comma를 기준으로 문자열을 추출
        //console.log( result );  //배열로 저장한다
        //console.log( result[0] );  //배열[0] 출력

        str = 'THEJOEUN COMPUTER Academy';
        result = str.split(' '); //공백(Blank)을 기준으로 문자열 추출
        //console.log( result );

        result = str.toUpperCase(); //투업퍼케이스 모두 대문자
        //console.log( result );

        result = str.toLowerCase();  //투오우워케이스 모두 소문자
        //console.log( result );
        //console.log( result[3].toUpperCase() );


        //응용문제
        str = '자바스크립트와 제이쿼리 그리고 Vue.js';
            //문제1 : 제이쿼리 문자열만 추출하시오. 
            //단, indexOf()메서드와 slice()메서드만 이용하시오.
            //문자위치 8 = str.indexOf('제이쿼리')
            //slice(8,12);
            //slice(str.indexOf('제이쿼리'), str.indexOf('제이쿼리')+4)

            var p;
            var r;

            p =  str.indexOf('제이쿼리'); //제이쿼리 시작 위치를 검색하고
            r = str.slice( p, p+4 );  //그리고 결과를 이용 문자를 추출
            //console.log( r );


            //공백문자를 이용하여 모든 문자열을 배열로 처리하시요.
            //단, 출력내용중 영문은 모두 대문자로 출력할 것.

            var t;
            var u;

            t = str.toUpperCase();
            u = t.split(' ');
            //console.log( u );



        //브라우저(Browser) 판별 코딩
        //indexOf()이용
         var browser = window.navigator.userAgent.toLowerCase();  //사용자 브라우저 검색
                
        var res = browser.indexOf('chrome');  //크롬브라우저 검색
                
        if( browser.indexOf('chrome') >= 0 ){
            alert('크롬브라우저입니다.');
        }
        else if( browser.indexOf('firefox') >= 0 ){
            alert('파이어폭스(모질라) 브라우저 입니다.');
        }
        else if( browser.indexOf('safari') >= 0 ){
            alert('사파리 브라우저 입니다.');
        }
        else if( browser.indexOf('msie') >= 0 || browser.indexOf('trident') >= 0 ){
            alert('익스플로러 브라우저 입니다.');
        }







})(jQuery, window, document);