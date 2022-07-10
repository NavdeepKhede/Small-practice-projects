let navigation = document.querySelector('.navigation_bar');
let toggle = document.querySelector('.toggle_btn');

toggle.onclick = function(){
    navigation.classList.toggle('active');
    // toggle.addclassList('unactive');
    toggle.classList.toggle('active');
}

// let toggleBtn = document.getElementsByClassName('toggle_btn');
// toggleBtn.onclick = function(){
//     toggleBtn.classList.toggle('unactive');
// }