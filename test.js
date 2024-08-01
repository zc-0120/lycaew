const sections = document.querySelectorAll('.box');
const navButtons = document.querySelectorAll('.box-nav a');

function updateNavButton(activeButton) {
    navButtons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}

const observer = new IntersectionObserver((entries) => {
    let activeButton = null;
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const targetButton = document.querySelector(`#navButton${id.charAt(0).toUpperCase() + id.slice(1)}`);
            activeButton = targetButton;
        }
    });

    if (activeButton) {
        updateNavButton(activeButton);
    }
}, {
    root: null, // 使用視窗作為根元素
    threshold: 0.6 // 超過60%可見時才觸發
});

// 觀察每個部分
sections.forEach(section => {
    observer.observe(section);
});