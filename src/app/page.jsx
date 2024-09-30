"use client";
import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import HeroLb from "./lb/components/HeroLb";
import LbNavbar from "./lb/components/LbNavbar";
import LbLoader from "./lb/components/LbLoader";
import Convincing from "./lb/components/Convincing";
import InfiniteScroll from "./lb/components/InfiniteScroll";
import Arabic from "./components/Arabic";

export default function Lb() {
  const [loading, setLoading] = useState(true);
  const infiniteScrollRef = useRef(null);
  const scrollToInfo = () => {
    if (infiniteScrollRef.current) {
      infiniteScrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // Create a ref for the InfiniteScroll section

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
          {/* Pass the ref to LbNavbar */}
          <LbNavbar onScrollToInfo={scrollToInfo} />
          <HeroLb />
          <Convincing />
          <h3 className='pb-8 text-5xl xl:text-left max-sm:text-3xl sm:text-5xl text-center font-bold mx-auto w-fit'>
            Be aware !!
          </h3>
          <Arabic />
          {/* Attach the ref to InfiniteScroll */}
            <InfiniteScroll ref={infiniteScrollRef}/>
        </div>
      )}
    </AnimatePresence>
  );
}
