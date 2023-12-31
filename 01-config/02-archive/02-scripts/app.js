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
