let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

window.addEventListener("scroll", function(){
    const scroll = document.getElementById("scroll-up");
    if(window.scrollY > 100){
        scroll.classList.add("show-scroll");
        scroll.style.display = 'block';

    }
    else{
        scroll.classList.remove("show-scroll");
        scroll.style.display = 'none';
    } 
})

// Lấy tất cả các link trong navbar
const navLinks = document.querySelectorAll('.navlist a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Xóa class 'active' từ tất cả các link
        navLinks.forEach(link => link.classList.remove('active'));

        // Thêm class 'active' vào link được nhấp
        this.classList.add('active');
    });
});


