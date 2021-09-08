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

// nav__
function compact() {
    var check = document.getElementById('slider');
    var element = document.getElementById('sliderxbox');
    var title = document.getElementById('home__nav__i4');
    var s = document.getElementsByClassName('home__nav-item');
    var stt = document.getElementsByClassName('home__nav-item-title-icon');
    var nav__scroll = document.getElementById('nav__scroll');
    var body = document.getElementById('home__content');

    if (check.checked == 0) {
        element.classList.add('compact');
        body.classList.add('compact');
        for (let index = 1; index <= s.length; index++) {
            document.getElementById('name'+index).style.display = 'none';
        }
        for (let index = 1; index <= stt.length; index++) {
            document.getElementById('stt'+index).style.display = 'none';
        }
        title.style.display = 'none';
        nav__scroll.style.padding = '100px 0 0 0';
    } else {
        body.classList.remove('compact');
        element.classList.remove('compact');
        for (let index = 1; index <= s.length; index++) {
            document.getElementById('name'+index).style.display = 'unset';
        }
        for (let index = 1; index <= stt.length; index++) {
            document.getElementById('stt'+index).style.display = 'unset';
        }
        title.style.display = 'flex';
        nav__scroll.style.padding = 'unset';
    }

}
