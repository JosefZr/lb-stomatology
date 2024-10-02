"use client"
import React, { forwardRef, useRef, useState } from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/modal';
import { Button } from '@nextui-org/react';
import { FaPlay } from "react-icons/fa";
import Image from 'next/image';
import "./../../lb/components/hor.css"
import useReveal from '@/hooks/useReveal';
import { useLbNavbarLinks } from '@/app/lib/data.js';


//  eslint-disable-next-line react/display-name
 const StudentComp= forwardRef((_props, ref) => {
  const links = useLbNavbarLinks();

    const {isOpen: isInfoOpen, onOpen: onInfoOpen, onOpenChange: onInfoOpenChange} = useDisclosure();
    // const {isOpen: isVideoOpen, onOpen: onVideoOpen, onOpenChange: onVideoOpenChange} = useDisclosure();

    const [imageSrc, setImageSrc] = useState('/lb/invitation.webp');
    const [languageButton, setLanguageButton] = useState('french');

    const handleImageChange = () => {
        setImageSrc(prevSrc => prevSrc === '/lb/invitation.webp' ? '/lb/invitationFr.webp' : '/lb/invitation.webp');
        setLanguageButton(prevLng => prevLng ==="french"? "english":"french")
    };
    useReveal("horizontal")
    useReveal("vertical")

        // const {
        //     isOpen: isContactOpen,
        //     onOpen: onContactOpen,
        //     onOpenChange: onContactOpenChange
        // } = useDisclosure();
        // const {
        //     isOpen: isPricesOpen,
        //     onOpen: onPricesOpen,
        //     onOpenChange: onPricesOpenChange
        // } = useDisclosure();
        // const {
        //     isOpen: isLocationOpen,
        //     onOpen: onLocationOpen,
        //     onOpenChange: onLocationOpenChange
        // } = useDisclosure();

        // const handleLanguageToggle = () => {
        //     if (language === "EN") {
        //     setLanguage("AR");
        //     setLanguageButton("EN");
        //     } else {
        //     setLanguage("EN");
        //     setLanguageButton("AR");
        //     }
        // };
    return (
        <>
        <div className='relative mx-auto flex gap-4 flex-col text-center place-content-center xl:max-w-[1200px] max-[500px]:px-2 pb-16 pt-5'>
            <div className='flex flex-row-reverse max-[360px]:flex-col-reverse justify-center gap-10 max-[360px]:gap-5 items-center '>
            </div>
                <div className='flex flex-col gap-5'>
                <div className=' font-bold text-5xl max-[450px]:text-2xl pb-10'>•Exclusive for Dental students•</div>
                <div className=' flex flex-col gap-3 max-[450px]:gap-0 text-4xl max-[450px]:text-lg font-bold capitalize   mx-1'>
                    <h1 >Dental schools teach you how to become a <span className=' text-word-purple'>dentist</span>, not how to become a <span className=' text-word-purple'>successful</span> one .
                    </h1>
                    <br />
                    <h1 >Want to be a High-Value Dentist !? </h1>
                    <br />
                    <h1>Then commit to life long Learning . .</h1> 
                </div>
                {/* <div className='flex flex-row max-[360px]:flex-col-reverse justify-center gap-10 max-[360px]:gap-5 items-center mb-10'>
                    
                    <div >
                        <button className='btn  p-6 text-xl max-[400px]:text-sm rounded-full w-fit cursor-pointer' onClick={onVideoOpen}> {<FaPlay />}
                        </button>
                    </div>
                    <Modal isOpen={isVideoOpen} onOpenChange={onVideoOpenChange} size="2xl">
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1 text-white">Modal Title</ModalHeader>
                                    <ModalBody className='px-0 py-0'>
                                        <iframe 
                                            width="100%" 
                                            height="315" 
                                            src="https://www.youtube.com/embed/ZK3uwiKV6rU?si=sVNvxoWn__JeHroF"
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="shadow" onPress={onClose}>Close</Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div> */}
                <div className='flex flex-col justify-between gap-5 items-center'>
                
                    <div>
                        <button className='btn capitalize text-xl max-sm:text-sm'  
                        onClick={() => window.open('https://t.me/lbstoma1', '_blank')}>
                        Join ЛБ-STOMATOLOGY
                        </button>
                    </div>
                    <div  className=' font-bold text-5xl max-[450px]:text-2xl mt-20'>•Connect with each other •</div>
                    <button className='btn capitalize text-xl max-sm:text-sm my-8'   
                        onClick={() => window.open('https://t.me/LBSTOMATOLOGYchat', '_blank')}>
                            Join ЛБ’s Generations 
                        </button>
                    <div className=' flex flex-col gap-3 max-[450px]:gap-0 text-4xl max-[450px]:text-lg font-bold capitalize   mx-1'>
                        <h1>IF YOU’RE INTERESTED IN <span className=' text-word-purple'>UNLOCKING THE SECRETS</span> BEHIND THE WORLD’S DENTAL UNIVERSITIES…</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center pb-10'>
                        <span
                            className='text-2xl text-word-purple cursor-pointer underline'
                            onClick={onInfoOpen}
                        >
                            Read More
                        </span>
                        <Modal isOpen={isInfoOpen} onOpenChange={onInfoOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                                    <ModalBody>
                                        <Image
                                            src={imageSrc}
                                            width={400}
                                            height={600}
                                            alt='invitation for dental students'
                                            quality={90}
                                            className=' pointer-events-none'
                                        />
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="shadow" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button variant='shadow' className="bg-light-purple text-white" onPress={handleImageChange}>
                                            Show {languageButton} Version
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                        <span className='text-word-purple text-3xl'>..</span>
                    </div>
        </>
    );
})
export default  StudentComp