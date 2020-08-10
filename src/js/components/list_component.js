import AKAD from "../ADAKNotes_revamp.js";

const templater = `
    <div id='list_wrapper'>
        <div class='list_all'>All Contents
        <div class="fa fa-sort"></div>
        <div class='sort_by'>
            <div class='js_select'>JavaScript</div>
            <div class='vue_select'>Vue</div>
            <div class='css_select'>CSS</div>
        </div>
        </div>
        <div class='list_block' v-for='all in akad_length'>{{ all }}</div>
    </div>
`

export default {
    template: templater,
    data(){
        return {
            akad: AKAD
        }
    },
    computed: {
        akad_length(){
            return this.akad.length;
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
