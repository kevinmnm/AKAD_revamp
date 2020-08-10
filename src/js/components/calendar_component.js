import months_2020 from "./months_2020.js"
import AKAD from "../ADAKNotes_revamp.js";




const template = `
    <div id='calendar_wrapper'>
        <div class='month' @click.stop='show_str = !show_str'>
            <div class='fa fa-arrow-left prevM' @click.stop='changeM($event)'></div>
            <div v-if='show_str'>{{ month[index].string }}</div>
            <div v-else>{{ month[index].integer }}</div>
            <div class='fa fa-arrow-right nextM' @click.stop='changeM($event)'></div>
        </div>
        <div id='date_wrapper'>
            <div class='days' v-for='all in daysDiv'>{{ all }}</div>
        </div>
    </div>
`;

const calendar_component = {
    "calendar-comp": {
        template: template,
        data(){
            return {
                akad: AKAD,
                month: months_2020,
                index: 6,
                show_str: true,
                daysDiv: []
            }
        },
        computed: {
            total_days_month(){
                return 
            }
        },
        methods: {
            changeM(e){ //Triggers watch index() function.
                if (e.target.classList.contains('prevM')) {
                    this.index !== 0 ? this.index-- : this.index = 11;
                } else {
                    this.index !== 11 ? this.index++ : this.index = 0;
                }
            },
            generateDays(){ //Declared here for calling purpose only.
                this.daysDiv = [];
                for (let i=0; i<this.month[this.index].days; i++) {
                    this.daysDiv.push(i+1);
                }
                this.generateColor();
            },
            generateColor(){ //Decared to be called in generateDays().
                for (let i=0; i<this.daysDiv.length; i++) {
                    if (this.akad[i].uniqueIdMatch.substring(0, 2) === 'z'+this.index+1) {
                        console.log(this.akad[i].uniqueIdMatch.substring(0, 2));
                    }
                }
            }
        },
        watch: {
            index(){   
                this.generateDays();
            }
        },
        mounted(){
            this.generateDays();
        }
    }
}




export default calendar_component