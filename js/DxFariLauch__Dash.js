function stt__btn() {
    var box__body = document.getElementById('box__body');
    var stt__btn = document.getElementById('stt__btn');
    box__body.onmouseover = function() {
        box__body.style.opacity = '0.7';
        stt__btn.innerHTML = 'Click for deails';
    }
    box__body.onmouseout = function() {
        box__body.style.opacity = '1';
        stt__btn.innerHTML = 'Launch Success';
    }
}
stt__btn();

function copy__qr() {
    var copyText = document.getElementById('qr__copy');
    var notify__qr = document.getElementById('notify__qr');
    copyText.select();
    document.execCommand('copy');
    console.log('Copied Text');
    notify__qr.style.display = 'block';
    setTimeout(function(){
        notify__qr.style.display = 'none';
    }, 50);
}

function check__ac() {
    var root__check = document.getElementById('root__check');
    var btn__active = document.getElementById('btn__active');

    console.log(root__check)
    if(root__check.checked == 0) {
        btn__active.classList.add('active');
    } else {
        btn__active.classList.remove('active');
    }
}

function modal__ac() {
    var modal__box = document.getElementById('modal__box');
    var modal__note = document.getElementById('modal__note');
    var modal__note__overlay =  document.getElementById('modal__note__overlay');
    var modal__note__body = document.getElementById('modal__note__body');
    var modal__note__content = document.getElementById('modal__note__content');

    if (modal__box.checked == 0) {
        alert('nhận')
        modal__note.style.display =  'flex';
        modal__note__overlay.style.display = 'block';
        modal__note__body.style.display ='block';
    } else {
        alert('ko nhận');
        modal__note.style.display =  'none';
        modal__note__overlay.style.display = 'none';
        modal__note__body.style.display ='none';
    }
}