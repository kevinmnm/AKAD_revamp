
import calendar_component from "./components/calendar_component.js";
import AKAD from "./ADAKNotes_revamp.js";
import list_component from "./components/list_component.js";
import learned_component from "./components/learned_component.js";




const AKAD_app  = new Vue({
    el: "#app",
    data: {
        show_list: true
    },
    components: {
        'calendar-comp': calendar_component,
        'list-comp': list_component,
        'learned-comp': learned_component
    }
});
