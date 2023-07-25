/* 
  * ============================================== 
  * Main Component | app.js
  / ----------------------------------------------
  / - <youtube-video-player> => 03-organism/YoutubeVideoPlayer.js
  / - <business-card> => 03-organism/BusinessCard.js
    * ==============================================
*/

const app = Vue.createApp({ });

app.component('app', {
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
  template: `
    <template v-if="isTabletAndDesktop">
      <youtube-video-player
        :videoId="videoId"
        :autoplay="autoplay"
        :mute="mute"
        :startTime="startTime"
        :controls="controls"
        :showinfo="showinfo"
        :loop="loop"
        :playlist="playlist"
      ></youtube-video-player>
      <ribbons />
    </template>
    <business-card />
  `,
  computed: {
    isTabletAndDesktop() {
      return window.innerWidth >= 1024;
    },
  },
});
