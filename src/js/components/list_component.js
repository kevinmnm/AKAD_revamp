import AKAD from "../ADAKNotes_revamp.js";
import custom_title, { custome_title_hide } from "../hover_function.js";

const templater = `
    <div id='list_wrapper'>
        <div class='list_all'>All Contents
        <div class="fa fa-sort" @click='sort_icon = !sort_icon'></div>
        <div class='sort_by' @click.capture='sort($event)' v-show='sort_icon'>
            <div :class='{js_select: js_selected}'>JavaScript</div>
            <div :class='{vue_select: vue_selected}'>Vue</div>
            <div :class='{css_select: css_selected}'>CSS</div>
        </div>
        </div>

            <div 
            :key='all' 
            class='list_block' 
            v-for='all in akad_length' 
            @click='emitter($event)' 
            @mousemove='hover_func($event)'
            @mouseleave='hover_func2($event)'>
                {{ all }}
            </div>
            
    <div id='hover_el'></div>
    </div>
`

export default {
    template: templater,
    data(){
        return {
            akad: AKAD,
            sort_icon: false,
            js_selected: true,
            vue_selected: true,
            css_selected: true
        }
    },
    computed: {
        akad_length(){
            return this.akad.length;
        }
    },
    methods: {
        hover_func(e){
            custom_title(e); //Imported from another file.
        },
        hover_func2(e){
            custome_title_hide(e);
        },
        emitter(e){ //Emits block's innerHTML number.
            this.$emit('learn-emit', Number(e.target.innerHTML));
        },
        sort(e){
            let x = e.target;
            let js_blocks = document.querySelectorAll('.js');
            let vue_blocks = document.querySelectorAll('.vue');
            let css_blocks = document.querySelectorAll('.css');

            if (x.innerHTML === 'JavaScript') { //Toggle js.
                this.js_selected = !this.js_selected; //Remove shining class.
                if (this.js_selected) {
                    for (let y of js_blocks) {
                        y.style.display = 'block';
                    }
                } else {
                    for (let y of js_blocks) {
                        y.style.display = 'none';
                    }
                }
            } else if (x.innerHTML === 'Vue') { //Toggle vue.
                this.vue_selected = !this.vue_selected; //Remove shining class.
                if (this.vue_selected) {
                    for (let y of vue_blocks) {
                        y.style.display = 'block';
                    }
                } else {
                    for (let y of vue_blocks) {
                        y.style.display = 'none';
                    }
                }
            } else if (x.innerHTML === 'CSS') { //Toggle css.
                this.css_selected = !this.css_selected; //Remove shining class.
                if (this.css_selected) {
                    for (let y of css_blocks) {
                        y.style.display = 'block';
                    }
                } else {
                    for (let y of css_blocks) {
                        y.style.display = 'none';
                    }
                }
            }
        }
    },
    mounted(){
        let list_block = document.querySelectorAll('.list_block');
        for (let i=0; i<this.akad.length; i++) {
            if (this.akad[i].content === 'JS') {
                list_block[i].classList.add('js');
            } else if (this.akad[i].content === 'Vue') {
                list_block[i].classList.add('vue');
            } else if (this.akad[i].content === 'CSS') {
                list_block[i].classList.add('css');
            }
        }
    }
}
