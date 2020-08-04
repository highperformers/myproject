(function($){
    var cnt = 0;

    //cnt 변수는  버튼 클릭하면 증가하낟.
    //슬라이드 view박스 를 클릭하면 click 이벤트
    //슬라이드 wrap박스가 좌측으로  left:-890*카운트
    //부드럽게 이동하는 슬라이드(애니메이션) .animate();

    //애니메이션 
    function slide(){
        $('.slide-wrap').animate({ left:-819*cnt },1000,function(){
            if(cnt>2){
                cnt=0;
            }
            $('.slide-wrap').animate({ left:-819*cnt },0); //초기화 리턴
        });
    }

    //클릭 이벤트
    $('.slide-view').click(function(){
        cnt++;
        slide(); //슬라이드 호출 그러면서 cnt변수 적용
    });


})(jQuery);
//slide.js