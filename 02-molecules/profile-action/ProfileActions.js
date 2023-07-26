/* 
  * ============================================== 
  * 02-molecules/profile-action/ProfileActions.js
  / ----------------------------------------------
  / - <buttons> => 01-atoms/Buttons.js
  * ==============================================
*/

app.component("ProfileActions", {
  template: `
    <div class="ProfileActions">
        <button class="btn btn--primary">
           Portfolio
         </button>
    </div>
    <div class="ProfileActions">
      <buttons :href="'https://gitlab.com/daniil.grudokkostyushko'" :icon-class="'ph-gitlab-logo'" />
      <buttons :href="'https://github.com/gk-daniel'" :icon-class="'ph-github-logo'" />
    </div>
  `,
});
