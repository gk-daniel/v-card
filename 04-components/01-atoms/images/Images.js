/* 
 * =================================== 
 * 01-atoms/images/Images.js
 * =================================== 
*/

const { defineComponent } = Vue;

  const Images = defineComponent({
    props: ['src'],
    template: `
      <img :src="src" />
    `,
  });
  
  export default Images;
  