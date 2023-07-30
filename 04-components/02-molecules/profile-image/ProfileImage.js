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
    <images :src="'04-components/02-molecules/profile-image/daniel-g-kostyushko.jpg'" class="profile-image__img" />
  </div>
  `,
});
