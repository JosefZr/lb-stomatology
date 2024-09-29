"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import useReveal from '@/hooks/useReveal';

function HeroLb() {
  const targetRef = useRef(null);
  const [applyTransform, setApplyTransform] = useState(false);
  const [height, setHeight] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 0.5]);

  useEffect(() => {
    const handleResize = () => {
        const shouldApply = (window.innerWidth > 100 && window.innerHeight > 750) || (window.innerWidth > 768 && window.innerHeight > 430)  ;
      const isHeightSmall = window.innerHeight < 500
      setHeight(isHeightSmall);
      setApplyTransform(shouldApply);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useReveal("vertical");
  useReveal("horizontal");
  // const handleWhatsAppPress = () => {
  //   const whatsappUrl = "https://wa.me/79872346805"; // Replace with the actual WhatsApp number
  //   window.open(whatsappUrl, '_blank');
  // };
  return (
    <motion.section
      style={applyTransform ? { opacity } : {}}
      ref={targetRef}
      className="sm:h-screen sm:scroll-m-20 flex items-center justify-between flex-col mb-40"
      id='accueil'
    > 
      <motion.div 
        className={`fixed ${height ? 'relative' : 'max-md:relative'}`}
        style={applyTransform ? { scale } : { position: 'relative' }}
      >
        <div className='flex items-center justify-center flex-row gap-7 max-lg:flex-col xl:max-w-6xl max-[500px]:mx-1 mx-10 mt-20'>
          <div className=' flex items-center justify-center'>
            <div class="flip-card max-[320px]:w-48 max-[320px]:h-60 ">
                <div class="flip-card-inner max-[320px]:w-48 max-[320px]:h-60">
                    <div class="flip-card-front max-[320px]:w-48 max-[320px]:h-60">
                      <Image
                        src="/purple2.jpg"
                        alt='White and Black Simple Illustration Dental Clinic Logo'
                        width={500}
                        height={700}
                        quality={90}
                        priority
                        className='hero-horizontal-left rounded-xl object-cover shadow-xl pointer-events-none'
                      />
                    </div>
                    <div class="flip-card-back">
                    <Image
                        src="/purple.jpg"
                        alt='White and Black Simple Illustration Dental Clinic Logo'
                        width={400}
                        height={700}
                        quality={90}
                        priority
                        className='hero-horizontal-left rounded-xl object-cover shadow-xl pointer-events-none'
                      />
                    </div>
                </div>
            </div>
          </div>
          <div className='flex flex-col items-start max-lg:items-center justify-center max-md:items-center gap-6 mb-4 '>
            <h1 className='hero-vertical text-center text-2xl min-[300px]:text-3xl sm:text-5xl lg:text-5xl font-extrabold lg:text-left capitalize text-bold-purple'>Why You Should Choose Dental Implants over other Solutions !?</h1>
            <h2 className='hero-vertical text-center min-[300px]:text-3xl sm:text-4xl lg:text-4xl font-bold md:text-left capitalize '>
              Yes, we all know that implants are <br />
              <span className=' text-word-purple text-3xl'>Strong</span> • <span className=' text-word-purple text-3xl'>Long-lasting</span > • <span className=' text-word-purple text-3xl'>Natural-looking</span>
            </h2>
            <h3 className='hero-horizontal-right text-4xl font-semibold'>
              But ...
            </h3>
            
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default HeroLb;
