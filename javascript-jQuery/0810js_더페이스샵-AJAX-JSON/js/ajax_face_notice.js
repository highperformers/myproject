(function($){

    var txt = '';


    $.ajax({
        url:'./data/face_notice.json',
        //type:'', 생략
        dataType:'JSON',
        //data:{}, 생략
        success: function(data){

            //data 자료를 반복해서 처리
            $.each(data.notice, function(index, object){

                txt += '<li class="clearfix">'; // 플로팅을 멈추기 위해 "clearfix"
                txt += '<span>' + object.번호 + '</span>';
                txt += '<span>' + object.구분 + '</span>';
                txt += '<span>' + object.제목 + '</span>';
                txt += '<span>' + object.날짜 + '</span>';
                txt += '</li>';

            });

            
           

            $('.ajaxBinding').html( txt );

                

        },
        error:{
            
        }
    });

})(jQuery);
