/* 
* =================================== 
* 01-atoms/images/Images.js
* =================================== 
*/

app.component('images', {
    props: ['src'],
    template: `
        <img :src="src" />
    `,
});  