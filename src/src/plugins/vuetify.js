import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#419C55",
                secondary: "#60B373",
                error: "#e91e63",
                warning: "#ff9800",
                accent: "#3f51b5",
                info: "#607d8b",
                success: "#009688"
            }
        }
    }
});
