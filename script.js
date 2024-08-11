
// 版本資訊記憶儲存
document.addEventListener('DOMContentLoaded', function() {
    const messageboxsiteinformation = document.getElementById('messagebox-siteinformation');
    const close_messagebox_siteinformationbutton = document.getElementById('close_messagebox_siteinformation-button');
    console.log(localStorage.getItem('messageClosed'))
  
    // 檢查LocalStorage中的標記
    if (localStorage.getItem('messageClosed') === 'true' || window.innerWidth < 550) {
        messageboxsiteinformation.style.display = 'none';
    }

    if (localStorage.getItem('messageClosed') === 'true' || window.innerWidth < 550) {
        var button = document.getElementById('closemessage')
        var box = document.getElementById('messagebox')
        box.classList.remove('show')
        box.classList.add('hidden')
    }
  
    // 關閉按鈕的點擊事件
    close_messagebox_siteinformationbutton.addEventListener('click', function() {
        messageboxsiteinformation.style.display = 'none';
        // 在LocalStorage中設定標記
        localStorage.setItem('messageClosed', 'true');
    });
});


document.addEventListener('click', function(){
    var button = document.getElementById('closemessage')
    var box = document.getElementById('messagebox')
    box.classList.remove('show')
    box.classList.add('hidden')
    localStorage.setItem('messageClosed', 'true');
})

function changemenu_open_or_close() {
    var element = document.getElementById('list-mobile-div');
    var button = document.getElementById('mobile-changemenu-button');
    var icon = document.getElementById('menubuttonIcon');
    var classname = document.getElementById('navbox');
    var element2 = document.getElementById('nav-mobile-ul');
    var igbutton = document.getElementById('mobile-link_to_ig-nav-button-div')
    const path = document.getElementById("menubuttonIcon");
    const body = document.querySelector('body')

    if (element.classList.contains('list-mobile-div-hidden-b')) {
        classname.classList.remove('navbox-close-menu-b');
        element.classList.remove('list-mobile-div-hidden-b');
        element.classList.add('list-mobile-div-show-b');
        classname.classList.add('navbox-open-menu-b');
        igbutton.classList.remove('igbutton-show')
        igbutton.classList.add('igbutton-hidden')
        setTimeout(function(){
            element2.classList.remove('nav-mobile-ul-hidden');
            element2.classList.add('nav-mobile-ul-show');
        },200)
        body.classList.add('overflow')
        console.log('完成')
        
    } else {
        element2.classList.remove('nav-mobile-ul-show');
        element2.classList.add('nav-mobile-ul-hidden');
        setTimeout(function(){
            element.classList.remove('list-mobile-div-show-b');
            classname.classList.remove('navbox-open-menu-b');
            element.classList.add('list-mobile-div-hidden-b');
            classname.classList.add('navbox-close-menu-b');    
        },200)
        igbutton.classList.remove('igbutton-hidden')
        igbutton.classList.add('igbutton-show')
        body.classList.remove('overflow')
        console.log('完成')
    }
}

let isMenuOpen = false;
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    const menusvg = document.getElementById('menusvg');
    menusvg.classList.toggle('menuopen');
  
}

function checkScreenWidth(){
    const element = document.getElementById('navbox')
    const element2 = document.getElementById('list-mobile-div')
    const menusvg = document.getElementById('menusvg');
    const messageboxsiteinformation = document.getElementById('messagebox-siteinformation');


    if (window.innerWidth > 770 && element.classList.contains('navbox-open-menu-b'))  {
        element.classList.remove('navbox-open-menu-b')
        element.classList.add('navbox-hidden-menu-b')
        element2.classList.remove('list-mobile-div-show-b')
        element2.classList.add('list-mobile-div-hidden-b')
        menusvg.classList.remove('menuopen');
    }

}

checkScreenWidth()
window.addEventListener('resize', checkScreenWidth);
window.addEventListener('load', checkScreenWidth);

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    console.log('已按下')
}


document.addEventListener('scroll', function(){
    const box2 = document.getElementById('main_section-2')
    const header = document.getElementById('navbox')
    const rect = box2.getBoundingClientRect()
    console.log(window.innerHeight)
    console.log(rect.top)
    if (rect.top < window.innerHeight) {
        header.classList.add('active')
        console.log('完成')
    } else {
        header.classList.remove('active')
    }
})