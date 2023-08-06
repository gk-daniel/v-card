// app.js
const { createApp, ref } = Vue;
import MyComponent from './MyComponent.js'; 

// Create the Vue app and mount it
createApp({
  setup() {
    const message = ref('Hello vue!');
    return {
      message
    };
  }
})
  .component('my-component', MyComponent)
  .mount('#app');


//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <title>Daniel G. Kostyushko</title>
//     <!-- Favicon -->
//     <link rel="icon" href="./05-assets/02-home/favicon/favicon.png" type="image/x-icon" />
//     <!-- Icons -->
//     <script src="https://unpkg.com/phosphor-icons"></script>
//     <!-- Style -->
//     <link rel="stylesheet" href="./03-style/index.css" />
//     <!-- Vue.js -->
//     <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
//   </head>
//   <body>
//     <div id="app">
//     </div>
  
//     <script type="module" src="./02-scripts/module.js"></script>
//   </body>
//   </html>
  