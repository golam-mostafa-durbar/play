import React, { Fragment } from "react";
import { BitmovinPlayer } from "bitmovin-player-react";
import "bitmovin-player-ui/dist/css/bitmovinplayer-ui.css";

const BitmovinPlayerStream = () => {
  const playerConfig = {
    key: "08e3f64f-dc39-439c-809c-418d5f2db785",
    playback: {
      muted: true,
      autoplay: true,
    },
    style: {
      watermark: {
        image:
          "https://www.pngfind.com/pngs/m/79-792788_examples-of-watermarks-watermark-photography-examples-hd-png.png",
        position: "top-right",
      },
    },
  };

  const playerSource = {
    // hls: "https://cdn.bitmovin.com/content/assets/streams-sample-video/sintel/m3u8/index.m3u8",
    dash: "https://d2rvg4w986d6wn.cloudfront.net/f617d518-b4f9-4136-83d2-c53f23800c73/manifest.mpd",
    drm: {
      widevine: {
        LA_URL: "https://widevine-proxy.appspot.com/proxy",
        // audioRobustness: "HW_SECURE_DECODE",
        // videoRobustness: "HW_SECURE_DECODE",
      },
    },
  };

  return (
    <Fragment>
      <BitmovinPlayer config={playerConfig} source={playerSource} />
    </Fragment>
  );
};

export default BitmovinPlayerStream;
