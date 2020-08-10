//import AKAD from "../ADAKNotes_revamp";



const templater = `
    <div class='learned_section'>
        <div class='learned_previous'>
            <div class='fa fa-chevron-circle-left'></div>
        </div>
        <div class='learned_content'>
            <code class='date'>asdf</code>
            <div class='title'><u>asdasdf</u></div>
            <div class='description'>sfsd</div>
            <div class='example'></div>
        </div>
        <div class='learned_next'>
            <div class='fa fa-chevron-circle-right'></div>
        </div>
    </div>
`

export default {
    template: templater,
    data(){
        return {
            akad: AKAD
        }
    }
}