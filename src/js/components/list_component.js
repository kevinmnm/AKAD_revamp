import AKAD from "../ADAKNotes_revamp.js";

const templater = `
    <div id='list_wrapper'>
        <div class='list_all'>All Contents
        <div class="fa fa-sort"></div>
        <div class='sort_by' @click.capture='sort($event)'>
            <div :class='{js_select: js_selected}'>JavaScript</div>
            <div :class='{vue_select: vue_selected}'>Vue</div>
            <div :class='{css_select: css_selected}'>CSS</div>
        </div>
        </div>
        <div class='list_block' v-for='all in akad_length'>{{ all }}</div>
    </div>
`

export default {
    template: templater,
    data(){
        return {
            akad: AKAD,
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
