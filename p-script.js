document.addEventListener('scroll', () => {
    // 選擇所有的內容區域和導航按鈕
    const boxes = document.querySelectorAll('.box');
    const navButtons = document.querySelectorAll('#box-nav a');

    // 創建 IntersectionObserver 實例
    const observer = new  IntersectionObserver((entries) => {
        let activeButton = null;
        let maxTop = -Infinity; // 儲存最上方的 `.box` 元素的 `top` 值

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const rect = entry.boundingClientRect;
                if (rect.top > maxTop) { // 如果這個元素更接近視窗頂部
                    maxTop = rect.top;
                    const id = entry.target.getAttribute('id');
                    const buttonNumber = {
                        ar: 1,
                        edu: 2,
                        ea: 3,
                        ei: 4
                    }[id];
                    if (buttonNumber) {
                        activeButton = document.querySelector(`#button${buttonNumber}`);
                    }
                }
            }
        });

        // 移除所有按鈕的 active 狀態
        navButtons.forEach(button => button.classList.remove('active'));

        // 設置對應的 active 按鈕
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }, {
        root: null,       // 使用視窗作為根元素
        rootMargin: '0px',
        threshold: 0.6    // 當目標元素的 50% 可見時觸發
    });

    // 觀察所有內容區域
    boxes.forEach(box => observer.observe(box));
});

function changemenu_open_or_close() {
    var element = document.getElementById('list-mobile-div');
    var button = document.getElementById('mobile-changemenu-button');
    var icon = document.getElementById('menubuttonIcon');
    var classname = document.getElementById('navbox');
    var element2 = document.getElementById('nav-mobile-ul');
    var igbutton = document.getElementById('mobile-link_to_ig-nav-button-div')
    const path = document.getElementById("menubuttonIcon");

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

