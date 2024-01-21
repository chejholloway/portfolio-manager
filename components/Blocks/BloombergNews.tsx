"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

import ReactPlayer from 'react-player';
import { block } from "million/react-server";

const BloombergNewsComponent: React.FC = () => {

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <h4 className="text-xl font-semibold text-black dark:text-primary">
          Bloomberg News
        </h4>
      </div>

      <>
        <ReactPlayer
          light="https://talkingbiznews.com/wp-content/uploads/2015/09/Bloomberg-Live-300x300.png"
          playing
          controls
          autoPlay
          url="https://www.youtube.com/watch?v=P0kV8em4NbI"
          width="auto"
          height='450px'/>
       </>
    </div>
  );
};

// const BloombergNewsBlock = block(BloombergNewsComponent);

export default BloombergNewsComponent;
