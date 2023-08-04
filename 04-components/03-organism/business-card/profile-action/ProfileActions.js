
// * ========================================================== 
// * ../business-card/profile-action/ProfileActions.js
// * ========================================================== 
const { defineComponent } = Vue;
// x ----------------------------------------------------------
import Buttons from '../../../01-atoms/buttons/Buttons.js';
// * ========================================================== 

const ProfileActions = defineComponent({
  components: {
    Buttons // <buttons>
  },
  template: `
  <div class="profile-actions">
    <div class="block-action">
      <button class="btn btn--primary">
        Portfolio
      </button>
    </div>
    <div class="block-action">
      <buttons :href="'https://gitlab.com/daniil.grudokkostyushko'" :icon-class="'ph-gitlab-logo'" />
      <buttons :href="'https://github.com/gk-daniel'" :icon-class="'ph-github-logo'" />
    </div>
  </div>
  ` ,
});

export default ProfileActions;
