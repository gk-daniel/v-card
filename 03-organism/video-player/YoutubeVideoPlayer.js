/* 
* ============================================== 
* 03-organism/video-player/YoutubeVideoPlayer.js
* ============================================== 
*/
app.component('youtube-video-player', {
  props: {
    // parameter after {url + /embed/ + videoId}
    videoId: {
      type: String,
      required: true,
    },
    // auto play
    autoplay: {
      type: Boolean,
      default: true,
    },
    // sound off
    mute: {
      type: Boolean,
      default: true,
    },
    // playback start time (seconds)
    startTime: {
      type: Number,
      default: 0,
    }, 
    // on / off controls
    controls: {
      type: Number,
      default: 0,
    },
    // on/off youtube indo
    showinfo: {
      type: Number,
      default: 0,
    },
    // loop + playlist = loop video
    loop: {
      type: Number,
      default: 0,
    },
    playlist: {
      type: Number,
      default: 0,
    },
  },
  template: `
    <div class="background-video video-wrapper">
      <div class="video-overlay"></div>
      <iframe
        :src="videoUrlWithParams"
        :title="'Embedded YouTube video'"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="video-iframe"
      ></iframe>
    </div>
  `,
  computed: {
    videoUrlWithParams() {
      const embedUrl = `https://www.youtube.com/embed/${this.videoId}`;
      const url = new URL(embedUrl);
      url.searchParams.append('autoplay', this.autoplay ? '1' : '0');
      url.searchParams.append('mute', this.mute ? '1' : '0');
      url.searchParams.append('start', this.startTime.toString());
      url.searchParams.append('controls', this.controls ? '1' : '0');
      url.searchParams.append('showinfo', this.showinfo ? '1' : '0');
      url.searchParams.append('loop', this.loop ? '1' : '0');
      url.searchParams.append('playlist', this.loop ? `${this.videoId}`: '0' );
      return url.toString();
    },
  },
});
