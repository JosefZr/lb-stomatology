import React, { useState } from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/modal';
import { Button, Card, CardBody, CardHeader, Link, NavbarItem, NavbarMenuItem } from '@nextui-org/react';
import { FaPlay } from "react-icons/fa";
import Image from 'next/image';
import "./hor.css"
import useReveal from '@/hooks/useReveal';
import { useLbNavbarLinks } from '@/app/lib/data.js';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaTelegram } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import CustomNavItem from './CustomNavItem';
import { CiInstagram } from "react-icons/ci";

export default function InfiniteScroll() {
  const links = useLbNavbarLinks();

    const {isOpen: isInfoOpen, onOpen: onInfoOpen, onOpenChange: onInfoOpenChange} = useDisclosure();
    const {isOpen: isVideoOpen, onOpen: onVideoOpen, onOpenChange: onVideoOpenChange} = useDisclosure();

    const [imageSrc, setImageSrc] = useState('/lb/invitation.webp');
    const [languageButton, setLanguageButton] = useState('french');

    const handleImageChange = () => {
        setImageSrc(prevSrc => prevSrc === '/lb/invitation.webp' ? '/lb/invitationFr.webp' : '/lb/invitation.webp');
        setLanguageButton(prevLng => prevLng ==="french"? "english":"french")
    };
    useReveal("horizontal")
    useReveal("vertical")

        const {
            isOpen: isContactOpen,
            onOpen: onContactOpen,
            onOpenChange: onContactOpenChange
        } = useDisclosure();
        const {
            isOpen: isPricesOpen,
            onOpen: onPricesOpen,
            onOpenChange: onPricesOpenChange
        } = useDisclosure();
        const {
            isOpen: isLocationOpen,
            onOpen: onLocationOpen,
            onOpenChange: onLocationOpenChange
        } = useDisclosure();

        const handleLanguageToggle = () => {
            if (language === "EN") {
            setLanguage("AR");
            setLanguageButton("EN");
            } else {
            setLanguage("EN");
            setLanguageButton("AR");
            }
        };
    return (
        <>
        <div className='relative mx-auto flex gap-4 flex-col text-center place-content-center xl:max-w-[1200px] max-[500px]:px-2 py-28'>
            <div className=' flex flex-col gap-5'>
                <h1 className=' text-5xl font-bold uppercase max-[400px]:text-3xl max-xs:text-xl'>If you Want a Guaranteed Treatment Take your first step towards a successful one !</h1>
                <br />
                <h1 className='text-5xl font-bold uppercase max-[400px]:text-3xl max-xs:text-xl'>By choosing the right <span className=' text-word-purple'>operator</span> who may do for you the right <span className=' text-word-purple'>Treatment Planing.</span></h1>
            </div>

            <div className='flex flex-row-reverse max-[360px]:flex-col-reverse justify-center gap-10 max-[360px]:gap-5 items-center mb-20'>
                    <div className='flex flex-row items-end gap-1'>
                            <button
                                className='btn  p-6 text-xl rounded-full w-fit cursor-pointer'
                                onClick={onVideoOpen}
                            >
                                {<FaPlay />}
                            </button>
                    </div>
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
                    <div>
                        <button className='btn capitalize text-xl'  onClick={onInfoOpen}>Get your Treatment-Plan Today !
                        </button>
                    </div>
                    <Modal isOpen={isVideoOpen} onOpenChange={onVideoOpenChange} size="lg">
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1 text-white">Modal Title</ModalHeader>
                                    <ModalBody className='px-0 py-0'>
                                        <iframe 
                                            width="100%" 
                                            height="415" 
                                            src="https://youtube.com/embed/YzBgG9Ny5WM?si=jj7gDYy7AqtxSd66"
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
            </div>

            <div className='flex justify-center flex-col gap-5 px-5 mx-auto'>
                <h1 className='self-center text-5xl xl:text-left max-sm:text-3xl sm:text-5xl text-center font-bold underline text-word-purple pt-20 pb-5'>L.B STOMATOLOGY</h1>
                <h2 className=' text-start min-[300px]:text-3xl sm:text-4xl lg:text-4xl font-bold md:text-left capitalize '>Provides you all dental services such as : </h2>
                <div>
                    <ul className='flex flex-col  gap-2 pl-5'>
                        <li className='capitalize text-xl flex flex-row items-center gap-2'>
                            <Image
                                src="/icons/1.png"
                                alt="icon"
                                width={40}
                                height={40}
                            />
                            <h2>Orthodontics ( braces, tads and aligners ).</h2>
                        </li>
                        <li className='capitalize text-xl flex flex-row items-center gap-2'>
                            <Image
                                src="/icons/2.png"
                                alt="icon"
                                width={40}
                                height={40}
                            />
                            <h2>Gingivectomy surgery. ( Gummy smile ).</h2>
                        </li>
                        <li className='capitalize text-xl flex flex-row items-center gap-2'>
                            <Image
                                src="/icons/3.png"
                                alt="icon"
                                width={40}
                                height={40}
                            />
                            <h2>Wisdom tooth surgery.</h2>
                        </li>
                        <li className='capitalize text-xl flex flex-row items-center gap-2'>
                            <Image
                                src="/icons/4.png"
                                alt="icon"
                                width={40}
                                height={40}
                            />
                            <h2>Root canal treatments.</h2>
                        </li>
                        <li className='capitalize text-xl flex flex-row items-center gap-2'>
                            <Image
                                src="/icons/5.png"
                                alt="icon"
                                width={40}
                                height={40}
                            />
                            <h2>Teeth whitening.</h2>
                        </li>

                    </ul>
                </div>
                <h2 className=' text-start min-[300px]:text-3xl sm:text-4xl lg:text-4xl font-bold md:text-left capitalize '>Everything except veneers (Hollywood smile)</h2>
                <h2 className=' text-start min-[300px]:text-3xl sm:text-4xl lg:text-4xl font-bold md:text-left capitalize text-light-purple'>because it’s against our Principles .</h2>

            </div>
            <div className=' mx-auto w-fit h-full mt-20'>
                <Card className="py-4">
                    <CardBody className="pb-0 pt-2  flex-col items-start">
                    {links.map((link, i) => (
                        <div key={i}>
                            {/* <motion.div
                            variants={prespective(i)}
                            animate="enter"
                            initial="initial"
                            exit="exit"
                            > */}
                        <ul>
                            {link.name === "Locations 📍" ? (
                            <div
                                onClick={onLocationOpen}
                                className="text-[46px] max-[540px]:text-[32px] font-semibold hover:text-word-purple"
                                passHref
                            >
                                {link.name}
                            </div>
                            ) : link.name === "Contact me Now !" ? (
                            <div className=' flex flex-row justify-between items-center gap-6'>
                                <CustomNavItem onClick={onContactOpen} name={link.name}/>
                                {<CiInstagram className=' w-12 h-auto text-word-purple cursor-pointer' 
                                onClick={() => window.open("https://www.instagram.com/lb.stomatology?igsh=OXh0NG53OXk2NXNo&utm_source=qr", " _blank")}/>}
                            </div>
                            ) : link.name === "BENYAHIA Family" ? (
                            <Link 
                                href={"/BENYAHIA-Family"}
                                className="text-[46px] max-[540px]:text-[32px] font-semibold hover:text-word-purple text-black"
                                passHref
                            >
                                {link.name}
                            </Link>
                            ) :("")}
                        </ul>
                        {/* </motion.div> */}
                    </div>
                    ))}
                </CardBody>
                    
                </Card>
                <Modal
                    size="lg"
                    isOpen={isPricesOpen}
                    onOpenChange={onPricesOpenChange}
                    isDismissable={true}
                    isKeyboardDismissDisabled={true}
                    >
                        <ModalContent>
                        {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                            <ModalBody  className=" flex justify-center items-center">
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
                                    {languageButton} Version
                                </Button>
                            </ModalFooter>
                        </>
                        )}
                        </ModalContent>
                </Modal>
                <Modal
                        size="lg"
                        isOpen={isLocationOpen}
                        onOpenChange={onLocationOpenChange}
                        isDismissable={true}
                        isKeyboardDismissDisabled={true}
                        >
                            <ModalContent>
                            {(onClose) => (
                                <>
                                <ModalHeader className=" flex items-center justify-center">
                                    <h1 className=" text-3xl text-word-purple">Locations</h1>
                                </ModalHeader>
                                <ModalBody className=" max-sm:flex-col gap-5">
                                    <div>
                                    <p>• Bordj Bou Arreridj *2</p>
                                    <p>• ⁠Soon we will be available in   Algiers .</p>
                                    <br />
                                    <p>Ps: Our Prices will be the Same anywhere ! </p>
                                    <br /> <br />
                                    <p className=" text-word-purple">ЛБ-STOMATOLOGY is built on solid principles.</p>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                    </Button>
                                </ModalFooter>
                                </>
                            )}
                            </ModalContent>
                </Modal>
                <Modal
                    size="lg"
                    isOpen={isContactOpen}
                    onOpenChange={onContactOpenChange}
                    isDismissable={true}
                    isKeyboardDismissDisabled={true}
                >
                    <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className=" flex items-center justify-center">
                            <h1 className=" text-3xl text-word-purple">َسلامة جسمك تبدأ من فَمك</h1>
                        </ModalHeader>
                        <ModalBody className="text-end">
                            <p>
                            عيادة بن يحي تُقدم لك عدد كبير من الحلول العلاجية
                            </p>
                            <div className=" flex flex-row-reverse items-center justify-start gap-1">
                            <p>( و تقدم لك ايضاً استشارة مجانية ) </p>
                            <p> في مجال زراعة الاسنان </p>
                            </div>
                            <p className=" text-word-purple">
                            ❗و خصم  ٪٥اذا تواصلت معنا اليوم 
                            </p>
                        </ModalBody>
                        <ModalBody>
                            <span
                            className="cursor-pointer hover:text-word-purple flex flex-row items-center gap-1"
                            onClick={() => window.open("https://wa.me/79872346805", "_blank")}
                            >
                            <IoLogoWhatsapp className="text-2xl" /> : +7 (987) 234 68 05
                            </span>
                            <span
                            className="cursor-pointer hover:text-word-purple flex flex-row items-center gap-1"
                            onClick={() => window.open("https://t.me/LBSTOMA01", "_blank")}
                            >
                            <FaTelegram className="text-2xl" />: @LBSTOMA01
                            </span>
                            <a
                            href="mailto:lbstomatologia1@gmail.com"
                            className="hover:text-word-purple flex flex-row items-center gap-1"
                            >
                            <MdEmail className="text-2xl" /> : lbstomatologia1@gmail.com
                            </a>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                            Close
                            </Button>
                        </ModalFooter>
                        </>
                    )}
                    </ModalContent>
                </Modal>
            </div>
                {/* <div className='flex flex-col pt-10 gap-5'>
                <div className='reveal-vertical font-bold text-5xl max-[450px]:text-2xl'>•Exclusive for Dental students•</div>
                <div className='flex flex-row max-[360px]:flex-col-reverse justify-center gap-10 max-[360px]:gap-5 items-center mb-10'>
                    <div className='flex flex-row items-end gap-1'>
                        <div className='reveal-horizontal-left flex flex-row'>
                            <span
                                className='text-2xl text-word-purple cursor-pointer underline'
                                onClick={onInfoOpen}
                            >
                                Read More
                            </span>
                            <span className='text-word-purple text-3xl'>..</span>
                        </div>
                    </div>
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
                    <div className=' reveal-horizontal-right'>
                        <button className='btn capitalize' onClick={onVideoOpen}> play now
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
                </div>
                <div className='flex flex-col justify-between gap-5 items-center'>
                    <Button  
                        className='reveal-horizontal-left rounded-2xl bg-black text-white px-6 py-7 text-3xl max-[450px]:text-xl w-fit' 
                        onClick={() => window.open('https://t.me/lbstoma1', '_blank')}>
                        Join ЛБ-Dental Family! 
                    </Button>
                    <h2 className='reveal-horizontal-right text-4xl max-[410px]:text-2xl max-xs:text-xl font-semibold uppercase max-[350px]:text-2xl'>
                        IF you’re interested in <span className='text-word-purple'> UNLOCKING THE SECRETS </span>
                        Behind The World’s dental universities…
                    </h2>
                </div>
            </div> */}
        </div>
        </>
    );
}
