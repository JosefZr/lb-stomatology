"use client";
// import React, { useRef } from 'react';
import {  useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

// import useReveal from '@/hooks/useReveal';

function Convincing() {
    // const ref = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ["0 1", "1.33 1"], 
    // });
    // const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    // const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    // useReveal("horizontal")
    // useReveal("vertical")
    return (
        <div 
            className='text-center scroll-mt-28 max-w-[1300px] mx-auto  rounded-3xl mb-20'
            // id='nous'
            // ref={ref}
            // style={{ scale: scaleProgress, opacity: opacityProgress }}
        >
            <section className='bg-transparent flex xl:flex-row-reverse flex-col justify-evenly gap-5 max-sm:mx-0 mx-auto md:px-10 md:py-10 pb-10 max-sm:px-5 max-[400px]:px-2 items-start max-xl:items-center rounded-xl'>
                <div className='flex items-center flex-col gap-10 max-[375px]:gap-5'>
                    <h1 className=' xl:hidden capitalize font-bold sm:text-5xl text-5xl whitespace-normal max-[400px]:text-3xl'>
                        Dental implants are not only an <span className='text-word-purple'>Aesthetic</span> Procedure But also a <span className='text-word-purple'>Healthy</span> One
                    </h1>
                    <div class="flip-card max-sm:h-72 max-sm:w-[400px] sm:w-[500px] max-[375px]:w-64 max-[375px]:h-48 ">
                        <div class="flip-card-inner max-sm:h-72 max-sm:w-[400px] sm:w-[500px] max-[375px]:w-64 max-[375px]:h-48">
                            <div class="flip-card-front max-sm:h-72 max-sm:w-[400px] sm:w-[500px] max-[375px]:w-64 max-[375px]:h-48">
                            <Image
                                src="/flip.jpg"
                                alt='White and Black Simple Illustration Dental Clinic Logo'
                                width={500}
                                height={300}
                                quality={90}
                                priority
                                className=' rounded-xl object-cover shadow-xl pointer-events-none'
                            />
                            </div>
                            <div class="flip-card-back max-sm:h-72 max-sm:w-[400px]  sm:w-[500px] max-[375px]:w-64 max-[375px]:h-48">
                            <Image
                                src="/flip2.jpg"
                                alt='White and Black Simple Illustration Dental Clinic Logo'
                                width={500}
                                height={300}
                                quality={90}
                                priority
                                className=' rounded-xl object-cover shadow-xl pointer-events-none'
                            />
                            </div>
                        </div>
                    </div>
                    </div>
                <div className='flex flex-col max-xl:text-center text-start gap-7 max-xl:w-full w-[50%] pt-5'   >
                    <h1 className=' max-xl:hidden relative capitalize font-bold max-sm:text-3xl text-5xl whitespace-normal '>They Are Not Only An  <span className='text-word-purple'>Aesthetic</span> Procedure But also a <span className='text-word-purple'>Healthy</span> One</h1>
                    <h2 className=' text-center xl:text-left max-sm:text-3xl sm:text-5xl  font-bold capitalize'>They prevent Bone Loss</h2>
                    
                </div>
            </section>
        </div>
    );
}

export default Convincing;
