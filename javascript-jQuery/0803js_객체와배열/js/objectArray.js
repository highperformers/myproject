(function(){

    //객체 생성 방식 2가지
    // var student = new Object(); //생성자 방식
    // var student = {}  //리터럴 방식

    // 객체변수선언(var) 객체이름(student) = {
    //     프로퍼티(property 속성): 벨류(Value 속성값),
    //     프로퍼티(property 속성): 벨류(Value 속성값),
    //     .  
    //     . 
    //     .
    // }



    var student = {
        init: function(){ //최초의 한번 실행하는 객체 함수
            student.sum();
            student.avg();
        },
        school: '더조은컴퓨터대학교',
        name: '문선종',
        hak: 4,
        tel: '010-7942-5305',
        address: '경기도 고양시 일산서구 주엽동 강선마을 1408동',
        sungjuk: {
            html5:99, 
            css3:98, 
            js:100
        },
        sum: function(){
            var x = 0, y = 0;
            x = student.sungjuk.html5+student.sungjuk.css3+student.sungjuk.js;
            console.log( '총점은' + x );
            y = x/3;
            console.log('평균은' + y );
            console.log('이름은' + this.name);
            console.log('주소는' + this.address);
            console.log('전화번호는' + this.tel);
        },
        avg: function(){
            this.sum();
        }
    }
    
    
    //객체의 출력 및 처리
    console.log( student.school ); //학생의 객체와.속성(value)을 가져온다
    console.log( student.name ); //학생의 객체와.속성(value)을 가져온다
    console.log( student.sungjuk ); //학생의 객체와.속성(value)을 가져온다
    console.log( student.sungjuk.html5 ); //학생의 객체와.속성(value)을 가져온다
    //console.log( student.sum() ); //학생의 객체와.속성(value)을 가져온다

    student.init(); //전체 프로그램을 실행하는데 사용하는 이름



})();