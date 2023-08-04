// * ========================================================== 
// * Starting Point of Vue.js application 
// * ========================================================== 
const { createApp, ref } = Vue;
// x ----------------------------------------------------------
import BusinessCard from 
'../04-components/03-organism/business-card/BusinessCard.js'; 
import CornerRibbons from 
'../04-components/02-molecules/corner-ribbons/CornerRibbons.js'; 
import VideoOverlay from 
'../04-components/04-template/video-overlay/VideoOverlay.js'; 
// * ========================================================== 

const app = createApp({
  components: {
    BusinessCard, //  <business-card />
    CornerRibbons, //  <corner-ribbons />
    VideoOverlay, //  <video-overlay />
  },
  setup() {
    const message = ref('Welcome to V-Card App!');
    return {
      message
    };
  },
  template: `
    <business-card />
    <corner-ribbons />
    <video-overlay />
`,
});

app.mount('#app');
