function ope(e){
    var father = $('#'+e.id);
    var son = $('#'+e.id+'_son');
    var up = $('#'+e.id+'_up');
    var down = $('#'+e.id+'_down');

    if (!father.hasClass('expanded')) {
        reset();
    }

    if (son.hasClass('none')) {
        reset();
        son.removeClass('none');
        up.removeClass('none');
        down.addClass('none');
    } else {
        son.addClass('none');
        down.removeClass('none');
        up.addClass('none');
    }
}

function reset(){
    var a = document.getElementsByClassName('home__nav-son');
    var up = document.getElementsByClassName('fa-chevron-up');
    var down  = document.getElementsByClassName('fa-chevron-down ');
    for(var i = 0;i < a.length;i++){
        a[i].classList.add("none");
    }

    for(var i = 0;i < up.length;i++){
        up[i].classList.add("none");
    }

    for(var i = 0;i < down.length;i++){
        down[i].classList.remove("none");
    }
}