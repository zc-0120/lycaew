document.addEventListener('scroll', () => {
    // 選擇所有的內容區域和導航按鈕
    const boxes = document.querySelectorAll('.box');
    const navButtons = document.querySelectorAll('#box-nav button');

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
        threshold: 0.3
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

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    console.log('已按下')
}


let lastScrollTop = 0;
const scrollButton = document.getElementById('button5');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop < lastScrollTop) {
        // 向上滚动时显示按钮
        scrollButton.classList.remove('hidden')
        setTimeout(() => {
            scrollButton.classList.remove('a')
        }, 100)
        
    } else {
        // 向下滚动时隐藏按钮
        setTimeout(() => {
            scrollButton.classList.add('a')
        }, 100)
        scrollButton.classList.add('hidden')
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 避免负值
});

window.addEventListener('scroll', function(){
    // 获取元素
    const introbox = document.getElementById('introbox');

    // 获取 introbox 的位置和大小
    const introrect = introbox.getBoundingClientRect();

    // 检查元素是否在视窗内
    
    if (introrect.top <= 0) {
        introbox.classList.add('active');
    } else if (introbox.classList.contains('active')) {
        introbox.classList.remove('active');
    }
})

window.addEventListener('load', function(){
    // 获取元素
    const introbox = document.getElementById('introbox');

    // 获取 introbox 的位置和大小
    const introrect = introbox.getBoundingClientRect();

    // 检查元素是否在视窗内
    
    if (introrect.top <= 0) {
        introbox.classList.add('active');
    } else if (introbox.classList.contains('active') && introbox.classList.contains('active')) {
        introbox.classList.remove('active');
    }
})

//ar1
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.ar1-contentbtn');
    const contentContainer = document.getElementById('content-container1');

    // 內容對象
    const content = {
        ar11: '<h2>政見簡介與說明</h2><p>我們發現現在的學校官網不利於行動裝置使用者使用，就算是使用電腦設備，也很難找到自己所需的資訊，因此我們想要建置<b>學生會網站以及LINE官方帳號機器人</b>，透過這些系統，讓學生們可以更容易的接收與查詢自己所需的資料。</p>',
        ar12: '<h2>政見執行方式</h2>',
        ar13: '<h2>附件</h2><p>目前無任何附件</p>',
    };

    function activateButton(button) {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const contentId = button.getAttribute('data-content');
        updateContent(contentId);
    }

    function updateContent(contentId) {
        contentContainer.innerHTML = content[contentId] || '<p>內容未找到。</p>';
    }

    const firstButton = buttons[0];
        activateButton(firstButton);
    // 頁面加載時顯示第一個標籤的內容


    // 為所有按鈕設置點擊事件
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            activateButton(button);
        });
    });
});

//ar2
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.ar2-contentbtn');
    const contentContainer = document.getElementById('content-container2');

    // 內容對象
    const content = {
        ar21: '<h2>政見簡介與說明</h2><p>為了面對未來合作社倒閉的趨勢，我們推出兩大政策來預防學生在學校餓肚子，此政策為第一項政策即<b>爭取外食</b>，實際計畫書可以查閱附件處。</p>',
        ar22: '<h2>政見執行方式</h2>',
        ar23: '<h2>附件</h2><p>目前無任何附件</p>',
    };

    function activateButton(button) {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const contentId = button.getAttribute('data-content');
        updateContent(contentId);
    }

    function updateContent(contentId) {
        contentContainer.innerHTML = content[contentId] || '<p>內容未找到。</p>';
    }

    const firstButton = buttons[0];
        activateButton(firstButton);
    // 頁面加載時顯示第一個標籤的內容


    // 為所有按鈕設置點擊事件
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            activateButton(button);
        });
    });
});

//ar3
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.ar3-contentbtn');
    const contentContainer = document.getElementById('content-container3');

    // 內容對象
    const content = {
        ar31: '<h2>政見簡介與說明</h2><p>由我們執政的學生會將會更努力於實踐學生自治，這是我們的第一步：設立學生議會，透過設立學生議會來促進會員參與率，另一方面監督學生會工作狀況，更多執行方法可詳看附件處。</p>',
        ar32: '<h2>政見執行方式</h2>',
        ar33: '<h2>附件</h2><p>目前無任何附件</p>',
    };

    function activateButton(button) {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const contentId = button.getAttribute('data-content');
        updateContent(contentId);
    }

    function updateContent(contentId) {
        contentContainer.innerHTML = content[contentId] || '<p>內容未找到。</p>';
    }

    const firstButton = buttons[0];
        activateButton(firstButton);
    // 頁面加載時顯示第一個標籤的內容


    // 為所有按鈕設置點擊事件
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            activateButton(button);
        });
    });
});