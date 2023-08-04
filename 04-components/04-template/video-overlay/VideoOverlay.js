// * ==========================================================
// * 04-components/04-template/video-overlay/VideoOverlay.js
// * ==========================================================
const { defineComponent } = Vue;
// x ----------------------------------------------------------
import YoutubeVideoPlayer from "../../03-organism/video-player/YoutubeVideoPlayer.js";
// * ==========================================================

const VideoOverlay = defineComponent({
  components: {
    YoutubeVideoPlayer, //  <youtube-video-player />
  },
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
    <div class="video-overlay" v-if="isTabletAndDesktop">
      <youtube-video-player
        :videoId="videoId"
        :autoplay="autoplay"
        :mute="mute"
        :startTime="startTime"
        :controls="controls"
        :showinfo="showinfo"
        :loop="loop"
        :playlist="playlist"
      />
      <Ribbons />
    </div>
  `,
  computed: {
    isTabletAndDesktop() {
      return window.innerWidth >= 1024;
    },
  },
});

export default VideoOverlay;
