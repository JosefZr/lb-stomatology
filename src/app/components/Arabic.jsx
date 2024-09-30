import {Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Image from 'next/image';
import { useState } from "react";
export default function Arabic() {
    const [imageSrc, setImageSrc] = useState('/family/location2.jpg');
    const [languageButton, setLanguageButton] = useState('english');
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const handleImageChange = () => {
        setImageSrc(prevSrc => prevSrc === '/family/location2.jpg' ? '/family/location.jpg' : '/family/location2.jpg');
        setLanguageButton(prevLng => prevLng ==="english"? "arabic":"english")
    };

    return (
        <div className='flex flex-row items-center justify-center gap-1 px-10 max-[370px]:px-4 text-center mb-20'>
        <div className=' flex flex-col gap-10 text-4xl font-bold   '>
            <span className=' hover:opacity-70 text-word-purple transition-all'>Tooth loss can lead to irreversible Bone Loss ! </span>
            <button onClick={onOpen} className="btn mx-auto w-fit  text-xl max-sm:text-sm cursor-pointer">How !? </button>
        </div>
        
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={true} isKeyboardDismissDisabled={true}>
        <ModalContent>
            {(onClose) => (
                <>
                <ModalBody>
                    <div className=" flex  justify-center">
                        <Image
                            src={imageSrc}
                            width={400}
                            height={600}
                            alt='invitation for dental students'
                            quality={90}
                            className=' pointer-events-none text-center'
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
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
    </div>
    )
}
