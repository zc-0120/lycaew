
document.addEventListener('DOMContentLoaded', () => {
    const buttons1 = document.querySelectorAll('.ar1-contentbtn');
    const buttons2 = document.querySelectorAll('.ar2-contentbtn');
    const buttons3 = document.querySelectorAll('.ar3-contentbtn');
    const contentContainer1 = document.getElementById('content-container1');
    const contentContainer2 = document.getElementById('content-container2');
    const contentContainer3 = document.getElementById('content-container3');

    const underline2 = document.getElementById('underline2');
    const underline3 = document.getElementById('underline3');
    const containers = document.querySelectorAll('.politicbox')

    // 內容對象
    const content = {
        ar11: '<h2>政見簡介與說明</h2><p>我們發現現在的學校官網不利於行動裝置使用者使用，就算是使用電腦設備，也很難找到自己所需的資訊，因此我們想要建置<b>學生會網站以及LINE官方帳號機器人</b>，透過這些系統，讓學生們可以更容易的接收與查詢自己所需的資料。</p>',
        ar12: '<h2>政見執行方式</h2>',
        ar13: '<h2>附件</h2><p>目前無任何附件</p>',
        ar21: '<h2>政見簡介與說明</h2><p>為了面對未來合作社倒閉的趨勢，我們推出兩大政策來預防學生在學校餓肚子，此政策為第一項政策即<b>爭取外食</b>，實際計畫書可以查閱附件處。</p>',
        ar22: '<h2>政見執行方式</h2>',
        ar23: '<h2>附件</h2><p>目前無任何附件</p>',
        ar24: ` <h1>加入參與名單</h1>
                <form id="emailForm"  autocomplete="off">
                    <div class='emailinput' id='nameinput'>
                        <label for="name" class='inputlabel' id='name-inputlabel'>姓名</label>
                        <input class='input' type="string" id="name" name="name" required>
                        <span class='line' id='line1'></span>
                    </div>
                    <div class='emailinput' id='emailinput'>
                        <label for="email" class='inputlabel' id='inputlabel'>電子郵件 (Email)</label>
                        <input class='input' type="email" id="email" name="email" required>
                        <span class='line' id='line'></span>
                    </div>
                    <button type="button" onclick="saveEmail()" class='savebtn'>提交</button>
                </form>`,
        ar31: '<h2>政見簡介與說明</h2><p>由我們執政的學生會將會更努力於實踐學生自治，這是我們的第一步：設立學生議會，透過設立學生議會來促進會員參與率，另一方面監督學生會工作狀況，更多執行方法可詳看附件處。</p>',
        ar32: '<h2>政見執行方式</h2>',
        ar33: '<h2>附件</h2><p>目前無任何附件</p>',
    };

    const labels = {
        label1: 'label1',
        label2: 'label2',
        label3: 'label3',
    }

    function activateButton(button, container) {
        const contentId = button.getAttribute('data-content');
        const cclabel = button.getAttribute('cc');
        const buttonrect = button.getBoundingClientRect();
        const containerrect = container.getBoundingClientRect();
        const underline1 = document.getElementById('underline1');
        console.log(buttonrect.left)
        console.log(containerrect.left)

        if (cclabel == 1){
            buttons1.forEach(button => {
                button.classList.remove('active')
            })
            button.classList.add('active')
            underline1.style.transform = `translateX(${buttonrect.left - containerrect.left}px)`;
            underline1.style.setProperty('width', `${buttonrect.width}px`);
        }

        if (cclabel == 2){
            buttons2.forEach(button => {
                button.classList.remove('active')
            })
            button.classList.add('active')
            underline2.style.transform = `translateX(${buttonrect.left - containerrect.left}px)`;
            underline2.style.setProperty('width', `${buttonrect.width}px`);
        }

        if (cclabel == 3){
            buttons3.forEach(button => {
                button.classList.remove('active')
            })
            button.classList.add('active')
            underline3.style.transform = `translateX(${buttonrect.left - containerrect.left}px)`;
            underline3.style.setProperty('width', `${buttonrect.width}px`);
        }
       
        updateContent(contentId, button);
    }

    function updateContent(contentId, button) {
        const cclabel = button.getAttribute('cc');
        if (cclabel == 1){
            contentContainer1.innerHTML = content[contentId] || '<p>內容未找到。</p>';
        } else if (cclabel == 2){
            contentContainer2.innerHTML = content[contentId] || '<p>內容未找到。</p>';
        } else if (cclabel == 3){
            contentContainer3.innerHTML = content[contentId] || '<p>內容未找到。</p>';
        }
    }

    const firstButton1 = buttons1[0]
    const container1 = containers[0]
    activateButton(firstButton1,container1);
    const firstButton2 = buttons2[0]
    const container2 = containers[1]
    activateButton(firstButton2,container2);
    const firstButton3 = buttons3[0]
    const container3 = containers[2]
    activateButton(firstButton3,container3);
    // 頁面加載時顯示第一個標籤的內容


    // 為所有按鈕設置點擊事件
    buttons1.forEach(button => {
        button.addEventListener('click', () => {
            const container1 = containers[0]
            activateButton(button, container1);
        });
    });

    buttons2.forEach(button => {
        button.addEventListener('click', () => {
            const container2 = containers[1]
            activateButton(button, container2);
        });
    });

    buttons3.forEach(button => {
        button.addEventListener('click', () => {
            const container3 = containers[2]
            activateButton(button, container3);
        });
    });
});

