import AKAD from "../ADAKNotes_revamp.js";



const templater = `
    <div class='learned_section' v-show='showProp'>
        <div class='learned_previous'>
            <div class='fa fa-chevron-circle-left'></div>
        </div>
        <div class='learned_content'>
            <code class='date'>{{ akad[parentValue].date }}</code>
            <div class='title'><u>{{ akad[parentValue].topic }}</u></div>
            <div class='description'>{{ akad[parentValue].description }}</div>
            <div class='example'>
                <div class='embed' 
                v-html='akad[parentValue].codepenEmbed'>
                </div>
            </div>
        </div>
        <div class='learned_next'>
            <div class='fa fa-chevron-circle-right'></div>
        </div>
    </div>
`

export default {
    template: templater,
    props: ['parent-value'],
    data(){
        return {
            akad: AKAD
        }
    }
}