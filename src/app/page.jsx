"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import HeroLb from "./lb/components/HeroLb";
import LbNavbar from "./lb/components/LbNavbar";
import LbLoader from "./lb/components/LbLoader";
import Features from "./lb/components/Features";
import Convincing from "./lb/components/Convincing";
import InfiniteScroll from "./lb/components/InfiniteScroll";
import HorizontalScroll from "./lb/components/HorizontalScroll";
import Visitors from "./lb/components/Visitors"
import Arabic from "./components/Arabic";

export default function Lb() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.querySelector('body').classList.add('loading');
    } else {
      document.querySelector('body').classList.remove('loading');
    }
  }, [loading]);
  return (
    <AnimatePresence>
      {loading ? (
        <LbLoader
          setLoading={setLoading}
          exit={{
            opacity: 0,
            transition: { ease: [0.6, 0.01, -0.05, 0.9], duration: 3.8 }
          }}
        />
      ) : (
        <div className="relative min-h-screen overflow-hidden bg-[#F3EEF3]">
          {/* Background elements */}

          <LbNavbar />
          <HeroLb />
          <Visitors/>
          <Features />
          <Convincing />
          <Arabic/>
          <InfiniteScroll />
          <HorizontalScroll />
        </div>
      )}
    </AnimatePresence>
  );
}
