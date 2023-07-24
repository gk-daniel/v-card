/* 
* ===================================================== 
* 03-organism/business-card/BusinessCard.js
/ -----------------------------------------------------
/ - <profile-image> - 02-molecules/ProfileImage.js
/ - <profile-title> - 02-molecules/ProfileTitle.js
/ - <profile-actions> - 02-molecules/ProfileActions.js
/ - <profile-links> - 02-molecules/ProfileLinks.js
* ===================================================== 
*/

app.component('business-card', {
  template: `
    <div class="business-card">
      <a href="https://dn.gooko.org/" target="_blank">
        <article class="profile">
          <profile-image></profile-image>
          <profile-title></profile-title>
          <profile-actions></profile-actions>
          <profile-links></profile-links>
        </article>
      </a>
    </div>
    `,
});
