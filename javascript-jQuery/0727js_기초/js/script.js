
function fn5(){
    alert('외부파일 함수 실행 fn5');
}

(function(){
    function fn6(){
        alert('IIFE 내에서 함수')
}
})();


(function($){
   
    //제이쿼리 표현 방법
    $('#element1').html('제이쿼리를 실행해서 선택자 #element1 내에 텍스트를 출력');
    $('.babo').html(<em style="color:blue">'클래스내에 텍스트 내용 추가')</em>;
    $('h1').html('선택자 selector 태그 요소 직접 사용')

    //자바스크립트 선택자 표현 방법과 출력 방법
    document.getElementById('element2').innerHTML = '자바스크립트 선택자';
    document.getElementsByClassName('babo')[0].innerHTML = '자바스크립트 클래스 선택자';
    document.getElementsByTagName('h1')[0].innerHTML = '선택자 태그 내용'

    var el2 = document.getElementById('element2');
            el2.innerHTML = '변수에 요소이름을 녛어두고 변수 사용 출력';

    //자바스크립트 선택자 방식 .querySelector() 방식
    doccument.querySelector('#element1').innerHTML = '선택자 querySelector 이용 아이디';
    doccument.querySelector('.babo').innerHTML = '선택자 querySelector 이용 클래스';
    doccument.querySelector('h1').innerHTML = '선택자 querySelector 이용 클래스';

    var el3 = document.querySelector('#element2');
            el3.innerHTML = 'querySelector 선택자를 변수에 저장하고 사용';


    var cnt = 0;//카운트 변수
    //증가버튼 click 이벤트
    $('.btnAdd').click(function(){
        cnt = cnt + 1;
        $('.txt1').html( cnt );
    });
    //감소버튼 click 이벤트
    $('.btnSub').click(function(){
        cnt = cnt - 1;
        $('.txt1').html( cnt );
    });

    //자바스크립트 방식
    var btnAdd = document.querySelector('.btnAdd');
    var btnSub = document.querySelector('.btnSub');
    var txt = document.querySelector('.txt1')

    .btnAdd onclick = function(){
        cnt++;  //cnt + 1;
        document.querySelector('.txt1').innerHTML = cnt;
    }

    btnAdd.addEventListener('click', function(){
        cnt++;
        txt.innerHTML = cnt;
    })
    

    .btnSub onclick = function(){
        cnt--;  //cnt - 1;
        document.querySelector('.txt1').innerHTML = cnt;
    }

    btnSub.subEventListener('click', function(){
        cnt--;
        txt.innerHTML = cnt;
    })
    

})(jQuery);


