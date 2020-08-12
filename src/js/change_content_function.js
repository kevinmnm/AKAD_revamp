//import learned_component from "./components/learned_component.js";
import akad from "./ADAKNotes_revamp";

let parentValue = this.pv_new;
export default function combined(e, parentValue){
    let x = e.target;
    let next = document.querySelector('.learned_next');
    let previous = document.querySelector('.learned_previous');

    if (x === previous) {
        if (parentValue === 0) {return}
        let dv = document.querySelector('.learned_content');

        if (dv.classList.contains('animate__bounceInRight')) {
            dv.classList.remove('animate__bounceInRight');
        }

        dv.classList.add('animate__bounceOutRight');
        setTimeout(()=>{
            dv.classList.remove('animate__bounceOutRight');
            dv.classList.add('animate__bounceInLeft');
            parentValue--;
        },200);
    
    } else if (x === next) {
        if (parentValue === akad.length - 1) {return}
        let dv = document.querySelector('.learned_content');
    
        if (dv.classList.contains('animate__bounceInLeft')) {
            dv.classList.remove('animate__bounceInLeft');
        }

        dv.classList.add('animate__bounceOutLeft');
        setTimeout(()=>{
            dv.classList.remove('animate__bounceOutLeft');
            dv.classList.add('animate__bounceInRight');
            parentValue++;
        },200);
    }
}

// function prev(e, prev) {
//     if (this.parentValue === 0) {return}
//     let dv = document.querySelector('.learned_content');

//     if (dv.classList.contains('animate__bounceInRight')) {
//         dv.classList.remove('animate__bounceInRight');
//     }

//     dv.classList.add('animate__bounceOutRight');
//     setTimeout(()=>{
//         dv.classList.remove('animate__bounceOutRight');
//         dv.classList.add('animate__bounceInLeft');
//         this.parentValue--;
//     },200);
// }

// function next() {
//     if (this.parentValue === this.akad.length - 1) {return}
//     let dv = document.querySelector('.learned_content');
    
//     if (dv.classList.contains('animate__bounceInLeft')) {
//         dv.classList.remove('animate__bounceInLeft');
//     }

//     dv.classList.add('animate__bounceOutLeft');
//     setTimeout(()=>{
//         dv.classList.remove('animate__bounceOutLeft');
//         dv.classList.add('animate__bounceInRight');
//         this.parentValue++;
//     },200);
// }