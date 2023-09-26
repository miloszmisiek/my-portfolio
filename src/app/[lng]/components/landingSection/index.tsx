"use client";

import { useState } from "react";
import ProfilePic from "../profilePic";
import TypeWriter from "../typewriter";
import { firaCode, inter, questrial, roboto, pressStart2P } from "@/fonts";

export default function LandingSection() {
  const [isTypingStopped, setIsTypingStopped] = useState(false);
  const handleStop = () => setIsTypingStopped(true);
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-2 gap-4 items-center min-h-[50vh]">
        {/* Avatar */}
        <div className="flex justify-end">
          <ProfilePic />
        </div>
        {/* TypeWriter */}
        <div
          className={`${firaCode.className} w-100 flex justify-items-center p-8 tracking-wider h-96`}
        >
          <TypeWriter onStop={handleStop} />
        </div>
      </div>

      <div className="min-h-[50vh] flex justify-center items-start">
        {isTypingStopped && (
          <button className="nes-btn is-success">Load Character</button>
        )}
      </div>
    </div>
  );
}
