(function($){
  
    var txt         = '';
    var cnt         =  0;
    var a           = [];
    var pages       = 10; //페이지당 10줄씩
    var pageBtn     = 1; //페이지버튼 번호 1 ~ ...
    var startRecord = (pageBtn-1)*pages;   //시작번호(레코드)   0 10 20 30 40 ...
    var endRecord   = startRecord + pages; //끝번호(레코드)    10 20 30 40 50
    
    $.ajax({
        url:'./data/notic200e.json',
        dataType:'JSON',
        success: function(data){
            
            //반복 배열처리 each
            $.each(data.공지사항, function(idx, obj){
                a[idx] = []; //2차원 배열 선언
                a[idx][0] = (idx+1);
                a[idx][1] = obj.구분;
                a[idx][2] = obj.제목;
                a[idx][3] = obj.날짜;
            });

            cnt = a.length; //200개


/////////////////////////////////////////////////////////////////////

        function bindFn(){
            //페이지 번호 클릭한 경우 예를 들어서 버튼 번호 변경 시물레이션
            //페이지번호가 클릭한 페이지번호로 전달 됩니다.
            startRecord = (pageBtn-1)*pages;   //시작번호(레코드)   0 10 20 30 40 ...
            endRecord   = startRecord + pages; //끝번호(레코드)    10 20 30 40 50
            
            for(i=startRecord; i<endRecord; i++){
            //for(i in a){ //0 ~199 배열 반복문 간략하게 표현
                txt += '<li class="clearfix">'; //주의: 작은 따옴표 안에 큰따옴표 인용부호
                txt += '<span>'+ (cnt-i) +'</span>';
                txt += '<span>'+ a[i][1] +'</span>';
                txt += '<span>'+ a[i][2] +'</span>';
                txt += '<span>'+ a[i][3] +'</span>';
                txt += '</li>';
            }

            $('.ajaxBinding').html(txt);
            txt='';

        } //함수 끝
        bindFn();

////////////////////////////////////////////////////////////////////////////



            //페이지번호 버튼 출력 바인딩
            //총레코드 200(a.length)/10(pages) : 0  ~ 20미만
            txt +='<div>';
            for(i=0; i<a.length/pages; i++){ //0 ~ 20
                txt +='<span><a href="javascript:" class="pageBtn">' + (i+1) + '</a></span>'
            }
            txt +='</div>';

            $('.pageBtn-wrap').html(txt);
            txt = '';



            //페이지 버튼 클릭 이벤트
            //클릭시 해당 페이지 목록만 10개 출력
            $('.pageBtn').on({
                click:  function(){
                   // pageBtn = parseInt( $(this).text() ); //숫자로 페이지번호 저장
                    pageBtn = Number( $(this).text() ); //숫자로 페이지번호 저장
                    bindFn();
                }
            });


            //이전페이지 버튼 >>
            $('.pagePrevBtn').on({
                click:  function(){
                    pageBtn--;
                    if(pageBtn<1){
                        pageBtn=1;
                    }
                    bindFn();
                }
            });

            //다음페이지 버튼 >>
            $('.pageNextBtn').on({
                click:  function(){
                    pageBtn++;
                    if(pageBtn>cnt/pages){ //20=200/10
                        pageBtn=cnt/pages; //20=200/10
                    }                    
                    bindFn();
                }
            });





        },
        error: function(){
            alert('AJAX Error!!!');
        }
    });




})(jQuery);
//ajax_face_notice.js
// localhost/ajax_notice12/
// 127.0.0.1/ajax_notice12/