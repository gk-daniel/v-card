/* 
 * ===================================================== 
 * 03-organism/BusinessCard/BusinessCard.js
 / -----------------------------------------------------
 / - <ProfileImage> - 02-molecules/ProfileImage.js
 / - <ProfileTitle> - 02-molecules/ProfileTitle.js
 / - <ProfileActions> - 02-molecules/ProfileActions.js
 / - <ProfileLinks> - 02-molecules/ProfileLinks.js
 * ===================================================== 
*/

app.component('BusinessCard', {
  template: `
  <div class="business-card">
    <a href="https://dn.gooko.org/" target="_blank" class="business-card__link">
      <article class="profile">
        <ProfileImage></ProfileImage>
        <ProfileTitle></ProfileTitle>
        <ProfileActions></ProfileActions>
        <ProfileLinks></ProfileLinks>
      </article>
    </a>
  </div>
    `,
});
