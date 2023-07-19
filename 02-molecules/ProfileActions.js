// * 02-molecules/ProfileActions.js
// - <buttons> => 01-atoms/Buttons.js

app.component('profile-actions', {
  template: `
    <div class="profile-actions">
        <button class="btn btn--primary">
           Portfolio
         </button>
    </div>
    <div class="profile-actions">
      <buttons :href="'https://gitlab.com/daniil.grudokkostyushko'" :icon-class="'ph-gitlab-logo'" />
      <buttons :href="'https://github.com/gk-daniel'" :icon-class="'ph-github-logo'" />
    </div>
  `,
});