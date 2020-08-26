(function($,window,document,undefined){

    //객체(Object)
    // var starBucks = new Object();//생성자
    //리터럴 객체
    var starBucks = {
        init: function(){ //첫 실행 프로그램 이름 init
            starBucks.section5Fn();
            starBucks.section6Fn();
            starBucks.section7Fn();
            starBucks.section9Fn();
        },
        section5Fn: function(){

            var t = 0;//토글변수
            
            //section5-left를 좌측 --130% 위치에서 출발 이동 현재위치 30% 지점으로
            //출발할때 안보이게(opecity(0)) 출발한다. 현재위치에 도달시 opecity(1)

            function sec5FormatStartFn(){
                $('.section5-left').stop().animate({left:-70 + '%', opacity:0},1500);
                $('.section5-right').stop().animate({right:-70 + '%', opacity:0},1500);
            }

            function sec5AnimationFn(){
                $('.section5-left').stop().animate({left:30 + '%', opacity:1},2000);
                $('.section5-right').stop().animate({right:30 + '%', opacity:1},2000);
            }

            //실행 테스트
            // sec5FormatStartFn();
            // sec5AnimationFn();

            //스크롤 이벤트
            //어느 위치에 오면 실행 할래?
            //상단에서 아래로 스크롤시 1000px에 도달하면
            //섹션5 애니메이션 구동
            $(window).scroll(function(){//반드시 스크롤이 발생할 때만 실행
                //console.log('스크롤탑값' + $(window).scrollTop() );
                //$('section4').offset().top : 섹션4의 탑값 위치
                //console.log( '섹션4의값' + $('#section4').offset().top );
                if( $(window).scrollTop() >= $('#section4').offset().top-500 ){
                    if(t==0){//1회만 실행하도록 하여 버블링 막아줌
                        t=1;//t의 변수값을 1로 설정한다.
                        sec5AnimationFn();//애니메이션 1번 실행
                    }
                }
                else{
                    if(t==1){
                        t=0;
                        sec5FormatStartFn();//다시초기화
                    }
                }
            });
        },

        section6Fn: function(){

            var t = 0;//토글변수

            //초기화
            function formatFn(){
                $('.section6-right').stop().animate( { opacity:0 },1500);

            }

            //애니메이션
            function animationFn(){
                $('.section6-right').stop().animate( { opacity:1 },3000);
            }

            //스크롤이벤트
            $(window).scroll(function(){
                //섹션5가 노출되는 탑값 위치에서 애니메이션
                if( $(window).scrollTop() >= $('#section5').offset().top) {
                    if(t==0){
                        t=1;
                        animationFn();
                    }
                }   
                else{
                    t=0;
                    formatFn();
                }
            });
        },

        section7Fn: function(){
            
            var t = 0;//토글변수

            function formatFn(){
                $('.section7-txt1').stop().animate({ left: -1000, opacity:0},1000);
                $('.section7-txt2').stop().animate({ left: -1000, opacity:0},1000);
                $('.moreBtn-wrap').stop().animate({ opacity:0},1000);

            }
            function animationFn(){
                $('.section7-txt1').stop().animate({ left: 0, opacity:1},2000);
                $('.section7-txt2').stop().animate({ left: 0, opacity:1},2500);
                $('.moreBtn-wrap').stop().animate({ opacity:1},2500);
            }

            $(window).scroll(function(){
                if( $(window).scrollTop() >= $('#section5').offset().top+300 ) {
                    if(t==0){
                        t=1;
                        animationFn();
                    }
                }
                else{
                    t=0;
                    formatFn();
                }

            });

        },

        section9Fn: function(){

            var t = 0;

            function formatFn(){
                $('.sec9-right-title h2').stop().animate({ left:1000, opacity:0},0);
                $('.sec9-right-title h3').stop().animate({ left:1000, opacity:0},0);
                $('.sec9-right-title span').stop().animate({ left:1000, opacity:0},0);

            }

            function animationFn(){
                $('.sec9-right-title h2').stop().animate({ left:0, opacity:1},2000);
                $('.sec9-right-title h3').stop().animate({ left:0, opacity:1},2300);
                $('.sec9-right-title span').stop().animate({ left:0, opacity:1},2600);

            }
            formatFn();

            $(window).scroll(function(){
                if($('#section8').offset().top-300){
                    if(t==0){
                        t=1;
                        animationFn();
                    }
                }
                else{
                    if(t==1){
                        t=0;
                        formatFn();
                    }
                }

            });

        }
    }
    
    starBucks.init();//객체.초기실행 함수 호출 실행



})(jQuery,window,document);