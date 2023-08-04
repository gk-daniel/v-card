/* 
* =================================== 
* 01-atoms/buttons/Buttons.js
* =================================== 
*/

const { defineComponent } = Vue;

  const Buttons = defineComponent({
    props: ['href', 'icon-class'],
    template: `
     <a :href="href" target="_blank">
       <button class="btn btn--icon">
          <i :class="iconClass"></i>
        </button>
      </a>
    `,
  });
  
  export default Buttons;
  