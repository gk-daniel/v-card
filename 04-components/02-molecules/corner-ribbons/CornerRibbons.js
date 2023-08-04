// * ========================================================== 
// * 04-components/02-molecules/ribbons/Ribbons.js
// * ========================================================== 
const { defineComponent } = Vue;
// * ========================================================== 

const CornerRibbons = defineComponent({
  template: `
  <div class="corner-ribbons">
      <div class="cr cr-bottom cr-left cr-sticky cr-green"> Vue.js </div>
  </div>
  `,
});

export default CornerRibbons;
