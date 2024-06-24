import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Main() {
  return (
    <div>
      <div className="relative object-contain" style={{height:"80vh"}}>
        <img className="h-full w-full -z-50 object-cover"
          src="https://img.freepik.com/free-photo/elevated-view-laptop-earphones-crumpled-papers-pencil-blank-spiral-notepad-frame-black-background_23-2148080331.jpg"
          alt=""
        />
        <div className="h-full w-full absolute bg-blue-900 bg-opacity-65 top-0">
            <h1 className="text-7xl mt-56 px-28 font-mono text-black-500 font-bold">
                Hey, I'm {" "} <br />
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Gaurav ',
        3000, // wait 1s before replacing "Mice" with "Hamsters"
        'Frontend developer',
        1000,
        'Web developer',
        1000,
        // 'We produce food for Chinchillas',
        // 1000
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    /></h1>

               
                </div>
      </div>
    </div>
  );
}
