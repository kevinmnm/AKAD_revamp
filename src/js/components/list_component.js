//import AKAD from "../ADAKNotes_revamp.js";

const templater = `
    <div id='list_wrapper'>
        <div class='list_block'>asdfasd</div>
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
        mounted(){alert(this.akad_length);} 
}

//export default list_component;