var nav = document.querySelector('nav');
var button = document.querySelector('button');

window.addEventListener('scroll', () => {
    console.log(button.ariaExpanded);
    if (window.pageYOffset > 30) {
        nav.style.backgroundColor = "rgba(52, 58, 64, 0.9)"
    } else if (button.ariaExpanded == 'false') {
        nav.style.backgroundColor = "transparent";
    }
});

button.addEventListener('click', () => {
    if (window.pageYOffset <= 30) {
        if (button.ariaExpanded == 'true') {
            nav.style.backgroundColor = "rgba(52, 58, 64, 0.9)"
        } else {
            nav.style.backgroundColor = "transparent"
        }
    }
});