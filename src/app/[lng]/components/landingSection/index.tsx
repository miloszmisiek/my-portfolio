"use client";

import { useState } from "react";
import ProfilePic from "../profilePic";
import TypeWriter from "../typewriter";
import { firaCode, inter, questrial, roboto, pressStart2P } from "@/fonts";
import styles from "./landingSection.module.scss";
import EightbitLoader from "../eightbitLoader";

export default function LandingSection() {
  const [isTypingStopped, setIsTypingStopped] = useState(false);
  const handleStop = () => setIsTypingStopped(true);
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-2 gap-4 items-end min-h-[60vh]">
        {/* Avatar */}
        <div className={`${styles.fadeIn} flex justify-end mb-14`}>
          <ProfilePic />
        </div>
        {/* TypeWriter */}
        <div
          className={`${firaCode.className} w-100 flex justify-items-center p-8 tracking-wider h-96 mb-14`}
        >
          <TypeWriter onStop={handleStop} />
        </div>
      </div>

      <div className="min-h-[40vh] flex justify-center items-start">
        {isTypingStopped && (
          <button className={styles.eightbitBtn}>Load Character</button>
        )}
      </div>
    </div>
  );
}
