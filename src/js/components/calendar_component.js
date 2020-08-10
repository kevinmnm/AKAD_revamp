import months_2020 from "./months_2020.js"



const template = `
    <div id='calendar_wrapper'>
        <div class='month' @click.stop='show_str = !show_str'>
            <div class='fa fa-arrow-left prevM' @click.stop='changeM($event)'></div>
            <div v-if='show_str'>{{ month[index].string }}</div>
            <div v-else>{{ month[index].integer }}</div>
            <div class='fa fa-arrow-right nextM' @click.stop='changeM($event)'></div>
        </div>
        <div id='date_wrapper'>
            <div class='days'>{{  }}</div>
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
                show_str: true
            }
        },
        computed: {
            total_days_month(){
                return 
            }
        },
        methods: {
            changeM(e){
                if (e.target.classList.contains('prevM')) {
                    this.index !== 0 ? this.index-- : this.index = 11;
                } else {
                    this.index !== 11 ? this.index++ : this.index = 0;
                }
            }
        }
    }
}




export default calendar_component;;