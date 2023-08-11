## 
### [V-card](../../README.md) / [01-config](../00-Introduction.md) / 00-archive
## 

Here you can find information on how to connect this project using a global CDN connection.


We have two ways to include vue. One is using CDN and the other is CLI. Each of them has its own advantages, however, for large projects, a CLI connection is suitable, while for small ones, a CDN will be preferable.

##  1. CDN connection


### - Global Approach

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

## 2. Module Approach

Modular scripting means including just one js file in html and allowing components to be imported into js files without using tools that mimic this behavior and then build applications like webpack

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Daniel G. Kostyushko</title>
  <!-- Favicon -->
  <link rel="icon" href="./05-assets/02-home/favicon/favicon.png" type="image/x-icon" />
  <!-- Icons -->
  <script src="https://unpkg.com/phosphor-icons"></script>
  <!-- Style -->
  <link rel="stylesheet" href="./03-style/index.css" />
  <!-- Vue.js -->
  <script src="./02-scripts/vue.js"></script>
</head>
<body>
  <div id="app">
  </div>

  <script type="module" src="./02-scripts/app.js"></script>
</body>
</html>
```  

Here you can find app.js 

```javascript
// * ========================================================== 
// * Starting Point of Vue.js application 
// * ========================================================== 
const { createApp, ref } = Vue;
// x ----------------------------------------------------------
import BusinessCard from 
'../04-components/03-organism/business-card/BusinessCard.js'; 
import CornerRibbons from 
'../04-components/02-molecules/corner-ribbons/CornerRibbons.js'; 
import VideoOverlay from 
'../04-components/04-template/video-overlay/VideoOverlay.js'; 
// * ========================================================== 

const app = createApp({
  components: {
    BusinessCard, //  <business-card />
    CornerRibbons, //  <corner-ribbons />
    VideoOverlay, //  <video-overlay />
  },
  setup() {
    const message = ref('Welcome to V-Card App!');
    return {
      message
    };
  },
  template: `
    <business-card />
    <corner-ribbons />
    <video-overlay />
`,
});

app.mount('#app');

```  

and commponent that we import 

```javascript
// * ========================================================== 
// * 04-components/02-molecules/ribbons/Ribbons.js
// * ========================================================== 
const { defineComponent } = Vue;
// * ========================================================== 

const CornerRibbons = defineComponent({
  template: `
  <div class="corner-ribbons">
      <div class="cr cr-bottom cr-left cr-sticky cr-green"> Vue.js </div>
  </div>
  `,
});

export default CornerRibbons;
```  

Using the `script` tag with the `type="module"` attribute when connecting Vue.js to your HTML has several benefits. This approach takes advantage of JavaScript modules, which is a standardized way of organizing and structuring code in modern web applications. Here are some of the benefits:

1. **Encapsulation and Scope Isolation**: When you use the `type="module"` attribute, JavaScript files are treated as ECMAScript modules. This provides better encapsulation and scope isolation, preventing variables and functions from leaking into the global scope. This helps avoid naming conflicts and makes your codebase more maintainable.

2. **Explicit Dependencies**: With the module system, dependencies are explicitly imported using `import` statements. This makes it clear which parts of your code are relying on external modules, improving readability and maintainability.

3. **Improved Code Organization**: ECMAScript modules encourage a modular approach to your codebase, allowing you to split your code into smaller, more manageable files. This makes it easier to maintain, test, and collaborate on your code.

4. **Better Browser Caching**: Browsers can cache individual modules, which can lead to faster loading times when users revisit your website. If a module hasn't changed, the browser can use the cached version, reducing the need to download the same code again.

5. **Asynchronous Loading**: The `type="module"` attribute allows for asynchronous loading of modules. This means that your application can continue loading and rendering even while scripts are being fetched and executed. This can improve the perceived performance of your application.

6. **ES6 Features**: When using modules, you can take advantage of ES6 features such as `import` and `export`, template literals, arrow functions, destructuring, and more. This can lead to cleaner, more modern, and more efficient code.

7. **Compatibility and Future-Proofing**: The `type="module"` approach is more aligned with modern web development practices. While it may not be supported in some older browsers, it's increasingly becoming the standard way of structuring and loading JavaScript code.

8. **Security**: The module system can help mitigate certain security risks by reducing the exposure of variables and functions to the global scope. This can help prevent unintentional data leaks and unauthorized access.

By using the `script` tag with `type="module"` when connecting Vue.js, you're leveraging these benefits to create a more organized, maintainable, and efficient codebase for your web application.

