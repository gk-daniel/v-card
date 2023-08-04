/* 
  * =================================== 
  * 01-atoms/links/Links.js
  * =================================== 
*/


const { defineComponent } = Vue;

const Links = defineComponent({
  props: ['href', 'icons'],
  template: `
    <a :href="href" target="_blank" class="link link--icon">
      <i :class="icons"></i>
    </a>
  `,
});

export default Links;
