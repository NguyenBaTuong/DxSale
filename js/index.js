function ope(e){
    var father = $('#'+e.id);
    var son = $('#'+e.id+'_son');

    if (!father.hasClass('expanded')) {
        reset();
    }

    if (son.hasClass('none')) {
        reset();
        son.removeClass('none');
    } else {
        son.addClass('none');
    }
}

function reset(){
    var a = document.getElementsByClassName('home__nav-son');
    for(var i = 0;i < a.length;i++){
        a[i].classList.add("none");
    }
}