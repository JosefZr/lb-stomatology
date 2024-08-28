"use client";
import React, { useEffect, useState } from "react";
import {Modal, Button, ModalBody, ModalContent, ModalFooter, ModalHeader, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, useDisclosure } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { Image } from "@nextui-org/react";
import styled from "styled-components";
import CustomButton from "@/app/components/Button.jsx";
import { useLbNavbarLinks } from "@/app/lib/data"; 
import { slideIn, prespective } from "../../lib/Animation";
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
const NavItem = styled.div`
  perspective: 120px;
  perspective-origin: bottom;
`;

function LbNavbar() {
  const links = useLbNavbarLinks();
  const [applyTransform, setApplyTransform] = useState(false);
  const [applyButton, setApplyButton] = useState(false);
  const {isOpen: isContactOpen, onOpen: onContactOpen, onOpenChange: onContactOpenChange} = useDisclosure();
  const {isOpen: isPricesOpen, onOpen: onPricesOpen, onOpenChange: onPricesOpenChange} = useDisclosure();
  useEffect(() => {
    const handleResize = () => {
      const shouldApply = window.innerWidth < 500;
      const shouldApplyButton = window.innerWidth < 640;
      setApplyTransform(shouldApply);
      setApplyButton(shouldApplyButton);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
     <Modal size="lg" isOpen={isContactOpen} onOpenChange={onContactOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
            <ModalHeader>
              <p> 
                إذا كنت بحاجة الى زرع أسنان 
              </p>
            </ModalHeader>
              <ModalBody className=" text-end">
                <p> 
                  عيادة بن يحي تقدم لك
                  مجموعة واسعة من الخدمات الصحية ، من تبييض الأسنان وتنظيفها، إلى تقويم الأسنان وزراعة الأسنان. 
                </p>
                <p>
                احصل على استشارة مجانية وخصم 5% عند التواصل معنا اليوم!
                </p>
              </ModalBody>
              <ModalBody>
                <span className='cursor-pointer hover:text-word-purple flex flex-row items-center gap-1' onClick={()=>window.open("https://wa.me/79872346805", '_blank')} ><IoLogoWhatsapp className=" text-2xl"/> : +7 (987) 234 68 05 </span>
                <span className='cursor-pointer hover:text-word-purple flex flex-row items-center gap-1' onClick={() => window.open('https://t.me/LBSTOMA01', '_blank')}><FaTelegram className=" text-2xl"/>: @LBSTOMA01</span> 
                  <a href="mailto:lbstomatologia1@gmail.com" className=" hover:text-word-purple flex flex-row items-center gap-1"><MdEmail className=" text-2xl"/> : lbstomatologia1@gmail.com</a>
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
      <Modal size="lg" isOpen={isPricesOpen} onOpenChange={onPricesOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
            <ModalHeader className="flex items-center justify-center font-bold text-2xl text-word-purple">
              <h1 > 
                ЛБ’s SPECIAL PRICES
              </h1>
            </ModalHeader>
              <ModalBody className=" text-end">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>OUR SERVICES</th>
                      <th>PRICES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        <Image
                          src="https://img.icons8.com/?size=100&id=60688&format=png&color=000000"
                          className='w-12 h-12 pointer-events-none'
                          width={128}
                          height={128}
                          alt='external-orthodontic-dental-victoruler'
                        />
                      </th>
                    </tr>
                  </tbody>
                </table>
              </ModalBody>
              <ModalBody>
                <div className=" flex-flex-row">
                  <span>WhatsApp: </span><span className='cursor-pointer hover:text-word-purple' onClick={()=>window.open("https://wa.me/79872346805", '_blank')} >+7 (987) 234 68 05 </span>
                </div>
                <div className=" flex-flex-row">
                <FaTelegram />:<span className='cursor-pointer hover:text-word-purple' onClick={() => window.open('https://t.me/LBSTOMA01', '_blank')}> @LBSTOMA01</span> 
                </div>
                <div className="flex flex-row">
                <MdEmail />:
                  <a href="mailto:lbstomatologia1@gmail.com" className="text-blue-500 hover:underline">
                    lbstomatologia1@gmail.com
                  </a>
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
      <Navbar onMenuOpenChange={setIsMenuOpen} className="fixed h-24 max-[400px]:h-20">
      <NavbarContent justify="start">
        <AnimatePresence>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="w-fit"
          />
        </AnimatePresence>
      </NavbarContent>
      <motion.div className="flex justify-center items-center font-extrabold text-md">
        <NavbarBrand className="flex flex-row justify-center items-center font-extrabold text-md">
          <motion.div >
            <motion.div 
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.8 }}
                layoutId='main-image-1'
            >
                <Image
                src="/lb/lb-small.png"
                alt='White and Black Simple Illustration Dental Clinic Logo'
                width={70}
                height={50}
                className=' rounded-full pointer-events-none '
                />
            </motion.div>
            </motion.div>
        </NavbarBrand>
      </motion.div>
      <NavbarContent justify="end">
        <NavbarItem>
          
          <CustomButton
            passHref
            variant="shadow"
            onPress={()=>   window.open( 'https://t.me/lbstoma1'," _blank")}
            icon={applyButton && <FaTelegram  size={24} />}
            className="font-semibold  bg-black text-gray-100 min-w-0"
          >
            {applyButton ? "" : "Join ЛБ-Dental Family!"}
          </CustomButton>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex flex-col gap-10 cursor-pointer justify-start overflow-hidden pt-10 pl-10">
        {links.map((link, i) => (
          <NavItem key={i}>
            <motion.div variants={prespective(i)} animate="enter" initial="initial" exit="exit">
              <NavbarMenuItem>
                {
                  ( link.name==="ЛБ’s SPECIAL PRICES")?(
                    <div onClick={onPricesOpen}
                      className="text-[46px] font-semibold hover:text-word-purple"  passHref
                    >
                      {link.name}
                    </div>
                  ):(
                    <div onClick={onContactOpen}
                      className="text-[46px] font-semibold hover:text-word-purple"  passHref
                    >
                      {link.name}
                    </div>
                  )
                }
              </NavbarMenuItem>
            </motion.div>
          </NavItem>
        ))}
        <div className="relative flex flex-row items-center justify-start gap-5 mt-10">
          <NavItem key="new-switcher">
            <motion.div
              variants={slideIn(links.length)}
              animate="enter"
              initial="initial"
              exit="exit"
            >
              <NavbarMenuItem>
              </NavbarMenuItem>
            </motion.div>
          </NavItem>
          <NavItem key="locale-switcher">
            <motion.div
              variants={slideIn(links.length + 1)}
              animate="enter"
              initial="initial"
              exit="exit"
            >
              <NavbarMenuItem>
              </NavbarMenuItem>
            </motion.div>
          </NavItem>
        </div>
      </NavbarMenu>
         </Navbar>
    </>
    
  );
  
}

export default LbNavbar;
