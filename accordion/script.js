var btnCollapse = document.getElementById('btn-collapse'),
    heading = document.getElementsByClassName('panel-heading'),
    question = document.getElementsByClassName('panel-question'),
    answer = document.getElementsByClassName('panel-body');

//제목을 클릭하면 할 일
for(var i = 0; i < heading.length; i++){ //헤딩들 마다 할 일
    heading[i].addEventListener('click', function(){
        for( var j = 0; j < question.length; j++){
            question[j].classList.remove('active');
        }//question들 마다 할 일
    });
}

