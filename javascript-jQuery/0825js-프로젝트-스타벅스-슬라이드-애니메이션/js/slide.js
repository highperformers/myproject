(function($){

    var cnt=0;
    var setId=0;  //타이머변수


        //1. 슬라이드 메인함수
        //애니메이션
        //stop() 메소드는 애니메이션 이전 발생한 여러번 수행 할거를 막는다.
        //버블링을 막음.
        function slideFn(){
            $('.section3-slide-wrap').stop().animate({ left: -819*cnt },600 ,function(){
                if(cnt>2){cnt=0} //마지막이면 처음슬라이드로 설정
                if(cnt<0){cnt=2} //처음보다 더 뒤로가면 마지막 슬라이드로 설정
                $('.section3-slide-wrap').stop().animate({ left: -819*cnt },0);
            });
        }

        //2. 슬라이드 다음슬라이드 카운트함수 ++
        function nextSlideCountFn(){
            cnt++; //숫자 증가후
            slideFn(); //슬라이드 메인함수 호출 - cnt 증가변수 전달된다.
        }

        //3. 슬라이드 이전슬라이드 카운트함수 --
        function prevSlideCountFn(){
            cnt--;
            slideFn(); //슬라이드 메인함수 호출
        }

        //4. 버튼 클릭 이벤트 - 다음클릭버튼
        $('.nextArrowBtn').click(function(){
            //다음 카운트 함수
            //애니메이션이 진행이 안될 때만 함수 호출 가능
            if( !$('.section3-slide-wrap').is(':animated') ){
                nextSlideCountFn();
            }

        });


        //5. 버튼 클릭 이벤트 - 이전클릭버튼
        $('.prevArrowBtn').click(function(){
                //이전 카운트 함수 
                if( !$('.section3-slide-wrap').is(':animated') ){
                    prevSlideCountFn();
                }
        });


        //6. 자동 타이머 설정
        //   3초에 한번씩 다음슬라이드 카운트를 호출 실행하게 해보자
        //   1초 1000밀리초
        //setInterval(함수이름만괄호배고,1000밀리초);
        function timer(){
            setId =  setInterval(nextSlideCountFn,3000);
        }    
        timer(); //최초 로딩시 한번 호출실행
       


        //7. 일시정지 하기
        //   playBtn 버튼을 클릭하여 
        //   그리고 버튼 모양을 play이미지로 변경하기 - addPlay 클래스 추가해서
        var t = 0;  //플레이상태
        $('.playBtn').click(function(){
            //한번 클릭시 일시정지
            if( t==0 ){ //현재 플레이되는 상태를 표시
                t=1;    //정지 상태의 변환 
                clearInterval(setId); //일시정지 : 타이머 중지
                $('.playBtn').addClass('addPlay');
            }
            else{
                t=0;
                clearInterval(setId);
                timer(); //타이머함수 호출 3초간격으로 자동실행
                $('.playBtn').removeClass('addPlay');
            }

            //또한번 클릭하면 재시작


            // $(this).addClass('addPlay'); //클래스를 태그요소에 추가 하는 메서드
            // $(this).rmoveClass('addPlay'); //클래스를 태그요소에 삭제 하는 메서드
            // $(this).toggleClass('addPlay');  //추가와 삭제를 반복하는 토글 메서드
        });

})(jQuery);
//slide.js