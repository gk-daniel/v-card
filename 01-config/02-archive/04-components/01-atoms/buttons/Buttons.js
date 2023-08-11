/* 
* =================================== 
* 01-atoms/buttons/Buttons.js
* =================================== 
*/

app.component('buttons', {
  props: ['iconClass', 'href'],
  template: `
   <a :href="href" target="_blank">
     <button class="btn btn--icon">
        <i :class="iconClass"></i>
      </button>
    </a>
  `,
});
