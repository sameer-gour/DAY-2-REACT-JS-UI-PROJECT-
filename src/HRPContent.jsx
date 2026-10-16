
import React from 'react';
import { RiArrowRightLine } from '@remixicon/react';

function HRPContent({ imgs, idx }) {
  return (
    <div className="relative  flex-shrink-0 w-[20vw] h-[75vh] overflow-hidden rounded-3xl ">
      <img
        className="h-full w-full object-cover"
        src={imgs.img}
        alt={`Profile ${idx + 1}`}
      />

      <h1 className="absolute top-5 left-5 rounded-full bg-white px-4 py-2">
        {idx + 1}
      </h1>

      <p className="absolute bottom-25 left-5 p-4 right-5 text-white text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Perspiciatis pariatur quibusdam, natus quae veritatis fuga.
      </p>

      <button
        className="absolute bottom-5 right-5 rounded-full bg-blue-300 p-3"
        aria-label={`View card ${idx + 1}`}
      >
        <RiArrowRightLine />
      </button>
    </div>
  );
}

export default HRPContent;
