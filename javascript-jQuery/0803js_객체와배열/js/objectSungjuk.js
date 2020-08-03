(function(){

    //성적(sungjuk) 객체생성
    var sungjuk = {
        init: function(){

            console.log( this.name );
            console.log( this.kor );
            console.log( this.sum() ); //합계
            console.log( this.avg() ); //평균
            console.log( '좋아하는 음식: ' + this.food );
            console.log( '배열의 4번째 데이터: ' + this.food[3] );
        },
        name: 'moonjong',
        kor: 99,
        eng: 97,
        mat: 98,
        food: ['피자', '양념치킨', '빠네스파게티', '누룽지백숙', '닭칼국수'],
        sum: function(){
            return this.kor + this.eng + this.mat;
        },
        avg: function(){
            return this.sum()/3;
           // return Math.round( this.sum()/3 );
           // return Math.floor( this.sum()/3 );
           // return Math.ceil( this.sum()/3 );
        }
    }

    sungjuk.init();  //전체실행

})();