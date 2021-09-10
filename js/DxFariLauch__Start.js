
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