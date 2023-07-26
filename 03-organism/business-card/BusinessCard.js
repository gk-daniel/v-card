/* 
* ===================================================== 
* 03-organism/BusinessCard/BusinessCard.js
/ -----------------------------------------------------
/ - <profile-image> - 02-molecules/ProfileImage.js
/ - <ProfileTitle> - 02-molecules/ProfileTitle.js
/ - <ProfileActions> - 02-molecules/ProfileActions.js
/ - <profile-links> - 02-molecules/ProfileLinks.js
* ===================================================== 
*/

app.component('BusinessCard', {
  template: `
    <div class="BusinessCard">
      <a href="https://dn.gooko.org/" target="_blank">
        <article class="profile">
          <profile-image></profile-image>
          <ProfileTitle></ProfileTitle>
          <ProfileActions></ProfileActions>
          <profile-links></profile-links>
        </article>
      </a>
    </div>
    `,
});
