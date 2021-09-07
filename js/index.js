
// function nav__son(e) {
//     var id = e.id;
//     var id__get = document.getElementById(id);
//     var bgr = document.getElementById(id);

//     var idtd = id.split('__');
//     var element = document.getElementById(idtd[1]);

//     var idson = id.split('__');
//     var son__nav = document.getElementById(idson[2]);

//     var idup = id.split('__');
//     var title__up = document.getElementById(idup[3]);

//     var iddown = id.split('__');
//     var title__down = document.getElementById(iddown[4]);

//     if (element.checked == false) {
//         son__nav.style.display = 'block';
//         title__up.style.display = 'block';
//         title__down.style.display = 'none';
//     } else {
//         son__nav.style.display = 'none';
//         title__up.style.display = 'none';
//         title__down.style.display = 'block';
//     } 
// }

// function nav__son(e) {
//     var id = e.id;
//     var id__get = document.getElementById(id);
//     var bgr = document.getElementById(id);

//     var idtd = id.split('__');
//     var element = document.getElementById(idtd[1]);

//     var idson = id.split('__');
//     var son__nav = document.getElementById(idson[2]);

//     var idup = id.split('__');
//     var title__up = document.getElementById(idup[3]);

//     var iddown = id.split('__');
//     var title__down = document.getElementById(iddown[4]);
//     var home__nav__item = document.getElementsByClassName('home__nav-item')[i];
//     // for(var i = 1; i <= 9; i++) {
//     //     console.log(i);
//     // }
//     console.log(home__nav__item)

//     if (element.checked == false) {
//         // son__nav.style.display = 'block';
//         // title__up.style.display = 'block';
//         // title__down.style.display = 'none';
//         home__nav__item.classList.add('active');
//     } else {
//         // son__nav.style.display = 'none';
//         // title__up.style.display = 'none';
//         // title__down.style.display = 'block';
//         home__nav__item.classList.remove('active');
//     } 
// }

function reset(){
    son__nav.style.display = 'block';
    title__up.style.display = 'block';
    title__down.style.display = 'none';
}
