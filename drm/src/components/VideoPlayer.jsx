import videojs from "video.js";
import React, { useRef, useEffect } from "react";

import "videojs-watermark";
import "videojs-contrib-eme";
import "video.js/dist/video-js.css";

const VideoPlayer = () => {
  const videoSrc =
    "https://d2rvg4w986d6wn.cloudfront.net/f617d518-b4f9-4136-83d2-c53f23800c73/manifest.mpd";

  const licenseUrl = "https://widevine-proxy.appspot.com/proxy";

  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      controls: true,
      autoplay: false,
      preload: "auto",
      sources: [
        {
          src: videoSrc,
          type: "application/dash+xml",
        },
      ],
      html5: {
        nativeAudioTracks: false,
        nativeVideoTracks: false,
      },
    });

    // Configure EME for DRM
    player.eme({
      drm: {
        servers: {
          "com.widevine.alpha": licenseUrl,
        },
      },
    });

    // Add watermark
    player.watermark({
      file: "https://www.pngfind.com/pngs/m/79-792788_examples-of-watermarks-watermark-photography-examples-hd-png.png", // Your watermark image
      opacity: 0.5, // Adjust opacity as needed
      position: "top-right", // Adjust position as needed
    });

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [videoSrc, licenseUrl]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-default-skin" />
    </div>
  );
};

export default VideoPlayer;
