"use client";
import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  useDisclosure,
  Image
} from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import CustomButton from "@/app/components/Button.jsx";
import { useLbNavbarLinks } from "@/app/lib/data";
import { slideIn, prespective } from "../../lib/Animation";
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { redirect } from "next/navigation";
import CustomNavItem from "./CustomNavItem";
import Link from "next/link";

const NavItem = styled.div`
  perspective: 120px;
  perspective-origin: bottom;
`;

function LbNavbar() {
  const links = useLbNavbarLinks();
  const [applyTransform, setApplyTransform] = useState(false);
  const [applyButton, setApplyButton] = useState(false);
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
  
  const [imageSrc, setImageSrc] = useState('/lb/p2.jpg');
  const [languageButton, setLanguageButton] = useState('AR');

  const handleImageChange = () => {
      setImageSrc(prevSrc => prevSrc === '/lb/p2.jpg' ? '/lb/p1.jpg' : '/lb/p2.jpg');
      setLanguageButton(prevLng => prevLng ==="AR"? "EN":"AR")
  };

  const handleLanguageToggle = () => {
    if (language === "EN") {
      setLanguage("AR");
      setLanguageButton("EN");
    } else {
      setLanguage("EN");
      setLanguageButton("AR");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const shouldApply = window.innerWidth < 500;
      const shouldApplyButton = window.innerWidth < 640;
      setApplyTransform(shouldApply);
      setApplyButton(shouldApplyButton);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
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
            <motion.div>
              <motion.div
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.8 }}
                layoutId="main-image-1"
              >
                <Image
                  src="/lb/lb-small.png"
                  alt="White and Black Simple Illustration Dental Clinic Logo"
                  width={70}
                  height={50}
                  className="rounded-full pointer-events-none"
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
              onPress={() => window.open("https://t.me/lbstoma1", " _blank")}
              icon={applyButton && <FaTelegram size={24} />}
              className="font-semibold bg-black text-gray-100 min-w-0"
            >
              {applyButton ? "" : "Make an Appointment"}
            </CustomButton>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="flex flex-col gap-10 cursor-pointer justify-start overflow-hidden pt-10 pl-10">
          {links.map((link, i) => (
            <NavItem key={i}>
              <motion.div
                variants={prespective(i)}
                animate="enter"
                initial="initial"
                exit="exit"
              >
                <NavbarMenuItem>
                  {link.name === "ЛБ’s SPECIAL PRICES" ? (
                    <CustomNavItem onClick={onPricesOpen} name={link.name}/>
                  ) : (link.name ==="Contact me Now !") ? (
                    <CustomNavItem onClick={onContactOpen} name={link.name}/>
                  ): (link.name=== "BENYAHIA Family") ?(
                    <Link 
                      href={"/BENYAHIA-Family"}
                      className="text-[46px] max-[540px]:text-[32px] font-semibold hover:text-word-purple"
                      passHref
                      >{link.name}</Link>
                  ):(
                    <div
                      onClick={onContactOpen}
                      className="text-[46px] max-[540px]:text-[32px] font-semibold hover:text-word-purple"
                      passHref
                    >
                      {link.name}
                    </div>
                  )}
                </NavbarMenuItem>
              </motion.div>
            </NavItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}

export default LbNavbar;
