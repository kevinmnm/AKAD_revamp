import AKAD from "../ADAKNotes_revamp.js";



const templater = `
    <div class='learned_section'>
        <div class='learned_previous'>
            <div class='fa fa-chevron-circle-left'></div>
        </div>
        <div class='learned_content'>
            <code class='date'>{{ akad[parentValue].date }}</code>
            <div class='title'><u>{{ akad[parentValue].topic }}</u></div>
            <div class='description'>{{ akad[parentValue].description }}</div>
            <div class='reference'>
                <a :href="akad[parentValue].referenceLink1" target='_blank'>Link1</a>
                <a :href="akad[parentValue].referenceLink2" target='_blacnk'>Link2</a>
            </div>
            <div class='example'>
                <div class='embed' 
                v-html='akad[parentValue].codepenEmbed'>
                </div>
            </div>
        </div>
        <div class='learned_next' @click='func()'>
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
            pv: this.parentValue
        }
    },
    methods:{
        func(){
            alert(this.pv);
        }
    }
}