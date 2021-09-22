
function dxf__Start__modal() {
    var modal__dxf__start__input = document.getElementById('modal__dxf__start__input');
    var modal__dxf__start__note = document.getElementById('modal__dxf__start__note');
    var modal__dxf__start__note__overlay = document.getElementById('modal__dxf__start__note__overlay');
    var modal__dxf__start__note__body = document.getElementById('modal__dxf__start__note__body');

    if (modal__dxf__start__input.checked == 0) {
        modal__dxf__start__note.style.display = 'block';
        modal__dxf__start__note.style.display = 'flex'
        modal__dxf__start__note__overlay.style.display = 'block';
        modal__dxf__start__note__body.style.display = 'block';
    } else {
        modal__dxf__start__note.style.display = 'none';
        modal__dxf__start__note__overlay.style.display = 'none';
        modal__dxf__start__note__body.style.display = 'none';
    }
}

function dxf__start__check__root() {
    if($('#dxfs__root__check10').is(":checked") == false) {
        $('.DxFarilxDash__start-root-input').each(function(){ this.checked = false; });
        $('#dxf__start__btn').removeClass('active');
    } else {
        $('.DxFarilxDash__start-root-input').each(function(){ this.checked = true; });
        $('#dxf__start__btn').addClass('active');
    }
}

function dxf__start__sencond () {
    var dxf__start__first = document.getElementById('dxf__start__first');
    var modal__dxf__start__note = document.getElementById('modal__dxf__start__note');
    var dxf__start__second = document.getElementById('dxf__start__second');
    var dxf__start__btn = document.getElementById('dxf__start__btn');

    if (dxf__start__btn.classList.contains('active')) {
        dxf__start__first.style.display = 'none';
        modal__dxf__start__note.style.display = 'none';
        dxf__start__second.style.display = 'block';
    }
}

function showximport(e) {
    var id = e.id;
    var son = document.getElementById(id+'__son');
    var hot = document.getElementById(id+'__hot');
    
    if (son.classList.contains('none')) {
        showximport__reset();
        son.classList.remove('none');
    } 
    else {
        son.classList.add('none');
    }
}

function showximport__reset() {
    var showximport__class = document.getElementsByClassName('DxFarilxStart__import-son');

    for (var i = 0; i < showximport__class.length; i++) {
        showximport__class[i].classList.add('none');
    }
}

function to() {
    var btn = document.getElementById('DxFarilxStart__edit');
    var box = document.getElementById('form__control');
    var show__table = document.getElementById('show__table');

    btn.onclick = function() {
        var st1 = document.getElementById('DxFarilxStart__import__1__son');
        var st2 = document.getElementById('DxFarilxStart__import__8__son');
        st1.classList.remove('none');
        st2.classList.add('none');
        show__table.style.display = 'none';
        box.scrollIntoView();
    }
}
to();

function btn__next(e) {
    var id = e.id;
    var box = id.split('__');
    var box__get = document.getElementById(box[0]+'__'+box[1]+'__'+box[2]+'__son');
    var idnext = Number(box[2]) + 1;
    var box__next = document.getElementById(box[0]+'__'+box[1]+'__'+idnext+'__son');
    
    if (!box__get.classList.contains('none')) {
        box__get.classList.add('none');
        box__next.classList.remove('none');
    }
}

function btn__prev(e) {
    var id = e.id;
    var box = id.split('__');
    var box__get = document.getElementById(box[0]+'__'+box[1]+'__'+box[2]+'__son');
    var idprev = Number(box[2]) - 1;
    var box__prev = document.getElementById(box[0]+'__'+box[1]+'__'+idprev+'__son');
    
    if (!box__get.classList.contains('none')) {
        box__get.classList.add('none');
        box__prev.classList.remove('none');
    }
}

function show__table() {
    var btn = document.getElementById('DxFarilxStart__import__8__btn');
    var show__table = document.getElementById('show__table');

    btn.onclick =  function () {
        show__table.style.display = 'block';
    }
}
show__table();