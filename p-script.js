window.addEventListener('scroll', () => {
    // 選擇所有的內容區域和導航按鈕
    const boxes = document.querySelectorAll('.box');
    const navButtons = document.querySelectorAll('#box-nav button');

    // 創建 IntersectionObserver 實例
    const observer = new  IntersectionObserver((entries) => {
        let activeButton = null;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
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

let lastScrollTop = 0;
const scrollButton = document.getElementById('button5');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const box = document.getElementById('box-nav')

    if (scrollTop < lastScrollTop) {
        // 向上滚动时显示按钮
        scrollButton.classList.remove('hidden')
        scrollButton.classList.remove('fadein')
        setTimeout(() => {
            scrollButton.classList.add('active')
        }, 200)
        
    } else {
        // 向下滚动时隐藏按钮
        scrollButton.classList.add('fadein')
        setTimeout(() => {
            scrollButton.classList.remove('active')
            scrollButton.classList.add('hidden')
        }, 200)
        
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 避免负值
});


window.addEventListener('scroll', function(){
    // 获取元素
    const introbox = document.getElementById('introbox');
    const introrect = introbox.getBoundingClientRect();
    const p = this.document.getElementById('introp')

    if (introrect.top <= 10) {
        introbox.classList.add('active');
        p.classList.add('active')
    } else if (introbox.classList.contains('active') && p.classList.contains('active') && introrect.top > 0) {
        introbox.classList.remove('active');
        p.classList.remove('active')
    }
})

window.addEventListener('click', function(){
    const inputField = document.getElementById('email');
    const label = document.getElementById('inputlabel');
    const container = document.querySelector('.emailinput');
    const line = document.getElementById('line')

    inputField.addEventListener('focus', function() {
        label.classList.add('active')
        line.classList.add('active')
    });

    inputField.addEventListener('blur', function() {
        if (inputField.value.trim() === ""){
            label.classList.remove('active')
        }
        line.classList.remove('active')
    });

    const inputField2 = document.getElementById('name');
    const label2 = document.getElementById('name-inputlabel');
    const container2 = document.querySelector('.emailinput');
    const line2 = document.getElementById('line1')

    inputField2.addEventListener('focus', function() {
        label2.classList.add('active')
        line2.classList.add('active')
    });

    inputField2.addEventListener('blur', function() {
        if (inputField2.value.trim() === ""){
            label2.classList.remove('active')
        }
        line2.classList.remove('active')
    });
})
