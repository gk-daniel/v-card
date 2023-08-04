
// * ========================================================== 
// * ../business-card/profile-image/ProfileImage.js
// * ========================================================== 
const { defineComponent } = Vue;
// x ----------------------------------------------------------
import Images from '../../../01-atoms/images/Images.js';
// * ========================================================== 

const ProfileImage = defineComponent({
  components: {
    Images // <images>
  },
  template: `
    <div class="profile-image">
      <images :src="'04-components/03-organism/business-card/profile-image/daniel-g-kostyushko.jpg'" class="profile-image__img" />
    </div>
  ` ,
});

export default ProfileImage;
