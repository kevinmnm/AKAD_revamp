import months_2020 from "./months_2020.js"



const template = `
    <div id='calendar_wrapper'>
        <div class='month' @click='show_str = !show_str'>
            <div class='fa fa-arrow-left prevM'></div>
            <div v-if='show_str'>{{ month[index].string }}</div>
            <div v-else>{{ month[index].integer }}</div>
            <div class='fa fa-arrow-right nextM'></div>
        </div>
        <div id='date_wrapper'>
        
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
        }
    }
}




export default calendar_component;;