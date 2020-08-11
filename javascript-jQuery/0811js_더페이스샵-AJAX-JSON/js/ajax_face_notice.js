(function($){

    var txt = '';
    var a = [];
    var b = [];
    var c = [];
    var d = [];
    var cnt = 0;
    var txt2 = '';
    var page = 10; //한 화면에 보여질 목록의 개수
    var btnNum = 0;

        $.ajax({
            url:'./data/notic200e.json',
            dataType:'JSON',
            success:function(data){
                
                $.each(data.공지사항, function(index, object){

                  a[index]=index+1;
                  b[index]=object.구분;
                  c[index]=object.제목;
                  d[index]=object.날짜;

                });

                cnt = a.length; //200 

                for(i=0; i<page; i++){
                    txt += '<li class="clearfix">';
                    txt += '<li>';
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


                //페이지 버튼 클릭 이벤트
                //해당 페이지만 노출
                //예] 페이지번호 1을 클릭한 경우 글목록 시작번호=(1-1)*page  끝번호=시작번호+page
                //                                  시작번호 = 0          끝번호 = 10
                //   페이지번호 2를 클릭한 경우  시작번호 = (2-1)*page = 10   끝번호 = 10 + page = 20
                //   페이지번호 3을 클릭한 경우  시작번호 = (3-1)*10 = 20   끝번호 = 20 + 10 - 30
                
                // $('.pageBtn').click(function(){

                // })


                $('.pageBtn').on({
                    click: function(){
                        btnNum =Number( $(this).text() ); //숫자로된 글자 - 숫자로 변화
                        
                        startNum = (btnNum-1)*page;
                        endNum = page + startNum;

                        txt = ''; //변수 초기화
                        $('.ajaxBinding').empty(); //목록 내용 모두 비운다

                        for(i=startNum; i<endNum; i++){
                            txt += '<li class="clearfix">';
                            txt += '<li>';
                            txt += '<span>' + (cnt-i) + '</span>';
                            txt += '<span>' + b[i] + '</span>';
                            txt += '<span>' + c[i] + '</span>';
                            txt += '<span>' + d[i] + '</span>';
                            txt += '</li>';
                        }
        
        
                        $('.ajaxBinding').html( txt );
                    }
                })

            },

            error:function(){
                alert('AJAX 오류!!!');
            }
        });



})(jQuery);
