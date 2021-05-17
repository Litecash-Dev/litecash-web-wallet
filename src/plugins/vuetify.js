import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import variables from "../sass/jsimport.scss";

Vue.use(Vuetify);

// compile themes styles from sass
let themes = {};
Object.keys(variables).forEach(x => {
  let theme = x.split("_")[0];
  if (!themes[theme]) {
    themes[theme] = {};
  }
  let key = x.split("_")[1];
  themes[theme][key] = variables[x];
});

const vuetify = new Vuetify({
  theme: {
    dark: true,
    themes
  }
});

export default vuetify;
