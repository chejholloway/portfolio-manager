"use client";
import { memo } from "react";
import ReactPlayer from 'react-player';

const BloombergNewsComponent: React.FC = memo(() => {
  return (
      <div className="w-full md:w-1/3 card p-4">
        <ReactPlayer
          light="https://talkingbiznews.com/wp-content/uploads/2015/09/Bloomberg-Live-300x300.png"
          playing
          controls
          autoPlay
          url="https://www.youtube.com/watch?v=P0kV8em4NbI"
          width="auto"
          height='503px'/>
       </div>
  );
});

export default BloombergNewsComponent;
