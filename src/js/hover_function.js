import AKAD from "./ADAKNotes_revamp.js";

export default function custom_title(e){
    const el = document.querySelector('#hover_el');
    el.style.top = e.clientY - 50 + 'px';
    el.style.left = e.clientX - 100 + 'px';

    el.innerHTML = AKAD[Number(e.target.innerHTML)-1].topic;
    console.log(Number(e.target.innerHTML)-1);
}

