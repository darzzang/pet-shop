import React from 'react';
import Vector124 from '../assets/svg/vector-124.svg';
import Vector125 from '../assets/svg/vector-125.svg';
import Vector126 from '../assets/svg/vector-126.svg';
import Vector127 from '../assets/svg/vector-127.svg';
import CursorBlue from '../assets/svg/cursor-blue.svg';
import CursorOrange from '../assets/svg/cursor-orange.svg';
import CursorPurple from '../assets/svg/cursor-purple.svg';

const ThumbnailComponent = () => {
  return (
    <div className="relative w-[1200px] h-[720px] bg-white">
      {/* Shadow */}
      <div className="absolute left-[72px] top-[292px] w-[859px] h-[184px] bg-black"></div>
      
      {/* Bounding Headline */}
      <div className="absolute left-[48px] top-[268px] flex gap-2.5 px-8 py-11 bg-yellow-400 border-4 border-black">
        {/* Corner decorations */}
        <div className="absolute -top-3 -left-3 w-[22px] h-[22px] bg-white border-4 border-black"></div>
        <div className="absolute -top-3 -right-3 w-[22px] h-[22px] bg-white border-4 border-black"></div>
        <div className="absolute -bottom-3 -left-3 w-[22px] h-[22px] bg-white border-4 border-black"></div>
        <div className="absolute -bottom-3 -right-3 w-[22px] h-[22px] bg-white border-4 border-black"></div>
        
        {/* Main text */}
        <h1 className="text-[132px] font-bold leading-none tracking-[-3%] text-center text-black">
          Click me
        </h1>
      </div>
      
      {/* Cursor Labels - Blue */}
      <div className="absolute left-[265.25px] top-[568.25px] flex flex-col justify-stretch items-stretch px-6 py-2.5 bg-[#5551FF] border-4 border-black">
        <div className="absolute left-[119.75px] top-[-46.25px] w-[46.5px] h-[54.75px]">
          <img src={CursorBlue} alt="Blue cursor" className="w-[37.67px] h-[44.77px]" />
        </div>
      </div>
      
      {/* Cursor Labels - Orange */}
      <div className="absolute left-[547px] top-[50.75px] flex flex-col justify-stretch items-stretch px-6 py-2.5 bg-[#F24E1E] border-4 border-black">
        <div className="absolute left-[-31.25px] top-[52.5px] w-[46.5px] h-[54.75px]">
          <img src={CursorOrange} alt="Orange cursor" className="w-[37.67px] h-[44.77px]" />
        </div>
      </div>
      
      {/* Cursor Labels - Purple */}
      <div className="absolute left-[1014.5px] top-[373.5px] flex flex-col px-6 py-2.5 bg-[#A259FF] border-4 border-black">
        <div className="absolute left-[-33.75px] top-[-46.25px] w-[46.5px] h-[54.75px]">
          <img src={CursorPurple} alt="Purple cursor" className="w-[37.67px] h-[44.77px]" />
        </div>
      </div>
      
      {/* Decorative elements - Illo groups */}
      <div className="absolute left-[752.5px] top-[567px] w-[718px] h-[180.16px]">
        {/* Vector elements and ellipses */}
        <div className="w-full h-full relative">
          {/* Vector 124 - Orange stroke */}
          <img src={Vector124} alt="Vector 124" className="absolute inset-0 w-full h-full" />
          {/* Vector 125 - Black stroke */}
          <img src={Vector125} alt="Vector 125" className="absolute inset-0 w-full h-full" />
          {/* Ellipses */}
          <div className="absolute left-[111px] top-[64.5px] w-4 h-4 bg-white border-4 border-black rounded-full"></div>
          <div className="absolute left-[251.25px] top-[82px] w-4 h-4 bg-white border-4 border-black rounded-full"></div>
          <div className="absolute left-[350.25px] top-[55.75px] w-4 h-4 bg-white border-4 border-black rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute left-[-291.75px] top-[60.25px] w-[713.5px] h-[81.5px]">
        {/* Vector elements and ellipses */}
        <div className="w-full h-full relative">
          {/* Vector 126 - Blue stroke */}
          <img src={Vector126} alt="Vector 126" className="absolute inset-0 w-full h-full" />
          {/* Vector 127 - Black stroke */}
          <img src={Vector127} alt="Vector 127" className="absolute inset-0 w-full h-full" />
          {/* Ellipses */}
          <div className="absolute left-[697.5px] top-[21.75px] w-4 h-4 bg-white border-4 border-black rounded-full"></div>
          <div className="absolute left-[549px] top-[61.5px] w-4 h-4 bg-white border-4 border-black rounded-full"></div>
          <div className="absolute left-[508.5px] top-[11px] w-4 h-4 bg-white border-4 border-black rounded-full"></div>
          <div className="absolute left-[407.25px] top-[65.25px] w-4 h-4 bg-white border-4 border-black rounded-full"></div>
          <div className="absolute left-[401.25px] top-0 w-4 h-4 bg-white border-4 border-black rounded-full"></div>
          <div className="absolute left-[275.25px] top-[68.75px] w-[12.75px] h-[12.75px] bg-white border-[3.75px] border-black rounded-full"></div>
          <div className="absolute left-[275.25px] top-[37.25px] w-[12.75px] h-[12.75px] bg-white border-[3.75px] border-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailComponent; 