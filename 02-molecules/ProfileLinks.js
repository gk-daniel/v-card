// * 02-molecules/ProfileLinks.js
// - <links> => 01-atoms/Links.js

app.component("profile-links", {
  template: `
    <div class="profile-links">
    <links :href="'https://www.linkedin.com/in/daniel-g-kostyushko/'" :icons="'ph-linkedin-logo'"/>
    <links :href="'https://www.xing.com/profile/Daniel_GKostyushko/'" :icons="'ph-chat-teardrop-text'"/>
    <links :href="'https://www.instagram.com/gk.daniel/'" :icons="'ph-instagram-logo'"/>
    <links :href="'https://www.facebook.com/daniel.g.kostyushko'" :icons="'ph-facebook-logo'"/>
    </div>
  `,
});