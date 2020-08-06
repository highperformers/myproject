(function($, window, document, undefined){

    //팝업창-window팝업창
    //window.open('url:웹추소', '창이름', '옵션창의 크기 너비, 높이, 탑값, 좌측갑...')
    //url='http://www.naver.com';
    //window.open(url,'_네이버팝업창','width=500, height=600, top:0, left:0');

    url='./popup.html';
    window.open(url,'_202008061800','width=633, height=500, top=200, left=300');


    function popup20200806(){
   
    url='./popup2.html';
    window.open(url,'_202008061800_2','width=800, height=549, top=200, left=735');

    }

    //setTimeout( popup20200806, 1000*30 );  //1초=1000, 30초=30000


    //팝업창-레이어팝업창(모달팝업창)-최근에는 레이어팝업을 많이 사용하는 트랜드

    var modal_popup = function(){  //리터럴함수 == 이름없는 함수

        //$('.modal_popup').show();  //이 함수는 반드시 함수 아래에서만 실행
        //$('.modal_popup').fadeIn(1000);  //이 함수는 반드시 함수 아래에서만 실행
        $('.modal_popup').stop().animate({ top:'0%', opacity:0 }).animate({ top:'50%', opacity:1 }, 1000);

    }

    setTimeout( modal_popup, 1000*5 )



    //쿠키-오늘 하루동안 열리지 안음 하고 체크




    //return
    function sum(a,b){ //Parameter(매개변수,매개변수)

        return a+b; //10+20  리턴이 실행되고 종료
        alert( 'return문 아래 메시지!!') //실행 안된다-리턴후 종료 되었기에

    }

    var result = sum(10,20); //Argument(전달인자,전달인자)
        console.log( result );



    //재귀함수
    var num = 0; //증가 또는 감소 변수는 반드시 초기값이 설정 되어야 한다

    function testFn(){  //스코프-함수 실행 영역(범위)
        num++;
        document.write(num + '<br>');
        if(num == 10){
            return;
        }
        testFn(); //재귀함수
    }

    testFn();


    //즉시실행함수 IIFE - 함수 호출 없이 곧바로 실행되는 함수
    (function(){

        alert('오늘 수고하셨습니다!!');

    })();
    



})(jQuery, window, document);