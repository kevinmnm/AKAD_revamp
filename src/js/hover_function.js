
export default function custom_title(e){
    const el = document.querySelector('#hover_el');
    el.style.top = e.clientY + 'px';
    el.style.left = e.clientX - 100 + 'px';

    el.innerHTML = this.akad[Number(e.target.innerHTML)-1].topic;
    console.log(Number(e.target.innerHTML)-1);
}

