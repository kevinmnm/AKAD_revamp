import AKAD from "../ADAKNotes_revamp.js";



const templater = `
    <div class='learned_section animate__animated'>

        <div class='learned_previous' @click='prev_content()'>
            <div class='fa fa-chevron-circle-left'></div>
        </div>
    
        <div class='learned_content' v-show='show_content'>
            <code class='date'>{{ akad[pv_new].date }}</code>
            <div class='title'><u>{{ akad[pv_new].topic }}</u></div>
            <div class='description'>{{ akad[pv_new].description }}</div>
            <div class='reference'>
                <a :href="akad[pv_new].referenceLink1" target='_blank'>Link1</a>
                <a :href="akad[pv_new].referenceLink2" target='_blacnk'>Link2</a>
            </div>
            <div class='example'>
                <div class='embed' 
                v-html='akad[pv_new].codepenEmbed'>
                </div>
            </div>
        </div>
    
        <div class='learned_next' @click='next_content()'>
            <div class='fa fa-chevron-circle-right'></div>
        </div>

    </div>
`

export default {
    template: templater,
    props: ['parent-value'],
    data(){
        return {
            akad: AKAD,
        }
    },
    computed: {
        pv_new(){
            return this.parentValue
        }
    },
    methods: {
        prev_content(){
            if (this.parentValue === 0) {return}
            let dv = document.querySelector('.learned_content');

        if (dv.classList.contains('animate__bounceInRight')) {
            dv.classList.remove('animate__bounceInRight');
        }

        dv.classList.add('animate__bounceOutRight');
        setTimeout(()=>{
            dv.classList.remove('animate__bounceOutRight');
            dv.classList.add('animate__bounceInLeft');
            this.parentValue--;
        },200);
        },
        next_content(){
            if (this.parentValue === this.akad.length - 1) {return}
        let dv = document.querySelector('.learned_content');
    
        if (dv.classList.contains('animate__bounceInLeft')) {
            dv.classList.remove('animate__bounceInLeft');
        }

        dv.classList.add('animate__bounceOutLeft');
        setTimeout(()=>{
            dv.classList.remove('animate__bounceOutLeft');
            dv.classList.add('animate__bounceInRight');
            this.parentValue++;
        },200);
        }
    },
    watch: {
        pv_new(){
            if (this.pv_new !== null) {
                this.show_content = true;
            }
        }
    }
}