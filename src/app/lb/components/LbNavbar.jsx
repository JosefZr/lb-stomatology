"use client";
import React, { useEffect, useState } from "react";
import {Modal, Button, ModalBody, ModalContent, ModalFooter, ModalHeader, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, useDisclosure } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { Image } from "@nextui-org/react";
import styled from "styled-components";
import Link from "next/link";
import CustomButton from "@/app/components/Button.jsx";
import { useLbNavbarLinks } from "@/app/lib/data"; 
import { slideIn, prespective } from "../../lib/Animation";
import { FaTelegram } from "react-icons/fa";
const NavItem = styled.div`
  perspective: 120px;
  perspective-origin: bottom;
`;

function LbNavbar() {
  const links = useLbNavbarLinks();
  const [applyTransform, setApplyTransform] = useState(false);
  const [applyButton, setApplyButton] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
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
      <NavbarMenu className="flex flex-col gap-5 justify-start overflow-hidden pt-10 pl-10">
        {links.map((link, i) => (
          <NavItem key={i}>
            <motion.div variants={prespective(i)} animate="enter" initial="initial" exit="exit">
              <NavbarMenuItem>
                {
                  ( link.name)?(
                    <div onClick={onOpen}
                      
                    className="text-[46px] font-semibold hover:text-word-purple"  passHref>
                    {link.name}
                  </div>
                  ):
                  <Link onClick={()=>{}} className="text-[46px] font-semibold hover:text-word-purple" href={link.hash} passHref>
                    {link.name}
                  </Link>
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
      <Modal size="lg" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
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
                <div className=" flex-flex-row">
                  <span>WhatsApp: </span><span className='cursor-pointer hover:text-word-purple' onClick={()=>window.open("https://wa.me/79872346805", '_blank')} >+7 (987) 234 68 05 </span>
                </div>
                <div className=" flex-flex-row">
                <span>Telegram:</span><span className='cursor-pointer hover:text-word-purple' onClick={() => window.open('https://t.me/LBSTOMA01', '_blank')}> @LBSTOMA01</span> 
                </div>
                <div className="flex flex-row">
                  📧:{" "}
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
    </Navbar>
  );
}

export default LbNavbar;
