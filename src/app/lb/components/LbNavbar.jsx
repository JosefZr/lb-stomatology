"use client";
import React, { useEffect, useState } from "react";
import {Modal,Button,ModalBody,ModalContent,ModalFooter,ModalHeader,Navbar,NavbarBrand,NavbarContent,NavbarItem,NavbarMenu,NavbarMenuItem,NavbarMenuToggle,useDisclosure,Image} from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import CustomButton from "@/app/components/Button.jsx";
import CustomNavItem from "./CustomNavItem";
import { Ri24HoursLine } from "react-icons/ri";
import { GiGraduateCap } from "react-icons/gi";
import { LiaUniversitySolid } from "react-icons/lia";
import Link from "next/link";
const NavItem = styled.div`
  perspective: 120px;
  perspective-origin: bottom;
`;

function LbNavbar({ onScrollToInfo  }) {
  const [applyTransform, setApplyTransform] = useState(false);
  const [applyButton, setApplyButton] = useState(false);

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

  // const handleInfosClick = () => {
  //   if (infiniteScrollRef && infiniteScrollRef.current) {
  //     infiniteScrollRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <>
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
              <ModalBody className=" flex justify-center items-center">
                <Image
                  src={imageSrc}
                  width={400}
                  height={600}
                  alt="invitation for dental students"
                  quality={90}
                  className=" pointer-events-none"
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

      <Navbar onMenuOpenChange={setIsMenuOpen} className="fixed h-24 max-[400px]:h-20 ">
        <NavbarContent justify="start">
          <AnimatePresence>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="w-fit"
            />
          </AnimatePresence>
        </NavbarContent>
        <NavbarContent justify="center" className=" flex flex-row items-center gap-5">
          <Link  passHref href={"/Students"}>
            <GiGraduateCap className=" w-10 h-auto cursor-pointer"/>
          </Link>
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
        <Link  passHref href={"/New-Generations"}>
          <LiaUniversitySolid className=" w-10 h-auto cursor-pointer"/>
        </Link>
        </NavbarContent>
      

        <NavbarContent justify="end">
          <NavbarItem>
            <CustomButton
              passHref
              variant="shadow"
              onPress={() => window.open("https://wa.me/79872346805", " _blank")}
              icon={applyButton && <Ri24HoursLine size={24} />}
              className="font-semibold bg-black text-gray-100 min-w-0 "
            >
              {applyButton ? "" : "Make an Appointment"}
            </CustomButton>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="flex flex-col gap-10 cursor-pointer justify-center items-center overflow-hidden pt-10 pl-10  ">
          <NavItem>
            <NavbarMenuItem>
              <CustomNavItem onClick={onPricesOpen} name="ЛБ’s SPECIAL PRICES" />
            </NavbarMenuItem>
          </NavItem>
          <NavItem>
            <NavbarMenuItem>
              <CustomNavItem name="Infos" onClick={onScrollToInfo} />
            </NavbarMenuItem>
          </NavItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}

export default LbNavbar;
