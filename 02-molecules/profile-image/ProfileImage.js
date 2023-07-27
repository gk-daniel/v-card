/* 
  * ============================================== 
  * 02-molecules/profile-image/ProfileImage.js
  / ----------------------------------------------
  / - <images> => 01-atoms/Images.js
  * ============================================== 
*/

app.component("ProfileImage", {
  template: `
  <div class="profile-image">
    <images :src="'https://dn.gooko.org/vue/card/00-config/assets/images/daniel-g-kostyushko.jpg'" class="profile-image__img" />
  </div>
  `,
});
