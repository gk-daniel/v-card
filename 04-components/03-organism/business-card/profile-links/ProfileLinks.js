
// * ========================================================== 
// * ../business-card/profile-links/ProfileLinks.js
// * ========================================================== 
const { defineComponent } = Vue;
// x ----------------------------------------------------------
import Links from '../../../01-atoms/links/Links.js';
// * ========================================================== 

const ProfileLinks = defineComponent({
  components: {
    Links // <links>
  },
  template: `
    <div class="profile-links">
      <links :href="'https://www.linkedin.com/in/daniel-g-kostyushko/'" :icons="'ph-linkedin-logo'"/>
      <links :href="'https://www.xing.com/profile/Daniel_GKostyushko/'" :icons="'ph-chat-teardrop-text'"/>
      <links :href="'https://www.instagram.com/gk.daniel/'" :icons="'ph-instagram-logo'"/>
      <links :href="'https://www.facebook.com/daniel.g.kostyushko'" :icons="'ph-facebook-logo'"/>
    </div>
  ` ,
});

export default ProfileLinks;
