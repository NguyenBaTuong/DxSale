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

$(document).ready(function () {
    $('.home__nav ul li ul').find('li').click(function () {
        //removing the previous selected menu state
        $('.home__nav').find('li.active').removeClass('active');
        //adding the state for this parent menu
        $(this).parents('li').addClass('active');
    });
});


// // select 
// var x, i, j, l, ll, selElmnt, a, b, c;
// x = document.getElementsByClassName("custom-select");
// l = x.length;
// for (i = 0; i < l; i++) {
//   selElmnt = x[i].getElementsByTagName("select")[0];
//   ll = selElmnt.length;
//   a = document.createElement("DIV");
//   a.setAttribute("class", "select-selected");
//   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//   x[i].appendChild(a);
//   b = document.createElement("DIV");
//   b.setAttribute("class", "select-items select-hide");
//   for (j = 1; j < ll; j++) {
//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     c.addEventListener("click", function(e) {
//         var y, i, k, s, h, sl, yl;
//         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//         sl = s.length;
//         h = this.parentNode.previousSibling;
//         for (i = 0; i < sl; i++) {
//           if (s.options[i].innerHTML == this.innerHTML) {
//             s.selectedIndex = i;
//             h.innerHTML = this.innerHTML;
//             y = this.parentNode.getElementsByClassName("same-as-selected");
//             yl = y.length;
//             for (k = 0; k < yl; k++) {
//               y[k].removeAttribute("class");
//             }
//             this.setAttribute("class", "same-as-selected");
//             break;
//           }
//         }
//         h.click();
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function(e) {
//     var select__bb = document.getElementById("select__bb");
//     select__bb.style.borderBottom = '1px solid var(--primary__color)';
//     e.stopPropagation();
//     closeAllSelect(this);
//     this.nextSibling.classList.toggle("select-hide");
//     this.classList.toggle("select-arrow-active");
//   });
// }

// function closeAllSelect(elmnt) {
//   var x, y, i, xl, yl, arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   xl = x.length;
//   yl = y.length;
//   for (i = 0; i < yl; i++) {
//     if (elmnt == y[i]) {
//       arrNo.push(i)
//     } else {
//       y[i].classList.remove("select-arrow-active");
//     }
//   }
//   for (i = 0; i < xl; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }
// // var select__bb1 = document.getElementById("select__bb");
// //     select__bb1.style.borderBottom = '1px solid red';
// document.addEventListener("click", closeAllSelect);