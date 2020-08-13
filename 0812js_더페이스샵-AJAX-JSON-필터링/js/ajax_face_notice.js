(function($){
    
    var txt = '';
    var cnt = 0;
    var a = [];
    var pages = 10; //페이지당 10줄씩
    var pageBtn = 1; //페이지버튼 번호 1 ~ ...
    var startRecord = (pageBtn-1)*pages; //시작번호(레코드) 0 10 20 30 ...
    var endRecord = startRecord + pages; //끝번호(레코드)   10 20 30 ...
    
    $.ajax({
        url:'./data/notic200e.json',
        dataType:'JSON',
        success: function(data){
            
            //반복 배열처리 each() 메서드
            $.each(data.공지사항, function(idx, obj){
                a[idx] = []; //2차원 배열 선언

                a[idx][0] = (idx+1);
                a[idx][1] = obj.구분;
                a[idx][2] = obj.제목;
                a[idx][3] = obj.날짜;
            })

            //console.log( a[0][0], a[0][1], a[0][2], a[0][3] ); //배열 저장 확인 출력


            cnt = a.length; //200개



 //////////////////////////////////////////////////////////////////////////////////
 
 function bindFn(){
            
            //페이지 번호 클릭한 경우 예를 들어서 버튼 번호 변경 시뮬레이션
            pageBtn = 1; 
            startRecord = (pageBtn-1)*pages; 
            endRecord = startRecord + pages;

            //for(i in a){  // 0~199 배열 반복문 간략하게 표현
            for(i=startRecord; i<endRecord; i++){
                txt += '<li class="clearfix">';
                txt += '<span>' + (cnt-i) + '</span>';
                txt += '<span>' + a[i][1] + '</span>';
                txt += '<span>' + a[i][2] + '</span>';
                txt += '<span>' + a[i][3] + '</span>';
                txt += '</li>';
            }

            $('.ajaxBinding').html(txt);
            txt='';

} //함수끝

bindFn();



//////////////////////////////////////////////////////////////////////////////////////
//함수로 사용하면 버튼 클릭시 호출해서 재사용 가능



            //페이지번호 버튼 출력 바인딩
            //총레코드=200(a.length)/10(pages) : 0 ~ 20미만
            // txt += '<div>';
            for(i=0; i<a.length/pages; i++){
                txt += '<span><a href="javascript:" class="pageBtn">' + (i+1) + '</a></span>'
            }
            // txt += '</div>';

            $('.pageBtn-wrap').html(txt);
            txt='';


            //페이지 버튼 클릭 이벤트
            //클릭시 해당 페이지 목록만 10개 출력
            $('.pageBtn').on({
                click: function(){
                   // pageBtn = parseInt( $(this).text() );  //숫자로 페이지번호 저장
                    pageBtn = Number( $(this).text() );  //숫자로 페이지번호 저장
                    bindFn();
                }
            });

            //이전페이지 버튼
            $('.pagePrevBtn').on({
                click: function(){
                    pageBtn--;
                    if(pageBtn<1){
                        pageBtn=1;
                    }
                    bindFn();
                }
            });

            //다음페이지 버튼
            $('.pageNextBtn').on({
                click: function(){
                    pageBtn++;
                    if(pageBtn>20){
                        pageBtn=20;
                    }
                    bindFn();
                }
            });



        },
        
        error: function(){
            alert('AJAX Error!!')
        }
    });


})(jQuery);


//ajax_face_notice.js
