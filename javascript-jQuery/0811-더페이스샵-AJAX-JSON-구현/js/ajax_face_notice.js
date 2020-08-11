(function($){
    var txt = '';

        $.ajax({
            url:'./data/notic200e.json',
            dataType:'JSON',
            success: function(data){
                console.log(data);
            },
            error:   function(){
                alert('AJAX 오류!!!');
            }
        });



})(jQuery);
//ajax_face_notice.js
