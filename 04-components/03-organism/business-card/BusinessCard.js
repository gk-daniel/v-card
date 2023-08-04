// * ========================================================== 
// * 04-components/03-organism/business-card/BusinessCard.js
// * ========================================================== 
const { defineComponent } = Vue;
// x ----------------------------------------------------------
import ProfileImage from './profile-image/ProfileImage.js'; 
import ProfileTitle from './profile-title/ProfileTitle.js'; 
import ProfileActions from './profile-action/ProfileActions.js'; 
import ProfileLinks from './profile-links/ProfileLinks.js'; 
// * ========================================================== 

const BusinessCard = defineComponent({
  components: {
    ProfileImage, // <profile-image />
    ProfileTitle, // <profile-title />
    ProfileActions, // <profile-actions />
    ProfileLinks, // <profile-links />
  },
  template: `
  <div class="business-card">
    <a href="https://dn.gooko.org/" target="_blank" class="business-card__link">
      <article class="profile">
        <profile-image />
        <profile-title />
        <profile-actions />
        <profile-links />
      </article>
    </a>
  </div>
  `,
});

export default BusinessCard;
