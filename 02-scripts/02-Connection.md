## 
### [V-card](../README.md) / [02-scripts](./00-Introduction.md) / 02-Connection
## 

We have two ways to include vue. One is using CDN and the other is CLI. Each of them has its own advantages, however, for large projects, a CLI connection is suitable, while for small ones, a CDN will be preferable.

##  1. CDN connection


### - Global Approach

CDN connection means injecting a script into index.html and this approach can be implemented as follows. 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Daniel G. Kostyushko</title>
    <!-- Favicon -->
    <link
      rel="icon"
      href="./05-assets/02-home/favicon/favicon.png"
      type="image/x-icon"
    />
    <!-- Icons -->
    <script src="https://unpkg.com/phosphor-icons"></script>
    <!-- Style -->
    <link rel="stylesheet" href="./03-style/index.css" />
    <!-- Vue.js -->
    <script src="https://unpkg.com/vue@3.0.11/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
      <app />
    </div>

    <!-- Import App -->
    <script src="./02-scripts/app.js"></script>

    <!-- Import Components -->
    <script src="./04-components/01-atoms/ribbons/Ribbons.js"></script>
    <script src="./04-components/01-atoms/buttons/Buttons.js"></script>
    <script src="./04-components/01-atoms/images/Images.js"></script>
    <script src="./04-components/01-atoms/links/Links.js"></script>
    <script src="./04-components/02-molecules/profile-image/ProfileImage.js"></script>
    <script src="./04-components/02-molecules/profile-title/ProfileTitle.js"></script>
    <script src="./04-components/02-molecules/profile-action/ProfileActions.js"></script>
    <script src="./04-components/02-molecules/profile-links/ProfileLinks.js"></script>
    <script src="./04-components/03-organism/business-card/BusinessCard.js"></script>
    <script src="./04-components/03-organism/video-player/YoutubeVideoPlayer.js"></script>

    <!-- Mount App -->
    <script>
      const mountedApp = app.mount("#app");
    </script>
  </body>
</html>
```  

In this case we use app object of vue and implement all components as his sub-objects

```js
/* 
 * ============================================== 
 * Main Component | app.js
 / ----------------------------------------------
 / - <YoutubeVideoPlayer> => 03-organism/YoutubeVideoPlayer.js
 / - <BusinessCard> => 03-organism/BusinessCard.js
 * ==============================================
*/

// app.js

const app = Vue.createApp({ });

app.component('app', {
  template: `
    <template v-if="isTabletAndDesktop">
      <YoutubeVideoPlayer
        :videoId="videoId"
        :autoplay="autoplay"
        :mute="mute"
        :startTime="startTime"
        :controls="controls"
        :showinfo="showinfo"
        :loop="loop"
        :playlist="playlist"
      >
      </YoutubeVideoPlayer>
      <Ribbons />
    </template>
    <BusinessCard />
  `,
  data() {
    return {
      // Set default values for video settings in the data object
      videoId: "t8jI5cSyWVE",
      autoplay: true,
      mute: true,
      startTime: 2615,
      controls: 0,
      showinfo: 0,
      loop: 1,
      playlist: 1,
    };
  },
  computed: {
    isTabletAndDesktop() {
      return window.innerWidth >= 1024;
    },
  },
});
```  

Example of component

```js
/* 
 * =================================== 
 * 01-atoms/Ribbons.js
 * =================================== 
*/

app.component("Ribbons", {
    template: `
    <div class="corner-ribbons">
        <div class="cr cr-bottom cr-left cr-sticky cr-green"> Vue.js </div>
    </div>
  `,
});
```

### - Module Approach

