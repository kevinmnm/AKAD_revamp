
import calendar_component from "./components/calendar_component.js";
import AKAD from "./ADAKNotes_revamp.js";
import list_component from "./components/list_component.js";




const AKAD_app  = new Vue({
    el: "#app",
    data: {
        show_list: true
    },
    components: {
        'calendar-comp': calendar_component,
        'list-comp': list_component
    },
    methods: {
        
    }
});
