(function($){
    var txt = '';
    var a = [];
    var b = [];
    var c = [];
    var d = [];
    var cnt = 0;
    var txt2 = '';
    var page = 10; //한화면에 보여질 목록의 개수
    var btnNum = 1; //페이지는 기본값이 1로 시작한다.

        $.ajax({
            url:'./data/notic200e.json',
            dataType:'JSON',
            success: function(data){
               
                $.each(data.공지사항, function(index, obj){
                    a[index]=index+1;
                    b[index]=obj.구분;
                    c[index]=obj.제목;
                    d[index]=obj.날짜;
                });

                cnt = a.length;  //200
                
                // i=시작번호, i<종료번호
                for(i=0; i<page; i++){  //0 ~ 10, 10 ~ 20, 20 ~ 30,
                    txt += '<li class="clearfix">';
                    txt += '<span>' + (cnt-i) + '</span>';
                    txt += '<span>' + b[i] + '</span>';
                    txt += '<span>' + c[i] + '</span>';
                    txt += '<span>' + d[i] + '</span>';
                    txt += '</li>';
                }
                $('.ajaxBinding').html( txt );


                //페이지버튼 10개 묶음 버튼1개
                for(i=0; i<cnt/page; i++){
                    txt2 += '<div><span><a href="javascript:void(0)" class="pageBtn">' + (i+1) + '</a></span></div>';
                }

                $('.pageBtn-wrap').html( txt2 );

                
                 $('.pageBtn').on({
                     click: function(){
                         btnNum = Number( $(this).text() );  //숫자로된 글자 - 숫자로변환
                        
                        startNum = (btnNum-1)*page;  //시작번호
                        endNum   = page+startNum;   //끝번호
                        
                        txt='';  //변수 초기화
                        $('.ajaxBinding').empty();  //목록 내용 모두 비운다

                         for(i=startNum; i<endNum; i++){  //0 ~ 10, 10 ~ 20, 20 ~ 30,
                            txt += '<li class="clearfix">';
                            txt += '<span>' + (cnt-i) + '</span>';
                            txt += '<span>' + b[i] + '</span>';
                            txt += '<span>' + c[i] + '</span>';
                            txt += '<span>' + d[i] + '</span>';
                            txt += '</li>';
                        }
                        $('.ajaxBinding').html( txt );

                     }
                 });

            },
            error:   function(){
                alert('AJAX 오류!!!');
            }
        });



})(jQuery);
//ajax_face_notice.js
