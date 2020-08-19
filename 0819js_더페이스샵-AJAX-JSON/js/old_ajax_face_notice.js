(function($){
  
    var txt         = '';
    var tab         = 0; //전체공지 탭 0번
    var cnt         =  0; //전체공지 카운트
    var scnt         =  -1; //쇼핑공지 카운트
    var bcnt         =  -1; //브랜드소식 카운트
    var a           = []; //전체공지 all : a
    var s           = []; //쇼핑공지 shopping : s
    var b           = []; //브랜드소식 brand : b
    var pages       = 7; //페이지당 10줄씩
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

                if( obj.구분=='쇼핑'  ){
                    scnt++; //0 1 2 3 
                    s[scnt] = []; //s[0]=[]  //2차원 배열
                    s[scnt][0] = scnt+1;
                    s[scnt][1] = obj.구분;
                    s[scnt][2] = obj.제목;
                    s[scnt][3] = obj.날짜;
                }

                if( obj.구분=='브랜드'  ){
                    bcnt++;
                    b[bcnt] = [];
                    b[bcnt][0] = bcnt+1;
                    b[bcnt][1] = obj.구분;
                    b[bcnt][2] = obj.제목;
                    b[bcnt][3] = obj.날짜;

                }

            });

            cnt = a.length; //200개 전체고잊
            scnt = s.length; //150개 쇼핑공지
            bcnt = b.length; //50개 브랜드소식
            


/////////////////////////////////////////////////////////////////////

        function allBindFn(){  //전체공지
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


            //페이지버튼 바인딩 위치
            //페이지번호 버튼 출력 바인딩
            //총레코드 200(a.length)/10(pages) : 0  ~ 20미만
            txt +='<div>';
            for(i=0; i<a.length/pages; i++){ //0 ~ 20
                txt +='<span><a href="javascript:void(0)" class="pageBtn">' + (i+1) + '</a></span>'
            }
            txt +='</div>';

            $('.pageBtn-wrap').html(txt);
            txt = '';


        } //함수 끝

        allBindFn(); //all 바인딩 함수 처음에 로딩시 실행

////////////////////////////////////////////////////////////////////////////

        
        function sBindFn(){ //쇼핑공지
            //페이지 번호 클릭한 경우 예를 들어서 버튼 번호 변경 시물레이션
            //페이지번호가 클릭한 페이지번호로 전달 됩니다.
            startRecord = (pageBtn-1)*pages;   //시작번호(레코드)   0 10 20 30 40 ...
            endRecord   = startRecord + pages; //끝번호(레코드)    10 20 30 40 50

            for(i=startRecord; i<endRecord; i++){
            //for(i in a){ //0 ~199 배열 반복문 간략하게 표현
                txt += '<li class="clearfix">'; //주의: 작은 따옴표 안에 큰따옴표 인용부호
                txt += '<span>'+ (scnt-i) +'</span>';
                txt += '<span>'+ s[i][1] +'</span>';
                txt += '<span>'+ s[i][2] +'</span>';
                txt += '<span>'+ s[i][3] +'</span>';
                txt += '</li>';
            }
        
            $('.ajaxBinding').html(txt);
            txt='';
        
        
            //페이지버튼 바인딩 위치
            //페이지번호 버튼 출력 바인딩
            //총레코드 200(a.length)/10(pages) : 0  ~ 20미만
            txt +='<div>';
            for(i=0; i<s.length/pages; i++){ //0 ~ 20
                txt +='<span><a href="javascript:void(0)" class="pageBtn">' + (i+1) + '</a></span>'
            }
            txt +='</div>';
        
            $('.pageBtn-wrap').html(txt);
            txt = '';
        
        
        } //함수 끝





        function bBindFn(){ //브랜드소식
            //페이지 번호 클릭한 경우 예를 들어서 버튼 번호 변경 시물레이션
            //페이지번호가 클릭한 페이지번호로 전달 됩니다.
            startRecord = (pageBtn-1)*pages;   //시작번호(레코드)   0 10 20 30 40 ...
            endRecord   = startRecord + pages; //끝번호(레코드)    10 20 30 40 50

            for(i=startRecord; i<endRecord; i++){
            //for(i in a){ //0 ~199 배열 반복문 간략하게 표현
                txt += '<li class="clearfix">'; //주의: 작은 따옴표 안에 큰따옴표 인용부호
                txt += '<span>'+ (bcnt-i) +'</span>';
                txt += '<span>'+ b[i][1] +'</span>';
                txt += '<span>'+ b[i][2] +'</span>';
                txt += '<span>'+ b[i][3] +'</span>';
                txt += '</li>';
            }
        
            $('.ajaxBinding').html(txt);
            txt='';
        
        
            //페이지버튼 바인딩 위치
            //페이지번호 버튼 출력 바인딩
            //총레코드 200(a.length)/10(pages) : 0  ~ 20미만
            txt +='<div>';
            for(i=0; i<b.length/pages; i++){ //0 ~ 20
                txt +='<span><a href="javascript:void(0)" class="pageBtn">' + (i+1) + '</a></span>'
            }
            txt +='</div>';
        
            $('.pageBtn-wrap').html(txt);
            txt = '';
        
        
        } //함수 끝










            //여기부터는 공통

            //페이지 버튼 클릭 이벤트
            //클릭시 해당 페이지 목록만 10개 출력
            //추가된 버튼이 클릭이벤트가 안될때
            //이렇게 코딩 그러면 클릭이벤트 잘 됩니다.
            $(document).on('mouseenter', '.pageBtn', function(){

                $('.pageBtn').on({
                    click:  function(){
                        
                        
                       //event.preventDefault();  //새로고침 기능을 막는다

                       // pageBtn = parseInt( $(this).text() ); //숫자로 페이지번호 저장
                        pageBtn = Number( $(this).text() ); //숫자로 페이지번호 저장

                        if(tab==0){
                            allBindFn(); //전체공지
                        }
                        else if(tab==1){
                            sBindFn(); //쇼핑공지
                        }
                        else if(tab==2){
                            bBindFn(); //브랜드소식
                        }

                        
                        
                       
                    }
                });
            });



            


            //이전페이지 버튼 >>
            $('.pagePrevBtn').on({
                click:  function(){
                    pageBtn--;
                    if(pageBtn<1){
                        pageBtn=1;
                    }
                    
                    if(tab==0){
                        allBindFn(); //전체공지
                    }
                    else if(tab==1){
                        sBindFn(); //쇼핑공지
                    }
                    else if(tab==2){
                        bBindFn(); //브랜드소식
                    }
                }
            });

            //다음페이지 버튼 >>
            $('.pageNextBtn').on({
                click:  function(){
                    pageBtn++;
                    
                                        
                                  
                    
                    if(tab==0){
                        if(pageBtn>cnt/pages){ //20=200/10
                            pageBtn=cnt/pages; //20=200/10
                        }
                        allBindFn(); //전체공지
                    }
                    else if(tab==1){
                        if(pageBtn>scnt/pages){ //20=200/10
                            pageBtn=scnt/pages; //20=200/10
                        }
                        sBindFn(); //쇼핑공지
                    }
                    else if(tab==2){
                        if(pageBtn>bcnt/pages){ //20=200/10
                            pageBtn=bcnt/pages; //20=200/10
                        }
                        bBindFn(); //브랜드소식
                    }
                }
            });

            //탭버튼
            //테마별 버튼 클릭 이벤트
            //전체공지, 쇼핑공지, 브랜드소식
            // $('.noticeBtn').eq(0).on({ //전체공지
            //     click: function(){
            //         alert('전체공지');
            //     }
            // })
            // $('.noticeBtn').eq(1).on({  //쇼핑공지
            //     click: function(){
            //         alert('쇼핑공지');
            //     }
            // })
            // $('.noticeBtn').eq(2).on({  //브랜드소식
            //     click: function(){
            //         alert('브랜드소식');
            //     }
            // })


            //버튼배열 each() 메서드
            //$'('.noticeBtn').each();
            //$'('.noticeBtn').each(function(){});
            //$'('.noticeBtn').each(function(){

            //});
            
            // $('.pageBtn').each(function(){
            //     console.log( index ); //0 1 2
            // });

           
            

            $('.noticeBtn').each(function(idx){
                $(this).on({
                    click: function(){
                       
                        pageBtn = 1; //초기화 각 탭버튼의 모두 첫번째 위치가 시작점
                        tab = idx;

                        if( idx==0 ){ //전체공지
                            allBindFn(); //all 바인딩 함수 호출
                        }
                        else if( idx==1 ){ //쇼핑공지
                            sBindFn();
                        }
                        else if( idx==2 ){ //브랜드소식
                            bBindFn();
                        }

                        $('.noticeBtn').removeClass('addTab'); //모두 추가 클래스 삭제
                        $(this).addClass('addTab'); //클릭버튼에 표시
                        
                    }
                });
            });


            






        },

        error: function(){

            alert('AJAX Error!!!');

        }



    });




})(jQuery);
