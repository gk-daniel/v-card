// * 02-molecules/ProfileImage.js
// - <images> => 01-atoms/Images.js

app.component('profile-image', {
  template: `
    <div class="profile-image">
      <images :src="'https://dn.gooko.org/projects/vue/card/00-config/assets/images/daniel-g-kostyushko.jpg'" />
    </div>
  `,
});