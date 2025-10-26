import React, { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react"; // optional icons

const Video = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <div className="relative w-full md:w-[800px] h-[450px] mx-auto mt-10 overflow-hidden rounded-2xl shadow-lg">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-center"
      >
        <source src="/assets/home-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Sound toggle button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
};

export default Video;
