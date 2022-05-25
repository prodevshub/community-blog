//  function for header animation
function sticky() {
    const header = document.querySelector('.header');
    const stick = header.offsetTop;
    if (window.pageYOffset > stick) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}
export default sticky;
