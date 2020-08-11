
//On mouse enter
function hover_title(event) {
    let el = document.querySelector('.hover_element');
    
    el.style.left = event.pageX + 20 + 'px';
    el.style.top = event.pageY + 20 + 'px';

    if (event.target.classList.contains('js')) {
        let x = Number(event.target.innerHTML) - 1;
        el.innerHTML = this.akad[x].title;
    }
}
